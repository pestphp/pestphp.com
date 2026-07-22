<p align="center">
    <a href="https://pestphp.com"><img src="https://raw.githubusercontent.com/pestphp/art/master/v5/social.png" width="600" alt="Pest"></a>
</p>

------

# pestphp.com

The source of **[pestphp.com](https://pestphp.com)** — the marketing site and documentation for Pest, the testing framework PHP developers and their agents love to reach for.

Two front-ends live in one Laravel app:

- **Landing page** (`/`) — a standalone static Vite project in `resources/www/` (HTML + Tailwind v4 + Alpine). It builds to `public/www/` and is served from there.
- **Documentation** (`/docs/{page}`) — Laravel + Blade rendered from the markdown in `resources/docs/{version}/`, mirrored from **[pestphp/docs](https://github.com/pestphp/docs)**.

Know which one you're touching before you edit — they share no build tooling, CSS, or JS.

## Local development

These steps assume you serve the site with Laravel Valet out of `~/Sites`.

1. Fork this repository.
2. Clone your fork, dropping your username into the `{username}` slot:
    ```bash
    cd ~/Sites
    git clone https://github.com/{username}/pestphp.com pestphp.com
    cd pestphp.com
    ```
3. Run the setup script. It installs Composer and npm dependencies, generates your `.env`, pulls the docs branches, and builds both front-ends:
    ```bash
    ./bin/setup.sh
    ```

The site is now live at `http://pestphp.com.test`.

Iterate on the landing page with its own dev server:

```bash
cd resources/www && npm run dev
```

The `/` route serves the built artifact (`public/www/index.html`), so run `npm run build` from `resources/www/` before your changes show up at `/`.

## Staying in sync

The [syncing a fork](https://help.github.com/en/articles/syncing-a-fork) guide covers pulling the latest changes into your fork. After you pull upstream changes, refresh dependencies, docs branches, and builds in one step:

```bash
./bin/update.sh
```

## Contributing

Contributions are welcome. See **[CONTRIBUTING.md](CONTRIBUTING.md)** before opening a pull request. To edit the documentation content itself, head to **[pestphp/docs](https://github.com/pestphp/docs)**.

## Sponsors

We cannot thank our sponsors enough for funding Pest's development — their support is what keeps it moving. Want to join them? Support Nuno Maduro's work at **[github.com/sponsors/nunomaduro](https://github.com/sponsors/nunomaduro)**.

- **[CMS Max](https://cmsmax.com/?ref=pestphp)**
- **[PhpStorm](https://jb.gg/nuno)**
- **[CodeRabbit](https://coderabbit.link/nunomaduro)**
- **[SerpApi](https://serpapi.com/?ref=nunomaduro)**
- **[Bento](https://bentonow.com/?ref=nunomaduro)**
- **[Redberry](https://redberry.international/laravel-development/)**

## License

pestphp.com is open-sourced software licensed under the **[MIT license](https://opensource.org/licenses/MIT)**.
