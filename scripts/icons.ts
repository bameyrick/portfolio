import chalk from 'chalk';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import * as svgo from 'svgo';

const ICONS_DIR = 'apps/portfolio/svg';
const ICONS_RESULT_DIR = 'apps/portfolio/public/svg';

async function icons(): Promise<void> {
  console.log(chalk.blue(`PROCESSING ICONS`));

  const svgoConfig = await svgo.loadConfig('./svgo.config.js');

  const sourcePaths = glob.sync(`${ICONS_DIR}/**/*.svg`);

  if (!existsSync(ICONS_RESULT_DIR)) {
    mkdirSync(ICONS_RESULT_DIR);
  }

  sourcePaths.forEach(path => {
    const file = readFileSync(path, 'utf8');
    const name = path.replace(`${ICONS_DIR}`, '').slice(1);
    const { data } = svgo.optimize(file, svgoConfig);

    writeFileSync(`${ICONS_RESULT_DIR}/${name}`, data, 'utf8');
  });

  console.log(chalk.green('ICONS OPTIMISED'));
}

void icons();
