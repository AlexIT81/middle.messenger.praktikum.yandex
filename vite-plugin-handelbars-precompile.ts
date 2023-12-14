import { PluginOption } from 'vite';
import Handlebars from 'handlebars';

export default function vitePluginHandlebarsPrecompile(): PluginOption {
  return {
    name: 'vite-plugin-handlebars-precompile',
    /* eslint-disable consistent-return */
    transform(code, id) {
      if (id.endsWith('.hbs') || id.endsWith('.handlebars')) {
        return {
          code: `
                import Handlebars from 'handlebars';
                export default Handlebars.template(${Handlebars.precompile(code)});
            `,
        };
      }
    },
  };
}
