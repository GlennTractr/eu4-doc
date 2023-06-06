Europa Universalis 4 Wiki:JParser
=================================

From Europa Universalis 4 Wiki

[Jump to navigation](#mw-sidebar-button) [Jump to search](#searchInput)

// Define dataLayer and the gtag function. window.dataLayer = window.dataLayer || \[\]; function gtag() { dataLayer.push(arguments); } // Default consent to denied. gtag("consent", "default", { analytics\_storage: "denied", functionality\_storage: "denied", security\_storage: "denied", personalization\_storage: "denied", ad\_storage: "denied", wait\_for\_update: "500", }); function OptanonWrapper() {}

The **JParser** is a tool created by [Meneth](/Meneth "Meneth") in order to extract information about EU4 from the game-files themselves and turn the information into a human-readable format. It is intended as a replacement for the Python [Project:Parser](/Europa_Universalis_4_Wiki:Parser "Europa Universalis 4 Wiki:Parser"). Currently there's full support for parsing [event](/Event "Event") files. It does a far better job at this task than the Python Parser. At the time of writing the Python Parser has over 200 unlocalised tokens, while the JParser has none.

Setup\[[edit source](/index.php?title=Europa_Universalis_4_Wiki:JParser&action=edit&section=1 "Edit section: Setup")\]
----------------------------------------------------------------------------------------------------------------------

1.  [Download](https://github.com/Meneth/JParser) and extract the Parser. The full source code of the parser is also available here
2.  Edit the settings.txt file to point to your EU4 folder
3.  Run the run.bat file

If step 3 fails, you might need to [download the latest version of Java](https://java.com/en/download/).

### Settings\[[edit source](/index.php?title=Europa_Universalis_4_Wiki:JParser&action=edit&section=2 "Edit section: Settings")\]

There's currently only a single setting:

1.  path: This should be set to the path to your EU4 folder. If not, the program will fail to run.

Feedback\[[edit source](/index.php?title=Europa_Universalis_4_Wiki:JParser&action=edit&section=3 "Edit section: Feedback")\]
----------------------------------------------------------------------------------------------------------------------------

Any feedback related to the JParser can be posted on this page's Talk page. Any feedback is appreciated, regardless of whether it has to do with the code itself or simply the natural language output.

Retrieved from "[https://eu4.paradoxwikis.com/index.php?title=Europa\_Universalis\_4\_Wiki:JParser&oldid=52388](https://eu4.paradoxwikis.com/index.php?title=Europa_Universalis_4_Wiki:JParser&oldid=52388)"

[Category](/Special:Categories "Special:Categories"):

*   [Wiki](/Category:Wiki "Category:Wiki")