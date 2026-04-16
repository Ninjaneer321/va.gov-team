# Building the iOS VAHB app

# Steps for both
1. `yarn install` (no safe)
2. `gem install cocoapods` -- requires ruby installed for your system (I think it has to be 3.+ to work with cocoapods but not sure)
3. `yarn pods` (for iOS only - Gradle downloads them automatically which is why first load takes a loooong time on android studio)

# Before a build on ios

If using android studio or xcode to build (**NOT** `yarn ios` or `yarn android` -- they do it for you already) you have to start the metro server. And restart the metro server if you make ANY changes to `envs/.env` or demo json files
1. `yarn start:metro-server`

## Steps to build on iOS in XCode

**Prerequisite: make sure you have `GoogleService-Info.plist`**

1. get xcode (and command line tools)
2. make sure your command line tools (`xcode-select -p`)
  a. and CL tools are pointed at Xcode's tools (`/Applications/Xcode.app/Contents/Developer` instead of the normal `/Library/Developer/CommandLineTools`)
3. If on a newer version of xcode (26.4+ the default is for the fmt package to use clang's c++20 formatting, but our project only allows c++17)
    1. Copy in the `GoogleService-Info.plist` into `VAMobile/ios/GoogleService-Info.plist`
    2. Open xcode workspace (`open VAMobile/ios/VAMobile.xcworkspace` not xcodeproj)
    3. Click on `Pods` in the left menu:
        <img width="1916" height="256" alt="clickpods" src="https://github.com/user-attachments/assets/59d94f86-90f3-4fc4-bd1e-0b7a46bd4699" />
    5. Click on `Build Settings` in the tabs at the top right:
        <img width="1385" height="175" alt="buildsettings" src="https://github.com/user-attachments/assets/4ea01fd6-dfb8-4dd7-a91b-f0737e438c27" />
    6. In the list of targets, find `fmt` and click on it.
        <img width="1381" height="691" alt="selectfmt" src="https://github.com/user-attachments/assets/2b621322-6acb-4779-b067-ccb77d71e232" />
    7. Find the section that shows the `C++ language dialect` (change to `C++17`):
        <img width="1377" height="679" alt="select C++17" src="https://github.com/user-attachments/assets/fdf1f31b-c758-4292-ab03-83f6ea3aaf12" />
5. Older versions of xcode (26.3- I think it's C++17, but steps 1-5 are the same)
6. Select a target (a simulator phone and os version) - if you don't see stuff under ios simulators, add a new destination. You may have to download the iOS package (it'll tell you)
<img width="366" height="346" alt="Screenshot 2026-04-16 at 3 49 57 PM" src="https://github.com/user-attachments/assets/7792f742-37ac-498c-97b1-bc5c3c9ca374" />

7. Build (the play button)
8. If you'd rather build from the command line, you can do (`yarn ios`)

## Steps to build on android in Android Studio

1. Get android studio
2. Get java (I installed `zulu@17` using brew because it was recommended by React Native itself)
3. Open the `VAMobile/android` directory with android studio, not the parent directory
4. Create an android virtual device (I think you want android 36, but may be wrong)
5. It may have to download some things, like the packages for java for the OS
6. Wait till it finishes indexing
7. Start build (it'll find the first AVD device)


## Possible Errors on iOS

### Error 65

If you see this in command line it's because you need to make a global symlink to your node version from `nvm`. Usually, what I do is symlink my `mise` node version to `/usr/local/bin/node`

note the sudo, because only root can alter /usr/local/bin
```bash
sudo ln -s ~/.local/share/mise/installs/node/22.17.1/bin/node /usr/local/bin/node
```
You can also edit your `~/.zshrc` or `~/.zshprofile` and make sure the order puts your shimmed node first so that it finds that node before all other nodes on your system. Why this matters:

`VAMobile/ios/.xcode.env` has a line to find node but it'll find whichever it finds first. You can also edit `VAMobile/ios/.xcode.env` and add `export NODE_BINARY="path/to/your/node` but I don't always have luck with that.
