# AirCNC
A React JS project that is a web page which you can create a spot to other developers book and use your space to work.

First of all, you need Yarn installed on your PC.

To install Yarn in windows you need first to get Chocolatey installed, because it's the windows' package manager.

To install Chocolatey, open a powershell with administrator privileges, and run this command:

Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

After installing Chocolatey, you can now install Yarn, running the following command:

choco install yarn

Once you have all de dependencies installed, after download the project, open its path on cmd and execute:

yarn install

After doing all this, just follow these two finals steps.

To start the back-end, on the backend directory, just execute in cmd "yarn dev".

To start the front-end, on the frontend directory, just execute in cmd "yarn start"
