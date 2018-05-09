# P1ratRuleZZZ GitHub

## Welcome to P1ratRuleZZZ GitHub blog

## Projects

Highlighted projects that I'm proud of goes next. This is just a index page to access them.

### Node.js VK.com chat bot

The chat bot for VKontakte network. It is not a community bot, this is just an emulation of human account so it is easy to add this bot in dialogs and resend their messages to other people. 

In order to install this bot visit its [repo page](https://github.com/p1ratrulezzz/node-vkbot)

### Tatar-russian dictionary (js driven)

This was developed very long time ago on Nokia N70 so this is why the design is so small for new devices.
[Visit tatar-russin dictionary's page](/old-js-tatdict/) and [repo](https://github.com/p1ratrulezzz/old-js-tatdict)

### Wordpress mp3jPlayer mod
![mp3jplayer](/img/mp3jplayer.jpeg)

This module is the same as [here](https://ru.wordpress.org/plugins/mp3-jplayer/) but I've added one neat feature in order to be able to play whole remote directories as playlist using apache index view. This is a quite tricky to configure on server side but the use case of this module can be described by this example: 

1. I have frontend server for my website, lets say, 5gb disk space only (for images and wordpress files)
2. I have some server(or nas) with a lot of disk space and store my WAV/AAC/MP3 files there
3. I want to play WAV files without compression on my site but I can't copy them to frontend server because of lack of disk space
4. Installation of mp3jplayer mod gives me an ability to play music from remote servers without downloading it. A-la streaming music for your site for personal purpose.

It is useful for musicians who write music and want to share it via their own site but don't want to pay for disk space on a server.

[Download mp3jplayer mod here](https://github.com/p1ratrulezzz/mp3-jPlayer-mod)

### LazyAccess PHP

This little tool gives you an ability to easily rule the arrays data without writing long structures with isset() and etc.

Install: 

```bash
  composer require p1ratrulezzz/lazyaccess master
```

[Download from repo page](https://github.com/p1ratrulezzz/LazyAccess-to-PHP-arrays)

### Digit base converter and calculator

This was also written a long time ago and pure-js driven. Able to convert digit bases and perform operations on digits in different bases. For example 0101111b+0x856ahb02 and provide result in any other system.

You can use functions from this JS in your own project. Don't be afraid of all functions you find there, many of them are not neccesary and was used for other purpose. Just take a look at this

```javascript
function ConvertSys(dig,sFrom,sTo,hexUp);
```

The name of the function tells a lot. Example:

```javascript
// Convert 0x5556bba to binary
let binValue = ConvertSys('5556bba', 16, 2);

// Convert 2564 decimal to hex
let hexValue = ConvertSys(2564, 10, 16, true); 
// or
let hexValue = ConvertSys(2564, 10, 16, false); 

// the last param just will uppercase letters in result. 0x544ba will be 0x544BA


```

[Check online demo](/old-js-syscalculator/) and check [repo](https://github.com/p1ratrulezzz/old-js-syscalculator)


### Signa creator

![Signa](/img/signa.jpeg)

Just an example of how to write something on an image using only js and also download the image using only js.

[Online demo](/signa-creator/public/)

Check [repo](https://github.com/p1ratrulezzz/signa-creator) for code an fork the project using your own image and settings for creating signs


### Benedict Cumberbatch name generator

Generates funny Cumberbatch-like names. For now only Russian language is supported. Latin names will be added soon.

![Cumberbatch](/img/benedict-cumberbatch-name-wrong-funny.jpg)

[Online demo](/cumberbatch)

Check [repo](https://github.com/p1ratrulezzz/cumberbatch)

