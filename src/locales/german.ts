const LOCALE = {
  yes_no: "[y] Ja / [n] Nein",
};

export default {
  GLOBAL: {
    EVERYONE: "Alle",
    NOT_SPECIFIED: "Nicht festgelegt",
    PROVIDE_ARGS: "Bitte Argumente Angeben",
    ERROR: "Ein unerwarteter Fehler ist aufgetreten",
    NAME: "Name",
    NOT_AN_OPTION: "`{option}` Ist keine gültige Option",
    SUCCESS: "Erfolgreich",
    REASON: "Grund",
    URL: "URL",
    NONE: "Keine",
    YES: "Ja",
    NO: "Nein",
  },
  GUILD: {
    NOT_FOUND: "Server wurde nicht gefunden",
    LEFT: "Erfolgreich den Server **{guild_name}** verlassen",
    LEVEL_UP_MESSAGES: "Auflevel Nachrichten",
    ANNOUNCE_CHANNEL: "Ankündigungskanal",
    SUGGEST_CHANNEL: "Kanal für Vorschläge",
    WELCOME_CHANNEL: "Begrüßungskanal",
    LEAVE_CHANNEL: "Abschiedskanal",
    PREFIX: "Präfix",
    OWNER: "Servereigentümer",
    CHANNEL_C: "Kanalanzahl",
    EMOJI_C: "Emojianzahl",
    ROLES_C: "Rollenanzahl",
    MEMBER_C: "Anzahl der Mitglieder",
    REGION: "Region",
    VERIFICATION: "Verifiuierungstufe",
    MFA: "Multifaktor-Authentifizierungs Level",
    BOOSTS: "Boosts",
    BOOST_LVL: "Boosts Level",
    VERIFIED: "Verifiziert",
    PARTNERED: "Partner",
  },
  MEMBER: {
    TAG: "Tag",
    ROLES: "Rollen",
    BADGES: "Abzeichen",
    ONLINE: "Online",
    OFFLINE: "Offline",
    MEMBERS: "Mitglieder",
    STATUS: "Status",
    CREATED_ON: "Erstellt am",
    JOINED_AT: "Beigetreten am",
    ID: "Id",
    USERNAME: "Benutzername",
    NICKNAME: "Nickname",
    NOT_FOUND: "Mitglied nicht gefunden",
    CANNOT_BE_BANNED: "Dieses Mitglied kann nicht gebannt werden",
    DM_BAN_MESSAGE: "Du wurdest **banned** von **{guild_name}**, Grund: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} wurde erfolgreich vom Server gebannt. Grund: **{ban_reason}**. Es wurde auch eine Private Nachricht an die Person gesendet.",
    BOT_DATA: " Bot-Daten werden nicht gespeichert, daher kann ich diese Daten nicht abrufen",
    PERMISSIONS: "Berechtigungen",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "Meine Rolle ist nicht hoch genug für die **{role}** Rolle!",
    MY_ROLE_MUST_BE_HIGHER: "Meine Rolle muss höher sien als die Rolle von **{member}**!",
    YOUR_ROLE_MUST_BE_HIGHER: "Deine Rolle muss höher sein als die **{role}** Rolle!",
    PROVIDE_ROLE: "Bitte gib eine Rolle an",
    ALREADY_HAS_ROLE: "Dieses Mitglied hat diese Rolle bereits",
    ADDED_ROLE_TO: "{member} erfolgreich **{role}** gegeben",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Klicke hier wenn das Bild nicht geladen ist.]",
    CLYDE: "Clyde",
    CUDDLES: "knuddelt mit",
    FEEDED: "fütterte",
    HUGGED: "umarmte",
    PATTED: "tätschelte",
    KISSED: "küsste",
    POKED: "stach",
    SLAPPED: "schlug",
    NO_GIPHY_KEY: "Es wurde keine giphy api in der config gefunden (kontaktiere den Bot Besitzer)",
    NO_GPIHY_FOUND: "Es wurden keine gifs damit gefunden",
  },
  ANIMAL: {
    CAT_FACT: "Katzenfakt",
    DOG_FACT: "Hundefakt",
    COW: "Kuh",
  },
  BOT_OWNER: {
    SHUTDOWN: "Der Bot fährt herunter",
    EVAL: "Der Befehl wird ausgeführt",
    EVAL_TYPE: "Typ",
    EVAL_INPUT: "Input",
    EVAL_OUTPUT: "Output",
    UPDATE_NICKNAME: "Vom Bot Besitzer aktualisiert",
    UPDATED_NICKNAME: "Der Nickname wurde erfolgreich zu **{nickname}** geändert",
    PROVIDE_TYPE: "Gib bitte einen Typ an",
    CANNOT_BL_OWNER: "Kann den Besitzer nicht auf die Blacklist setzen",
    CANNOT_BL_BOT: "Der Bot kann nicht auf die Blacklist gesetzt werden",
    NOT_BLD: "Der benutzer ist nicht auf der Blacklist",
    ALREADY_BLD: "{member} ist bereits auf der Blacklist",
    NOT_OPTION: "**{type}** ist keine gültige Option",
    BLACKLISTED: "Auf der Blacklist",
    UNBLACKLISTED: "Nicht auf der Blacklist",
    BLACKLISTED_SUCCESS: "{member} wurde {type}",
    BLD_STATUS: "Status der Blacklist",
  },
  LEVELS: {
    XP: "Erfahrungspunkte",
    LEVEL: "Level",
    LEADERBOARD: "Bestenliste",
    RESET_CONF: `Alle Erfahrungspunkte zurücksetzen? ${LOCALE.yes_no}`,
    RESET_SUCCESS: "Erfolgreich die Erfahrungspunkte von allen zurückgesetzt",
    RESET_CANCEL: "Das Zurücksetzen der Erfahrungspunkte wurde abgebrochen",
    PROVIDE_AMOUNT: "Gib bitte eine Anzahl an",
    PROVIDE_VALID_NR: "Gib bitte eine Gültige Nummer an",
    GIVE_XP_SUCCESS: "**{member}** erfolgreich **{amount}** Erfahrungspunkte gegeben",
    TOTAL_XP: "Alle Erfahrungspunkte",
    NEW_LEVEL: "Neues Level",
    LEVEL_UP: "Aufgelevelt!",
  },
  PERMISSIONS: {
    CREATE_INSTANT_INVITE: "Einladungen erstellen",
    KICK_MEMBERS: "Mitglieder hinauswerfen",
    BAN_MEMBERS: "Mitglieder bannen",
    ADMINISTRATOR: "Administrator",
    MANAGE_CHANNELS: "Kanäle verwalten",
    MANAGE_GUILD: "Den Server verwalten",
    ADD_REACTIONS: "Reaktionen hinzufügen",
    VIEW_AUDIT_LOG: "Audit-Log einsehen",
    PRIORITY_SPEAKER: "Priorisierter Sprecher verwenden",
    STREAM: "Live gehen",
    VIEW_CHANNEL: "Kanal ansehen",
    SEND_MESSAGES: "Nachrichten senden",
    SEND_TTS_MESSAGES: "Text-zu-Sprache-Nachrichten senden",
    MANAGE_MESSAGES: "Nachrichten verwalten",
    EMBED_LINKS: "Links einbetten",
    ATTACH_FILES: "Dateien anhängen",
    READ_MESSAGE_HISTORY: "Nachrichtenverlauf sehen",
    MENTION_EVERYONE: "@everyone erwähnen",
    USE_EXTERNAL_EMOJIS: "Externe Emojis verwenden",
    VIEW_GUILD_INSIGHTS: "Server-Einblicke anzeigen",
    CONNECT: "Sprachkanälen beitreten",
    SPEAK: "In Sprachkanälen sprechen",
    MUTE_MEMBERS: "Mitglieder Stummschalten",
    DEAFEN_MEMBERS: "Ein- und Ausgabe von Mitgliedern deaktivieren",
    MOVE_MEMBERS: "Mitglieder verschieben",
    USE_VAD: "Sprachaktivierung verwenden",
    CHANGE_NICKNAME: "Nickname ändern",
    MANAGE_NICKNAMES: "Nicknamen verwalten",
    MANAGE_ROLES: "Rollen verwalten",
    MANAGE_WEBHOOKS: "WebHooks verwalten",
    MANAGE_EMOJIS: "Emojis und Sticker verwalten",
    REQUEST_TO_SPEAK: "Redeanfrage",
    USE_APPLICATION_COMMANDS: "Slash-Befehle verwenden",
    STAGE_MODERATOR: "Podiumskanal Moderator",
  },
  MUSIC: {
    MUST_BE_IN_VC: "Du musst in einem Sprachkanal sein",
    NO_QUEUE: "Momentan wird kein Lied abgespielt",
    NO_PREV_QUEUE: "Es wurde kein vorherigers Lied gefunden",
    QUEUE_CLEARED: "Die Warteschlange wurde geleert",
    QUEUE: "Warteschlange",
    BETWEEN_0_100: "Die Lautstärke muss zwischen 0 und 100 sein",
    BETWEEN_1_TOTALQUEUE: "Benutze eine Lied Nummer zwischen 1 und {totalQueue}",
    REMOVE_SUCCESS: "wurde von der Warteschlange entfernt",
    VOL_SUCCESS: "Erfolgreich die Lautstärke auf {vol}% gesetzt",
    PLAYING: "Läuft",
    PAUSED: "Pausiert",
    DURATION: "Dauer",
    PROVIDE_SEARCH: "Gib bitte eine Suche an",
    ADDED_TO_QUEUE: "{song} wurde zur Warteschlange hinzugefügt",
    ADDED_PL_TO_QUEUE: "Playlist: {name} wurde zur Warteschlange hinzugefügt ({length} Lieder)",
    NOW_PLAYING: "Läuft jetzt:",
    REQUESTED_BY: "Von {user} angefordert",
    NO_PERMS: "Ich habe nicht die richtigen Berechtigungen für diesen Sprachkanal!",
    NO_RESULTS: "Es wurden keine Lieder gefunden",
    JOIN_ERROR:
      "Ein Fehler ist beim betreten des Sprachakanals aufgetreten. Stell sicher, dass der Sprachkanal nicht voll ist!",
    LIVE_NOT_SUPPORTED: "Live videos werden nicht unterstützt",
    SUC_REM_FILTER: "Erfolgreich {filter} entfernt",
    SUC_APPLIED_FILTER: "Erfolgreich {filter} angewandt",
    FILTER_NOT_FOUND: "Der Filter wurde nicht gefunden",
    FILTER_ALREADY_ENABLED: "Filter `{filter}` ist bereits aktiviert",
    FILTER_NOT_ENABLED: "Filter `{filter}` ist nicht aktiviert?",
    NOT_VALID_OPTION: "{option} ist keien gültige Option wie `set` oder `remove`",
    NO_LIRYCS: "Kein Text für {songTitle} gefunden.",
    NOW: "Jetzt",
    PARSE_ERROR: "Ein Fehler ist beim Parsen des Videos/ der Playlist aufgetreten",
    VIDEO_UNAVAILABLE: "Dieses Video/ diese Playlist ist scheinbar nicht verfügbar",
    MUSIC_STARTING: "Die Musik startet jetzt. Warte bitte kurz..",
  },
  ECONOMY: {
    MONEY: "Geld",
    BANK: "Bank",
    BALANCE: "Kontostand",
    DAILY_ERROR: "Du hast deinen Täglichen Bonus bereits eingesammelt",
    WEEKLY_ERROR: "Du hast deinen Wöchentlichen Bonus bereits eingesammelt",
    DAILY_SUCCESS: "Du hast deinen Täglichen Bonus von **{amount}** Münzen eingesammelt",
    WEEKLY_SUCCESS: "Du hast deinen Wöchentlichen Bonus von **{amount}** Münzen eingesammelt",
    STORE_EMPTY:
      "Der Shop für diesen Server ist leer! Frag einen Moderator, etwas hinzuzufügen, mithilfe von`{prefix}store add <item>`",
    PROVIDE_ITEM_TO_BUY: "Gib bitte ein Item zum Kaufen an",
    NOT_ENOUGH_MONEY: "Du hast nicht so viel Geld",
    BUY_SUCCESS: "Erfolgreich **{item}** für **{price}** gekauft",
    NOT_FOUND_STORE:
      "**{query}** wurde im Shop nicht gefunden, benutze `{prefix}store` um alle Items im Shop zu sehen",
    ALREADY_OWN_ITEM: "Du besitzt dieses Item bereits",
    DEPOSITED_ALL: "Erfolgreich all dein Geld eingelegt!",
    DEPOSITED_AMOUNT: "Erfolgreich **{amount} Münzen** eingelegt",
    WITHDRAW_ALL: "Erfolgreich all dein Geld abgehoben!",
    WITHDRAW_AMOUNT: "Erfolgreich **{amount} Münzen** abgehoben",
    PROFILE: "Profil",
    INV_EMPTY: "Das Inventar des Benutzers ist leer",
    INVENTORY: "Inventar",
    INV_ITEMS: "Items im Inventar",
    VIEW_INVENTORY: "Benutze `{prefix}inventory <user>` um deren Items im Inventar zu sehen.",
    MONEY_LEADERBOARD: "Bestenliste des Geldes",
    TOTAL_BALANCE: "Gesammter Kontostand",
    BOTH_COUNTED: "Bank und Geld zusammen",
    DICE_LANDED: "Du hast das gewürfelt: {roll}",
    DICE_WON: "Glückwunsch! Du hast einen Preis von **{price} Münzen** gewonnen",
    DICE_LOST: "Du musst eine **6** würfeln, um einen Presi von **{price} Münzen** zu bekommen",
    RECENTLY_WORKED: "Du hast erst kürzlich gearbeitet, {time} verbleibend",
    WORKED: "{member}hat als **{job_name}** gearbeitet und **{amount}** verdient!",
    CANNOT_PAY_SELF: "Du kannst dich nicht selbst bezahlen",
    PAY_SUCCESS: "Erfolgreich **{member}** **{amount} Münzen** gegeben",
    CANNOT_ROB_SELF: "Du kannst dich selbst nicht ausrauben!",
    BETWEEN_1_1000: "Die Anzahl muss zwischen 1 und 1000 sein",
    MEMBER_NO_MONEY: "Der Benutzer hat kein Geld, also kannst du ihn nicht ausrauben.",
    ROB_SUCCESS: "Erfolgreich **{amount} Münzen** von **{member}** geraubt",
    STORE: "Shop",
    MANAGE_STORE_PERMS:
      "Du hast nicht die richtigen Berechtigungen um den Shop zu verwalten! (Server verwalten)",
    PROVIDE_VALID_ITEM: "Gib bitte ein gültiges Item zu hinzufügen/entfernen an !",
    PRICE: "Preis",
    ALREADY_EXISTS: "**{item}** existiert bereits im Shop!",
    PROVIDE_PRICE: "Gib bitte einen Preis für das Item an!",
    MUST_BE_NUMBER: "Der Preis muss eine Nummer sein!",
    ADDED_TO_STORE: "{item} wurde zum Shop hinzugefügt!",
    NOT_IN_STORE: "**{item}** existiert nicht im Shop!",
    REMOVED_FROM_STORE: "{item} wurde aus dem Shop entfernt!",
    WON_SLOTS: "Du hast gewonnnen und {amount} Münzen bekommen",
    LOST_SLOTS: "Du hast verloren!",
    MAX_BET: "Der Maximale Einsatzt beträgt 500",
    ADDED_MONEY: "Erfolgreich {amount} zum Konto hinzugefügt",
    REMOVED_MONEY: "Erfolgreich {amount} vom Konto entfernt",
    MIN_BET: "Du musst mindestens 1 wetten",
    MIN_AMOUNT: "Die Anzahl muss mehr als 0 sein",
    RESET_CONF: `Alle Kontostände zurücksetzen? ${LOCALE.yes_no}`,
    RESET_SUCCESS: "Erfolgreich die Kontostände von allen zurückgesetzt",
    RESET_CANCEL: "Das Zurücksetzen wurde abgebrochen",
    PROVIDE_AMOUNT: "Bitte gib eine Anzahl zum abheben an",
    NO_MONEY: "Duz hast nicht so viel Geld auf der Bank!",
    WORK: "Arbeite!",
  },
  GAMES: {
    BETS_ON: "{member_1} bets on {member_2}",
    LOST_BET: "{member_1} bet on {member_2}!\n {member_1} didn't win the bet",
    WON_BET: "{member_1} bet on {member_2} and {member_1} won the bet",
    CALC: "Calculator",
    INVALID_CALC: "Invalid calculation",
    COMPLIMENT: "Compliment",
    LANDED_TAILS: "You landed on Tails",
    LANDED_HEADS: "You landed on Heads",
    HAPPINESS: "Happiness",
    IQ_TEST: "IQ Test",
    IQ_IS: "Your IQ is: {iq}",
    RPS: "Rock Paper Scissors",
    ROCK: "Rock",
    PAPER: "Paper",
    SCISSORS: "Scissors",
    WYR: "Would you rather?",
    ANSWER: "Answer",
    QUESTION: "Question",
    YOU_WON: "You won 50coins!",
    BOT_WON: "The bot has won!",
    BOTH_WON: "It's a tie",
    OPPONENTS_CHOICE: "Opponents choice",
    YOUR_CHOICE: "Your choice",
    WINNER: "Winner",
    INVALID_INPUT: "Input must be 1 of the following:",
    QUOTE: "Quote",
    TAGS: "Tags",
  },
  UTIL: {
    PROCESSING_IMAGE: "⚙ Processing Image..",
    TEXT_NOT_SUP: "That text is not supported",
    AVATAR: "Avatar",
    NOT_AFK: "You are not afk anymore",
    AFK: "You are now afk",
    BMI_WEIGHT: "Weight",
    BMI_HEIGHT: "Height",
    BMI: "BMI",
    SUPPORT_SERVER: "Support server",
    BUG_REPORT: "{member} has reported a bug",
    BUG_REPORTED: "Bug report was send!",
    CHANNEL_TOPIC: "Channel topic",
    TEXT_CHANNEL: "Text Channel",
    VOICE_CHANNEL: "Voice channel",
    TEXT_CHANNELS: "Text Channels" /* plural! */,
    VOICE_CHANNELS: "Voice channels" /* plural! */,
    NO_DEF_FOUND: "No definition found for {word}",
    DEF_FOR_WORD: "Definition for {word}",
    CATEGORY: "Category",
    DEFINITION: "Definition",
    DEPENDENCIES: "Dependencies",
    ANIMATED: "Animated",
    NON_ANIMATED: "Non Animated",
    NEW_FEEDBACK: "New Feedback",
    FEEDBACK_SEND: "Successfully send feedback!",
    GH_NOT_FOUND: "GitHub account was not found",
    GH_FOLLOWING: "Following",
    GH_FOLLOWERS: "Followers",
    GH_WEBSITE: "Website",
    GH_LOCATION: "Location",
    GH_BIO: "Bio",
    SEARCHING: "Searching",
    NO_IMG_FOUND: "No images found",
    DB_RATINGS: "Ratings",
    DB_COUNTRY: "Country",
    DB_GENRES: "Genres",
    DB_AWARDS: "Awards",
    DB_LANGS: "Languages",
    POPULATION: "Population",
    DB_RELEASED: "Released",
    DB_NOT_FOUND: "No movie was found with {search}",
    TOTAL_MB: "Total",
    HUMANS: "Humans",
    BOTS: "Bots",
    PLAYERS: "Players",
    VERSION: "Version",
    PORT: "Port",
    DESCRIPTION: "Description",
    NPM_NOT_FOUND: "No NPM packages were found with **{query}**",
    MC_NOT_FOUND: "Server wasn't found",
    NPM_SEARCH: "NPM Search",
    NPM_TOP_5: "Top 5 found results for **{query}**",
    AUTHOR: "Author",
    VIEW_ON_NPM: "View on npm",
    MAX_PLAYERS: "Max players",
    PS_NOT_FOUND: "Application was not found",
    DEVELOPER: "Developer",
    SCORE: "Score",
    CREATED_BY: "Created by {member}",
    MENTIONABLE: "Mentionable",
    POSITION: "Position (from top)",
    ROLE_NOT_FOUND: "Role was not found",
    ROLES: "Roles",
    NO_GUILD_ICON: "This guild has no icon",
    ENLARGED_EMOJI: "Enlarged version of {emoji}",
    INVALID_EMOJI: "Invalid emoji!",
    SKIN_NOT_FOUND: "Player `{search}` not found!",
    SKIN_NAME: "Player skin {name}",
    DOWNLOAD_SKIN: "[Download skin]",
    G_TRANSLATE: "Google Translate",
    NEW_SUGGESTION: "New Suggestion",
    NO_SUGG_CHANNEL:
      "Your server doesn't have a default suggestion channel!\n Use `set suggest-channel <channel mention>` to set the default channel.",
    UPTIME: "{member} has been up for {time}",
    WEATHER: "Weather",
    C_NOT_FOUND: "City: **{query}** was not found!",
    MAIN: "Main",
    CURRENT: "Current",
    CURRENT_TEMP: "Current temp",
    FEELS_LIKE: "Feels like",
    WIND_SPEED: "Wind speed",
    WIND_DEGREES: "Wind degrees",
    COUNTRY: "Country",
    NO_W_FOUND: "No results were found",
    DOC_NOT_FOUND: "That was not found on the docs",
    MAINTAINERS: "Maintainers",
    DOWNLOADS: "Downloads",
    LAST_MODIFIED: "Last modified",
    ALPHA_CODE: "Alpha-2 code",
    CALLING_CODES: "Calling Codes",
    DOMAINS: "Domains",
    CAPITAL: "Capital",
    TIMEZONES: "Timezones",
    WEB_HTTP: "URL must start with `http://` or `https://`",
    WEB_NSFW: "Cannot display this site in a non-NSFW channel",
    WEB_UNAVAILABLE: "This site seems to be unavailable",
    IP_NOT_FOUND: "No results were found",
    IP_LON_LAT: "Lon/Lat",
    IP_ISP: "ISP",
    IP_ORG: "Org",
    IP_TIMEZONE: "Timezone",
    IP_LOC: "en", // https://ipwhois.io/documentation Localization
    VERIFY_CHANNEL: "Verification channel is: {channel}",
    VERIFY_NOT_ENABLED: "Verification is not enabled for this guild",
    CHANNEL_TYPES: {
      TEXT: "Text channel",
      VOICE: "Voice channel",
      STAGE: "Stage channel",
      NEWS: "News channel",
      STORE: "Store channel",
      CATEGORY: "Category channel",
    },

    TOTAL_TRACKS: "Total tracks",
    RELEASE_DATE: "Release date",
  },
  BOT: {
    GUILDS: "Guilds",
    CHANNELS: "Channels",
    USERS: "Users",
    COMMAND_COUNT: "Command count",
    VC_CONNS: "Voice connections",
    INFO_2: "Bot Information",
    INFO: "Bot info",
    SYSTEM_INFO: "System Info",
    RAM_USAGE: "RAM Usage",
    UPTIME: "Uptime",
    DJS_V: "Discord.js version",
    NODE_V: "NodeJS version",
    REPO: "Repository",
    DASHBOARD: "Dashboard",
    DEVELOPER: "Developer",
    CONTRIBUTORS: "Contributors",
    INVITE_BOT: "Invite bot",
    USED_SINCE_UP: "Used since up",
    TOTAL_USED_CMDS: "Total used",
    LATENCY: "Latency",
  },
  CONFIG: {
    OPTION_CMD_WORK: "{option} needs to be provided, for this command to work.",
  },
  HELP: {
    CAT_NOT_EXIST: "That category does not exist",
    CMD_NOT_FOUND: "Command or alias not found",
    FULL_CMD_LIST: "View full detail command list",
    CLICK_ME: "Click me",
    COMMANDS: "Commands",
    COOLDOWN: "Cooldown",
    ALIASES: "Aliases",
    USAGE: "Usage",
    COMMAND: "Command",
    OPTIONS: "Options",
    GUILD_PREFIX: "Server prefix",
    CMD_DESC:
      "use `{prefix}help <command name | alias>` to view more info about a command\n More info can be found using the `botinfo` command",
    OWNER_ONLY: "only the owner is allowed to see this!",
    CUSTOM_CMD: "This is a custom command, therefore I cannot show more info",
    BOT_PERMS: "Bot Permissions",
    MEMBER_PERMS: "Member Permissions",
    CATEGORIES: {
      admin: "Admin commands",
      animal: "Animal Commands",
      botowner: "BotOwner Commands",
      games: "Game Commands",
      image: "Image Commands",
      music: "Music Commands",
      util: "Util Commands",
      economy: "Economy Commands",
      levels: "Levels Commands",
      exempt: "Exempt Commands (commands that cannot be disabled)",
      disabled: "Disabled commands (this guild only)",
      giveaway: "Giveaway commands",
      reminder: "Reminder commands",
      reactions: "Reaction role commands",
      custom: "Custom commands",
      ticket: "Ticket commands",
    },
  },
  NASANEWS: {
    NOT_FOUND: "No fact was found with {query}.",
  },
  POKEMON: {
    SPECIES: "Species",
    ABILITIES: "Abilities",
    HEIGHT: "Height",
    WEIGHT: "Weight",
    EXPERIENCE: "Experience",
    GENDER: "Gender",
    EGG_GROUPS: "Egg Groups",
    FAMILY: "Family",
    EVO_STAGE: "Evolution stage",
    EVO_LINE: "Evolution line",
    STATS: "Stats",
    HP: "HP",
    ATTACK: "Attack",
    DEFENSE: "Defense",
    SP_ATK: "SP ATK",
    SP_DEF: "SP DEF",
    SPEED: "Speed",
    TOTAL: "Total",
    NOT_FOUND:
      "No pokemon was found with {query}. Please use correct spelling and try again later.",
  },
  REACTIONS: {
    NO_ROLE: "Please provide a valid role",
    CHANNEL_NOT_FOUND: "The channel with id `{channelId}` was not found",
    TITLE: "Reaction Role",
    DESC: "Reactions:",
    SUCCESS: "Successfully send message with reactions",
    NOT_FOUND: "Reaction was not found by that messageId",
    DELETE_SUCCESS: "Successfully deleted reaction",
    FOUND_NO_MSG:
      "Reaction was found but the message was not, reaction was deleted from the database",
    ROLES:
      "Please send your roles by id below, separate by space. E.G.: 389730847098379087 9876096987980987 7867869876689766",
    EMOJIS:
      "Please send your emojis below. The order will match with the order of the roles. Separate with a space",
    VALID_EMOJI: "You must provide a valid emojis (no custom emojis)!",
  },
  REMINDER: {
    SUCCESS: "Success! I will ping you **in this channel** in {time}",
    REMOVE_SUCCESS: "Successfully removed your reminder",
    NO_REMINDER_SET: "You don't have a reminder set",
    INVALID_DATE: "That is not a valid date",
    NO_ACTIVE_REM: "User doesn't have any active reminders",
    MESSAGE: "Message:",
    TIME: "Time:",
    ENDS_IN: "Ends In:",
    USER_REMINDERS: "{memberUsername}'s active reminders",
  },
  COVID: {
    CASES: "Cases",
    RECOVERED: "Recovered",
    DEATHS: "Deaths",
    TOTAL: "Total",
    TODAY: "Today",
    CRITICAL: "Critical",
    TESTS: "Tests",
    LAST_UPDATED: "Last updated",
    NOT_FOUND: "Country was not found",
    TOTAL_POP: "Population",
  },
  EASY_GAMES: {
    PROVIDE_MEMBER: "Please provide a member",
    ACCEPT_CHALLENGE: "{user} Do you accept this challange?",
    DOESNT_PLAY: "looks like {user} doesnt wanna play",
    WICH_SIDE: "**{user}, Which Side Do You Pick? Type `End` To Forfeit!**",
    GAME_OVER: "Times up!",
    END: "end",
    INACTIVITY: "game ended due to inactivity!",
    WINNER: "Congrats u have won {winner}",
    DRAW: "Its a draw",
  },
  ADMIN: {
    SET_CMD:
      "Unfortunately due to the bot becoming more complex, it's hard to manage everything in a command. No need to worry! You can manage everything in our dashboard: {url}. Thank you for your understanding",
    ADD_CMD_ALREADY_EXISTS: "This command name is already added in guild custom commands.",
    ADD_CMD_USED_BY_BOT: "This command name is already in use by the bot",
    ADD_CMD_ADDED: "Successfully added **{name}** as a custom command to this guild",
    DEL_CMD_NOT_FOUND: "That command was not found",
    DEL_CMD_DELETED: "Successfully deleted the **{cmd}** Command",
    DEL_CMD_NO_COMMANDS: "This guild doesn't have any custom commands",
    BLACKLISTED_ALREADY_EXISTS: "**{item}** already exist in blacklisted words",
    BLACKLISTED_ADDED: "Successfully added **{item}** to blacklisted words",
    BLACKLISTED_NOT_EXISTS: "**{item}** does not exist in blacklisted words",
    BLACKLISTED_REMOVED: "Successfully removed **{item}** from blacklisted words",
    BLACKLISTED_NONE_YET: "There are no blacklisted words yet.",
    BLACKLISTED_NO_WORDS: "This guild does not have any blacklisted words yet",
    CREATED_ROLE_CREATED: "Created Role",
    CREATED_ROLE_ADDED: "Successfully created the `{roleName}` role",
    C_TOPIC_PROVIDE_TOPIC: "Please provide a new topic",
    C_TOPIC_ADDED: "Successfully updated channel topic to {topic}",
    DEAFEN_ALREADY_DEAFENED: "User is not in a voice channel or is already deafened",
    DEAFEN_SUCCESS:
      "{member} was successfully deafenned from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    DEAFEN_SUCCESS_DM: "You've been **Deafenned** from **{guild}**, Reason: **{reason}**",
    DELETE_PROVIDE_AMOUNT: "Amount must be a valid number and between 0 below 100",
    DELETE_DELETED: "Deleted {amount} messages.",
    DELETE_ERROR:
      "An error occurred when deleting the messages, make sure they are not older than 14days",
    KICK_CANNOT_KICK: "That person can't be kicked.",
    KICK_SUCCESS_DM: "You've been **kicked** from **{guild}**, Reason: **{reason}**",
    KICK_SUCCESS:
      "**{tag}** was successfully kicked from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    MUTE_CANNOT_MUTE: "That member cannot be muted",
    MUTE_ALREADY_MUTED: "Member is already muted",
    MUTE_SUCCESS_DM: "You've been **muted** from **{guild}**, Reason: **{reason}**",
    MUTE_SUCCESS:
      "**{tag}** was successfully muted from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    BAN_BANNED_BY: "**Banned By:**",
    NUKE_NUKED: "Channel was successfully nuked",
    NUKE_CANCELED: "Nuke command was canceled",
    NUKE_CONFIRM: "Are you sure you want to nuke this channel? y/n",
    CHANNEL_CANNOT_BE_DELETED: "That channel cannot be deleted",
    TEXT_OR_VALID_CHANNEL: "Please provide text or a valid channel!",
    DEFAULT_ANNOUNCE_CHANNEL:
      "You can also set a default channel using `set announce-channel <channel mention>`",
    OPTION_DOES_NOT_EXIST: "{option} does not exist",
    PROVIDE_COMMAND_OR_CATEGORY_NAME: "Please provide a command or category name",
    COMMAND_CANNOT_DISABLED: "That command cannot be disabled",
    COMMAND_ALREADY_DISABLED: "That command is already disabled",
    COMMAND_DISABLED: "Successfully **disabled** {commandName}",
    COMMAND_ENABLED: "Successfully **enabled** {commandName}",
    COMMAND_NOT_DISABLED: "That command is not disabled",
    COMMAND_OR_CATEGORY_NOT_FOUND: "Command or category was not found",
    COMMAND_NOT_FOUND: "Command was not found",
    CATEGORY_CANNOT_DISABLED: "That category cannot be disabled!",
    CATEGORY_ALREADY_DISABLED: "That category is already disabled",
    CATEGORY_DISABLED: "Successfully **disabled** {category}",
    CATEGORY_ENABLED: "Successfully **enabled** {category}",
    CATEGORY_NOT_DISABLED: "That category is not disabled",
    DISABLED_CATEGORY: "Disabled category",
    DISABLED_COMMAND: "Disabled command",
    ENABLED_CATEGORY: "Enabled category",
    ENABLED_COMMAND: "Enabled command",
    PROVIDE_CHANNEL: "Please provide a channel",
    CHANNEL_ALREADY_IGNORED: "That channel is already ignored by the bot",
    CHANNEL_NOT_IGNORED: "That channel is not ignored by the bot",
    REMOVE_IGNORED: "Remove {item} from ignored channels",
    NOT_A_OPTION: "`{option}` is not a option",
    CHANNEL_ALREADY_LOCKED: "That channel is already locked!",
    REASON_LOCK_CHANNEL: "Please provide a reason to lock this channel",
    LOCKED_CHANNEL_REASON: "Successfully locked {channel}, Reason: **{lockReason}**",
    NO_PERMISSIONS: "Sorry, You don't have the correct permissions for this command.",
    CURRENT_PREFIX:
      "Current server prefix: `{guildPrefix}`\nUse `{guildPrefix}prefix <prefix>` to set a new prefix",
    UPDATE_PREFIX: "Successfully updated prefix to `{prefix}`",
    MY_ROLE_MUST_BE_HIGHER: "My role must be higher than **{roleName}** role!",
    MY_ROLE_MUST_BE_HIGHER2: "My role must be higher than **{needsRoleTag}** highest role!",
    USER_WAS_NOT_FOUND: "User wasn't found",
    REMOVED_ROLE: "Successfully removed **{roleName}** from {needsRole}",
    REMOVED_ROLE_EVERYONE: "Successfully Removed **{roleName}** from Everyone",
    PROVIDE_VALID_USER: "Please provide a valid user",
    NO_WARNINGS: "There are no warnings",
    REMOVED_ALL_WARNINGS: "Successfully removed all warnings",
    ANNOUNCEMENT: "📢 Announcement 📢",
    PROVIDE_VALID_MEMBER: "Please provide a valid member",
    PROVIDE_VALID_EMOJI: "Please provide a valid emoji",
    PROVIDE_VALID_OPTION: "Please provide an valid option",
    PROVIDE_VALID_CHANNEL_OR_ROLE: "Please provide a valid channel or role!",
    GIVE_NAME: "give_name",
    EMOJI_ADDED: "Emoji Added",
    EMOJI_ADDED_NAME: "Emoji Has Been Added! | Name:",
    PREVIEW: "Preview:",
    USE_NORMAL_EMOJI: "You Can Use Normal Emoji Without Adding In Server!",
    MAX_EMOJI: "Maximum emoji count reached for this guild!",
    STICKY_LONG: "Your sticky message can not be longer than 1800 characters!",
    STICKY_READ: "__***:warning: Sticky Message, Read Before Typing! :warning:***__",
    ALREADY_MUTED: "User is already muted!",
    CAN_NOT_MUTED: "User can't be muted",
    TEMP_MUTED:
      "You've been **temporary muted** from **{guildName}**, Reason: **{reason}**, Time: **{time}**",
    SUCCES_MUTED: "{muteMemberTag} was successfully muted for {time}. Reason: **{reason}**",
    PROVIDE_VALID_USERID: "Please provide a user id",
    SUC_UNBAN: "**{bannedUsername}** was successfully unbanned from the server.",
    NOT_IN_VOICE_OR_NOT_DEAF: "User is not in a voice channel or isn't deafened",
    UNDEAFENED_USER: "You've been **undeafened** from **{guildName}**",
    UNDEAFENED:
      "**{undeafenUserTag}** was successfully undeafened from the server. I have also send a DM letting the person know.",
    CHAN_NOT_LOCK: "That channel is not locked!",
    SUC_UNLOCK: "{channel} was successfully unlocked",
    NOT_MUTED: "User is not muted!",
    SUC_UNMUTE: "Successfully unmuted **{mutedMemberTag}**",
    CANNOT_RESET: "Cannot reset this! As there is no webhook for logging",
    SUC_RESET: "Succesfully reset logging!",
    STICKY_CLEAR: "Cleared sticky for **{channel}**",
    CAN_NOT_DISC: "User can't be disconnected.",
    NOT_IN_VOICE: "User is not in a voice at the moment.",
    YOU_DISC: "You've been **disconnected** from **{guildName}**, Reason: **{reason}**",
    USER_DISC:
      "**{kickUserTag}** was successfully disconnected from **{kickUserVoiceChannel}**. Reason: **{reason}**. I have also send a DM letting the person know.",
    USER_NOT_VOICE_OR_MUTED: "User is not in a voice channel or is already muted",
    YOU_MUTED: "You've been **Muted** from **{guildName}**, Reason: **{reason}**",
    USER_MUTED:
      "**{muteUserTag}** was successfully muted from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    USER_NOT_VOICE_OR_NOT_MUTED: "User is not in a voice channel or isn't muted",
    YOU_UNMUTED: "You've been **Unmuted** from **{guildName}**",
    USER_SUC_UNMUTED:
      "**{unmuteUserTag}** was successfully unmuted from the server. I have also send a DM letting the person know.",
    USER_NOT_WARN: "User can't be warned",
    USER_WARNED: "{memberTag} was warned with reason: {reason} (Total warnings: {warningsTotal})",
    WARN_NOT_FOUND: "warning wasn't found or {memberTag} doesn't have any warnings",
    WARNING: "Warning:",
    WARNED_ON: "Warned on:",
    MEMBER_WARNS: "{memberTag}'s warnings",
    TOTAL_WARNS: "Total warnings",
    USE_WARNS:
      "Use `{prefix}warnings <user> <warning number>` to view more info about a specific warning",
    ROLE_NOT_FOUND: "That role was not found",
    GUILD_CONFIG: "{guildName}'s config",
    ADD_TO_IGNORE: "Successfully added {item} to ignored channels",
  },
  TICKET: {
    CANNOT_DO_ACTION: "This action cannot be done in a non ticket channel",
    CLOSING: "Closing this ticket in 15 seconds, type `cancel` to cancel",
    WILL_NOT_CLOSE: "This ticket will not be closed.",
    ALREADY_ACTIVE_TICKET: "You already have an active ticket",
    TICKET_FOR: "Support ticket for: {member}",
    CREATED: "Successfully created ticket!",
    NOT_ENABLED:
      "Tickets are not enabled for this guild! An administrator can enable it in {botName}'s settings",
    TICKET: "ticket-#{Id}",
  },
  EVENTS: {
    CHANNEL_CREATED: "Channel Created",
    CHANNEL_CREATED_MSG: "{channel_type}: **{channel}** was created",
    CHANNEL_DELETED: "Channel Deleted",
    CHANNEL_DELETED_MSG: "{channel_type}: **{channel}** was deleted",
    CHANNEL_RENAME_MSG: "{channel_type}: **{channel}** was renamed to **{new_channel}**",
    CHANNEL_RENAME: "Channel Rename",
    CHANNEL_TOPIC_UPDATED: "Channel Topic Updated",
    CHANNEL_TOPIC_UPDATED_MSG: "Channel topic in channel: **{channel}** was updated",
    CHANNEL_OLD_TOPIC: "Old Topic",
    CHANNEL_NEW_TOPIC: "New Topic",
    EMOJI_CREATED_MSG: "Emoji: {emoji} was created",
    EMOJI_CREATED: "New Emoji Created",
    EMOJI_DELETED_MSG: "Emoji: **{emoji}** was deleted",
    EMOJI_DELETED: "Emoji Deleted",
    EMOJI_RENAMED_MSG: "Emoji: **{emoji_name}** was renamed to **{new_name}** ({emoji})",
    BANNED_MEMBER: "Banned Member",
    NOT_FOUND: "Not found",
    BAN_ADD: "Member Banned",
    KICK_ADD: "Member Kicked",
    EXECUTED_BY: "Executed By",
    REASON: "Reason",
    STARBOARD_MESSAGE: "{userTag}, this message is already in the starboard",
    STARBOARD_NOT_STAR: "{userTag}, you cannot star an empty message.",
  },
  MESSAGE: {
    USER_IS_AFK: "{tag} is AFK!\n **Reason**: {reason}",
    NOT_AFK_ANYMORE: "{tag} is not AFK anymore",
    BLACKLISTED: "You're blacklisted from using this bot.",
    CATEGORY_DISABLED:
      "That command is disabled because this guild disabled the {category} category",
    COMMAND_DISABLED: "That command was disabled for this guild",
    OWNER_ONLY: "This command can only be used by the owners!",
    INCORRECT_ARGS: "Incorrect command usage",
    REQUIRED_ARGS: "You must provide more args: {args}",
    COOLDOWN_AMOUNT: "Please wait **{time}** more seconds before using the **{command}** command",
    BAD_WORD:
      "{mention}, you used a bad word the admin has set, therefore your message was deleted",
    EXAMPLE: "Example:",
    SUPPORT: "Support",
    NEED_PERMS: "You need: {perms} permissions",
    MUST_BE_DATE: "That arg type must be a **date**. E.G.: `1h`, `2days`, `5min`",
    MUST_BE_NUMBER: "That arg type must be a **number**.",
  },
  OTHER: {
    REGIONS: {
      europe: ":flag_eu: Europe",
      "eu-west": ":flag_eu: Europe-West",
      "eu-central": ":flag_eu: Europe-Central",
      brazil: ":flag_br: Brazil",
      hongkong: ":flag_hk: Hongkong",
      india: ":flag_in: India",
      japan: ":flag_jp: Japan",
      russia: ":flag_ru: Russia",
      singapore: ":flag_sg: Singapore",
      southafrica: ":flag_za: South Africa",
      sydney: ":flag_au: Sydney",
      frankfurt: ":flag_de: Frankfurt",
      "us-central": ":flag_us: USA-Central",
      "us-east": ":flag_us: US-East",
      "us-west": ":flag_us: US-West",
      "us-south": ":flag_us: US-South",
      amsterdam: ":flag_nl: Amsterdam",
      dubai: ":flag_ae: Dubai",
      "south-korea": ":flag_kr: South Korea",
      london: ":flag_gb: London",
    },
    MFA_LEVELS: {
      NONE: "None",
      ELEVATED: "Elevated",
    },
    VERLEVELS: {
      NONE: "None",
      LOW: "Low",
      MEDIUM: "Medium",
      HIGH: "High",
      VERY_HIGH: "Very High",
    },
    ANSWERS: [
      "Yes.",
      "No.",
      "My sources say yes",
      "Most likely.",
      "idk",
      "maybe sometime",
      "Outlook good.",
      "Signs point to yes.",
      "Definitely",
      "Absolutely",
      "Nope.",
      "No thanks, I won’t be able to make it.",
      "No Way!",
      " It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
    ],
  },
  INVITE: {
    NOT_FOUND: "That invite was not found.",
    NOT_EXPIRED_YET: "This invite has not expired yet.",
    NOT_EXPIRE: "This invite does not expire",

    EXPIRATION: "Expiration",
    EXPIRES_AT: "Expires at",
    EXPIRED_AT: "Expired at",
  },
};
