<h5 align="center">
    <img src="https://raw.githubusercontent.com/vsnthdev/twitter-banner/main/media/twitter-banner.png" alt="twitter-banner">
</h5>
<p align="center"><strong>Automatically 🤖 updates Twitter banner ⌚ every few minutes.</strong></p>
<p align="center">
    <a href="https://github.com/vsnthdev/twitter-banner/actions/workflows/ci.yml">
        <img src="https://img.shields.io/github/workflow/status/vsnthdev/twitter-banner/Banner%20Update?label=status&style=flat-square" alt="CI/CD Status">
    </a>
    <a target="_blank" rel="noopener" href="http://vas.cx/twitter">
        <img src="https://img.shields.io/twitter/follow/vsnthdev?color=1da1f2&label=followers&style=flat-square" alt="Twitter followers">
    </a>
    <a href="https://github.com/vsnthdev/twitter-banner/issues">
        <img src="https://img.shields.io/github/issues/vsnthdev/twitter-banner.svg?style=flat-square" alt="Project issues">
    </a>
    <a href="https://github.com/vsnthdev/twitter-banner/commits/main">
        <img src="https://img.shields.io/github/last-commit/vsnthdev/twitter-banner.svg?style=flat-square"
            alt="Project commits">
    </a>
</p>

Unlike my previous approach where I used Redis + Digital Ocean + Docker to update the Twitter profile banner, this approach does not need to be deployed separately & uses Github Actions instead. Read how it works for more information.

> Tweet me <a target="_blank" rel="noopener" href="https://vas.cx/twitter">@vsnthdev</a>, I would love to know your opinion/experience on this project 😍

## ✨ Usage Guide

You can easily have this project change your Twitter profile's cover image by following the below steps:

1. Fork [this repository](https://github.com/vsnthdev/twitter-banner/fork?fragment=1)
2. Set the [below environment variables](#%EF%B8%8F-environment-variables) as repository secrets
3. <a target="_blank" rel="noopener" href="https://user-images.githubusercontent.com/24322511/147423094-146aeeae-eeff-4ec3-8001-44d9adcad7bf.png">Enable workflows</a> on the forked repository
4. Update the banner image at [`data/background.png`](https://github.com/vsnthdev/twitter-banner/blob/main/data/background.png)
5. Optionally update the stylesheet at [`data/styles.css`](https://github.com/vsnthdev/twitter-banner/blob/main/data/styles.css)
6. Select the "Banner Update" workflow & click on "Run workflow"

## 💡 How It Works

## 🏕️ Environment Variables

| Variable | Description | Default Value |
| -------- | ----------- | ------------- |
| `BACKGROUND_IMAGE` | Background image name | `background.png` |
| `STYLESHEET_NAME` | The CSS filename | `styles.css` |
| `NO_FOLLOWERS` | Number of followers to get images of | `4` |
| `TWITTER_USERNAME` | Your Twitter username |  |
| `TWITTER_API_KEY` | Twitter API key from developer dashboard |  |
| `TWITTER_API_SECRET` | Twitter API secret from developer dashboard |  |
| `TWITTER_ACCESS_TOKEN` | Twitter API access token with read/write permissions |  |
| `TWITTER_TOKEN_SECRET` | Twitter API token secret with read/write permissions |  |
| `IMAGES_CONTAINER_ID` | ID of the div where images will be attached | `images` |

## 📋 License

> The **twitter-banner** project is released under the [GPL v2](https://github.com/vsnthdev/twitter-banner/blob/main/LICENSE.md). <br> Developed &amp; maintained By Vasanth Srivatsa. Copyright 2021 © Vasanth Developer.

<hr>

> <a href="https://vsnth.dev" target="_blank" rel="noopener">vsnth.dev</a> &nbsp;&middot;&nbsp;
> YouTube <a href="https://vas.cx/videos" target="_blank" rel="noopener">@vasanthdeveloper</a> &nbsp;&middot;&nbsp;
> Twitter <a href="https://vas.cx/twitter" target="_blank" rel="noopener">@vsnthdev</a> &nbsp;&middot;&nbsp;
> Discord <a href="https://vas.cx/discord" target="_blank" rel="noopener">Vasanth Developer</a>
