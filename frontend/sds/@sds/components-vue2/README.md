# @SDS/Components-Vue2

Vue 2 components for the SEI Design System.

## Intial Setup

Configure your NPM @sds scoped registry

```bash
npm config set @sds:registry https://artifacts.sei.cmu.edu/artifactory/api/npm/sei-design-system/
```

Configure your NPM registry

```bash
npm config set registry https://artifacts.sei.cmu.edu/artifactory/api/npm/npm/
```

## Documentation

For full documentation, visit [designsystem.sei.cmu.edu](https://designsystem.sei.cmu.edu)

## Contributing

To contribute, please visit [Contributing to the SEI Design System](https://wiki-int.sei.cmu.edu/confluence/x/FpkmGQ)

## Code File Structure

* `/src` -> contains all SDS related components, tailwind config, etc
* `/src/docs` -> contains dev site source
* `/public` -> used by dev site for public assets (favicon.ico, etc)
* `/tests` -> will contain the unit/e2e tests once we get there
* `/scripts` -> contains the scripts to bundle and release the @sei/design-system node_module to artifactory.

## Development

### Project Setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies dev site for production

```bash
npm run build
```

### Allows for local preview of dev site production build

```bash
npm run serve
```

### Bundle the `/dist` folder for the @sei/design-system node_module

```bash
npm run bundle:release
```

See `/scripts/bundle-release.sh` for details.

### Release the `/dist` folder as the @sei/design-system node_module

Login to NPM (use your SEI credentials)

```bash
npm login --registry=https://artifacts.sei.cmu.edu/artifactory/api/npm/sei-design-system/
```

Run the release script

```bash
npm run release
```

See `/scripts/release.sh` for details.
