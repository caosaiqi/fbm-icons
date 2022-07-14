import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { optimize } from 'svgo'
import nodePlop from 'node-plop'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// svg 源文件目录
const __src = path.join(__dirname, '../src')

//  入口文件
const __main = path.join(__dirname, '../index.tsx')

const optimizeSvg = (file) => {
  const svg = fs.readFileSync(file);
  const result = optimize(svg, {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            convertColors: {
              currentColor: true,
            },
          },
        },
      },
    ],
  });
  const optimizedSvgString = result.data;
  return optimizedSvgString.replace(/<[/]?svg[^<]*?>/g, "");
};

const camelize = (string) => {
  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
  // Ensure 1st char is always lowercase
  return string.substr(0, 1).toUpperCase() + string.substr(1);
}

const generate = async () => {

  fs.writeFileSync(__main, '')

  const svgs = fs.readdirSync(__src)
  const plop = await nodePlop();

  const basic = plop.setGenerator('create', {
    description: '生成icon组件',
    actions: () => {
      const actions = []

      svgs.forEach(fileName => {
        const componentName = camelize(fileName.split('.')[[0]])

        // 添加icon
        actions.push({
          type: "add",
          path: `_lib/${componentName}Icon.tsx`,
          templateFile: path.join(__dirname, '../plop-templates/Icon.hbs'),
          data: {
            children: optimizeSvg(`${__src}/${fileName}`),
            componentName,
          },
        })

        // 写入index
        actions.push({
          type: "append",
          path: __main,
          templateFile: path.join(__dirname, '../plop-templates/export.icon.hbs'),
          data: {
            componentName,
          },
        })
      })

      return actions
    }
  })

  basic.runActions()

}

generate()