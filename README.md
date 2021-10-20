# Gitpod Team Helper Extension

## What is it?

An unofficial Chrome/Brave extension to make administering Gitpod Teams easier, which can either be obtained from the [Chrome Web Store here](https://chrome.google.com/webstore/detail/gitpod-team-admin/pcecmmchknbagjicnbkfifajblnbbhlj) or sideloaded.

Firstly, it adds text to the **Manage Teams** modal so that it lists the total active and total inactive users.

Secondly, it highlights inactive users in green, making them easier to see as you scroll.

![Screenie](https://i.ibb.co/QDXfhVB/screenie.png)

## Why?

Well, we like Gitpod, but as Teams get larger, they get more difficult to manage. This extension just makes the UI a bit more helpful for team administration.

## It's not working!

Oh no! Sorry about that. Please feel free to open an [issue at the GitHub repo](https://github.com/lechien73/GitpodTeamHelper/issues), and I'll investigate it. If you know the fix already, please feel free to fix the code and issue a Pull Request.

Please note that the extension is provided "as-is". No warranty or guarantee regarding suitability or compatibility is given. Use it at your own risk!

## Sideloading

If you want to sideload the extension, then do the following:

1. Download the repo as a zip file and extract it
2. Delete the `_config.yml` file, which is for GitHub's theme
2. Go to Chrome/Brave's extensions management page
3. Switch on *Development Mode*
4. Click on *Load Unpacked*
5. Browse to the extracted extension folder and load it

## Privacy & Security

The extension only works on the gitpod.io/teams page. It only stores enabled/disabled data - nothing else. It's as safe as houses.

## Todo

Add the option to hide and reveal active users, which I think would make it more useful, but that's for a bit later.

## Can I contribute?

You betcha! Make your wondrous changes and submit a PR and I will be eternally grateful until I forget.

## Release History

### 0.0.1

Basic functionality working

### 0.0.2

Performance boost and added icons too!

### 0.0.3

Fix disable/enable extension switch.

### 0.0.4

Performance improvements.

### 0.0.5

Expand host permissions.

### 0.0.6

Add checking for deactivated users.

### 0.0.7

Limit scope to teams page to prevent console errors.

## That's all folks!

<a href="https://www.buymeacoffee.com/mattrudge" target="_blank"><img src="https://mattrudge.net/images/bmac.png" alt="Buy Matt A Coffee"></a>

------
Matt Rudge<br />
July 2021
