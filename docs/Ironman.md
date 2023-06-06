Ironman
=======

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

This article is [timeless](/Category:Timeless "Category:Timeless") and should be accurate for any version of the game.

**Ironman** mode is an optional gameplay flag that restricts control over the saved game, disallowing the player from correcting mistakes and changing decisions made during the course of play. Ironman can be enabled from the settings screen when starting a new campaign. Playing in Ironman is required to unlock Steam [achievements](/Achievements "Achievements"); however, it is also possible to play in Ironman and not be eligible to unlock achievements, such as by playing with a mod that changes the [checksum](/Checksum "Checksum") enabled (broadly, any mod that changes gameplay in some way).

When beginning a new game, the player is given the option to play in Normal or Ironman mode from a pop-up box. If Ironman is selected, the box will also say whether it is possible to unlock achievements.

Contents
--------

*   [1 Restrictions](#Restrictions)
    *   [1.1 Achievement requirements](#Achievement_requirements)
*   [2 Issues](#Issues)
*   [3 Save file location](#Save_file_location)
    *   [3.1 Local saves](#Local_saves)
    *   [3.2 Cloud saves](#Cloud_saves)
        *   [3.2.1 Prerequisites](#Prerequisites)
*   [4 Melting / de-ironman a save](#Melting_.2F_de-ironman_a_save)
*   [5 References](#References)

Restrictions\[[edit](/index.php?title=Ironman&veaction=edit&section=1 "Edit section: Restrictions") | [edit source](/index.php?title=Ironman&action=edit&section=1 "Edit section: Restrictions")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Playing in ironman imposes the following restrictions:

*   Only a single save and one backup will be stored; it is thus impossible to load an earlier save if something goes wrong (unfortunately, this includes save game corruption).
*   The game saves automatically every 3 months (every March, June, September, and December) and when quitting.
*   Save files are stored in a binary format and can't easily be edited.
*   The player is not allowed to load any saved game while in-game. Loading a save requires exiting to the main menu.
*   The [console](/Console "Console") is disabled.
*   Switching to a different country when loading a save is not allowed (switching via events or playing as a released vassal is still possible, but some achievements don't allow that).
*   Adding [custom nations](/Custom_nation "Custom nation") when loading a save is not allowed, but they can be added before starting a campaign(this disables some achievements)
*   Continuing after the endgame screen is not possible.

### Achievement requirements\[[edit](/index.php?title=Ironman&veaction=edit&section=2 "Edit section: Achievement requirements") | [edit source](/index.php?title=Ironman&action=edit&section=2 "Edit section: Achievement requirements")\]

To gain achievements one needs to play in ironman and also obey the following requirements(ironman itself is still possible even when not fulfilling these requirements):

*   The game files must have the correct checksum for the [game version](/Patches "Patches"). So no gameplay altering mod may be active and the game files must not be corrupted or modified in a different way. Most graphical, interface or music mods don't alter the checksum and thus are allowed.
*   The following [options](/Options "Options") are required:
    *   _Difficulty_ must be set to _“Normal”_ or higher.
    *   _[Lucky](/Luck "Luck") nations_ must be set to _“Historical”_.
    *   _Limited country forming_ must be set to _“Yes”_.
    *   _Province Tax and Manpower_ must be set to _“Normal values”_.
    *   _Nations_ must be set to _“Normal setup”_ or _“Historical setup”_.
*   All but 4 achievements require that the game was started at 11 November 1444(exceptions are noted in the [list](/Achievements#List_of_achievements "Achievements")).
*   Most achievements don't allow any [custom nations](/Custom_nation "Custom nation") on the map(exceptions are noted in the [list](/Achievements#List_of_achievements "Achievements")).
*   Some achievements don't allow the player to play as a released vassal and this also prohibits playing as a released colonial nation and switching to a different country in an event(forming countries via event is allowed). These are noted in the [list](/Achievements#List_of_achievements "Achievements").
*   Most achievements have _Starting conditions_ which have to be fulfilled when starting the campaign before any player input. These are noted in the _Starting conditions_ column of the [list](/Achievements#List_of_achievements "Achievements").

Issues\[[edit](/index.php?title=Ironman&veaction=edit&section=3 "Edit section: Issues") | [edit source](/index.php?title=Ironman&action=edit&section=3 "Edit section: Issues")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

As Ironman is set to autosave at regular intervals, on high speeds the game may frequently freeze for a few seconds as it saves. This can be mitigated by playing on a high-speed storage device such as a solid-state drive.

Any bugs can ruin an Ironman game, especially if it is one of the rare bugs which cause save game corruption. To somewhat mitigate this, it is recommended to regularly create additional backup copies of your save games manually. When encountering a game breaking bug, the last good save can be copied back from the backup location to continue from that point.

Save file location\[[edit](/index.php?title=Ironman&veaction=edit&section=4 "Edit section: Save file location") | [edit source](/index.php?title=Ironman&action=edit&section=4 "Edit section: Save file location")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

There are two options for save locations.

### Local saves\[[edit](/index.php?title=Ironman&veaction=edit&section=5 "Edit section: Local saves") | [edit source](/index.php?title=Ironman&action=edit&section=5 "Edit section: Local saves")\]

Local saves can be compressed or uncompressed(if not ironman) and are stored in:

Windows

`Documents\Paradox Interactive\Europa Universalis 4\save games\`

Linux

`~/.local/share/Paradox Interactive/Europa Universalis IV/save games/`

MacOS

`~/Documents/Paradox Interactive/Europa Universalis IV/save games/`

### Cloud saves\[[edit](/index.php?title=Ironman&veaction=edit&section=6 "Edit section: Cloud saves") | [edit source](/index.php?title=Ironman&action=edit&section=6 "Edit section: Cloud saves")\]

If choosing to save on Steam Cloud, the save will be always compressed and uploaded to the Steam servers. A backup is also kept locally on your computer, at:

Windows

`C:\Program Files (x86)\Steam\userdata\<YOUR STEAM ID>\236850\remote\save games`

Linux

`~/.local/share/Steam/userdata/<YOUR STEAM ID>/236850/remote/save games` or `~/.steam/debian-installation/userdata/<YOUR STEAM ID>/236850/remote/save games` or `~/.steam/steam/userdata/<YOUR STEAM ID>/236850/remote/save games`

MacOS

`~/Library/Application Support/Steam/userdata/<YOUR STEAM ID>/236850/remote/save games`

#### Prerequisites\[[edit](/index.php?title=Ironman&veaction=edit&section=7 "Edit section: Prerequisites") | [edit source](/index.php?title=Ironman&action=edit&section=7 "Edit section: Prerequisites")\]

The option “Keep games saves in the Steam Cloud for Europa Universalis IV” must be enabled in the properties of the game in the Steam library (right click on Europa Universalis IV, click Properties, click on the General tab) and in the Steam settings (Steam>Settings, click on the Cloud tab).

Melting / de-ironman a save\[[edit](/index.php?title=Ironman&veaction=edit&section=8 "Edit section: Melting / de-ironman a save") | [edit source](/index.php?title=Ironman&action=edit&section=8 "Edit section: Melting / de-ironman a save")\]
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Though ironman saves are stored in a binary format, there are some ways to turn an ironman save into a normal save

[pdx.tools](https://pdx.tools)

formerly called rakaly. Select your ironman save, let it be analyzed and then click on the "i" icon on the right and then on "Melt" in the top-right corner

[Pdx-Unlimiter](https://github.com/crschnick/pdx_unlimiter)

import your save and click the melt button in the top bar

[skanderbeg](https://skanderbeg.pm/index.php)

upload your save and then click on "Download save" on the main page of the data browser

[paperman](https://gitgud.io/nixx/paperman)

give it your eu4.exe to update the converter for your game version

a trick to make eu4 convert the save game[\[1\]](#cite_note-1)

**Warning**: this causes data about AI planning (and possibly other things) to be lost

1.  Backup your save.
2.  Write down the in-game date of when you saved. You'll need it for later.
3.  Change the extension of the save from .eu4 to .zip
4.  Extract the gamestate file into the save games folder. Ignore the other files.
5.  Add .eu4 to the gamestate file
6.  Force the game to load gamestate.eu4. It'll complain, but you should manage.
7.  Don't Unpause! Save an uncompressed non-ironman save.
8.  Open your new save in Notepad++ and change the date at the begging of the file to the date the ironman save was at. This is important, cause otherwise a lot of things will be weird.
9.  Load the save you made.

References\[[edit](/index.php?title=Ironman&veaction=edit&section=9 "Edit section: References") | [edit source](/index.php?title=Ironman&action=edit&section=9 "Edit section: References")\]
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1.  [↑](#cite_ref-1 "Jump up") From: [https://steamcommunity.com/app/236850/discussions/0/1777136225011876654/](https://steamcommunity.com/app/236850/discussions/0/1777136225011876654/)

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Ironman&oldid=150783](https://eu4.paradoxwikis.com/index.php?title=Ironman&oldid=150783)"

[Categories](/Special:Categories "Special:Categories"):

*   [Timeless](/Category:Timeless "Category:Timeless")
*   [Game concepts](/Category:Game_concepts "Category:Game concepts")