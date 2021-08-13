export default {
  GLOBAL: {
    EVERYONE: "Todo mundo",
    NOT_SPECIFIED: "Não especificado",
    PROVIDE_ARGS: "Por favor inclue argumentos",
    ERROR: "Um erro inesperado ocorreu",
    NAME: "Nome",
    NOT_AN_OPTION: "`{option}` não é uma opção válida",
    SUCCESS: "Sucesso",
    REASON: "Motivo",
    URL: "URL",
    NONE: "Nada",
    YES: "Sim",
    NO: "Não",
  },
  GUILD: {
    NOT_FOUND: "Servidor não encontrado",
    LEFT: "Saindo do servido **{guild_name}** com sucesso",
    LEVEL_UP_MESSAGES: "Mensagens de level up",
    ANNOUNCE_CHANNEL: "Canal de anúncios",
    SUGGEST_CHANNEL: "Canal de sugestões",
    WELCOME_CHANNEL: "Canal de boas-vindas",
    LEAVE_CHANNEL: "Sair do canal",
    PREFIX: "Prefixo",
    OWNER: "Dono do servidor",
    CHANNEL_C: "Número de canais",
    EMOJI_C: "Número de Emojis",
    ROLES_C: "Número de cargos",
    MEMBER_C: "Número de membros",
    REGION: "Região",
    VERIFICATION: "Nível de verificação",
    MFA: "Nível da Autenticação de Múltiplos Fatores (MFA)",
    BOOSTS: "Boosts",
    BOOST_LVL: "Nível dos Boosts",
    VERIFIED: "Verificado",
    PARTNERED: "Associado",
  },
  MEMBER: {
    TAG: "Tag",
    ROLES: "Cargos",
    BADGES: "Distintivos",
    ONLINE: "Online",
    OFFLINE: "Offline",
    MEMBERS: "Membros",
    STATUS: "Status",
    CREATED_ON: "Criado em",
    JOINED_AT: "Entrou em",
    USERNAME: "Username",
    NICKNAME: "Nickname",
    NOT_FOUND: "O membro não foi encontrado",
    CANNOT_BE_BANNED: "Este membro não pode ser banido",
    DM_BAN_MESSAGE: "Você foi **banido** do **{guild_name}**, Motivo: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} foi banido do servidor com sucesso. Motivo: **{ban_reason}**. Eu também enviei uma mensagem privada para a pessoa informando isso.",
    BOT_DATA: "Os dados do bot não são salvos, por isso eu não posso buscá-los",
    PERMISSIONS: "Permissões",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "Meu cargo não é tão alto quanto o cargo **{role}**!",
    MY_ROLE_MUST_BE_HIGHER: "Meu cargo tem que ser mais alto que os cargos o **{member}**!",
    YOUR_ROLE_MUST_BE_HIGHER: "Seu cargo tem que ser mais alto que o cargo **{role}**!",
    PROVIDE_ROLE: "Por favor, provenha um cargo",
    ALREADY_HAS_ROLE: "Esse membro já tem esse cargo",
    ADDED_ROLE_TO: "O cargo **{role}** foi adicionado à {member} com sucesso",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Clique aqui se a imagem não carregar.]",
    CLYDE: "Clyde",
    CUDDLES: "aconchegou",
    FEEDED: "alimentou",
    HUGGED: "abraçou",
    PATTED: "acariciou",
    KISSED: "beijou",
    POKED: "cutucou",
    SLAPPED: "tapeou",
    NO_GIPHY_KEY: "A API do giphy não foi encontrada nas configurações (contate o dono do bot)",
    NO_GPIHY_FOUND: "Não foram encontrados gifs pra isso",
  },
  ANIMAL: {
    CAT_FACT: "Fato de Gato",
    DOG_FACT: "Fato de Cachorro",
    COW: "Vaca",
  },
  BOT_OWNER: {
    SHUTDOWN: "O bot está desligando",
    EVAL: "Executando comando",
    EVAL_TYPE: "Tipo",
    EVAL_INPUT: "Entrada",
    EVAL_OUTPUT: "Saída",
    UPDATE_NICKNAME: "Atualizado pelo dono do bot",
    UPDATED_NICKNAME: "Nickname atualizado para **{nickname}** com sucesso",
    PROVIDE_TYPE: "Por favor provenha um tipo",
    CANNOT_BL_OWNER: "Não é possível colocar o dono na lista negra",
    CANNOT_BL_BOT: "O bot não pode ser colocado na lista negra",
    NOT_BLD: "O usuário não está na lista negra",
    ALREADY_BLD: "{member} já está na lista negra",
    NOT_OPTION: "**{type}** não é uma opção",
    BLACKLISTED: "incluído na lista negra",
    UNBLACKLISTED: "removido na lista negra",
    BLACKLISTED_SUCCESS: "{member} foi {type}",
    BLD_STATUS: "Estado da lista negra",
  },
  LEVELS: {
    XP: "XP",
    LEVEL: "Nível",
    LEADERBOARD: "Classificação",
    RESET_CONF: "Resetar todo o XP? [y] Sim / [n] Não",
    RESET_SUCCESS: "O XP de todo mundo foi resetado com sucesso",
    RESET_CANCEL: "O resetxp foi cancelado",
    PROVIDE_AMOUNT: "Por favor informe a quantidade",
    PROVIDE_VALID_NR: "Por favor informe um número válido",
    GIVE_XP_SUCCESS: "**{member}** recebei **{amount}**XP com sucesso",
    TOTAL_XP: "Total de XP",
    NEW_LEVEL: "Novo nível",
    LEVEL_UP: "Subiu de nível!",
    REMOVED_XP: "Removeu **{amount}**XP de **{userTag}** com sucesso",
  },
  PERMISSIONS: {
    CREATE_INSTANT_INVITE: "Criar convites",
    KICK_MEMBERS: "Expulsar membros",
    BAN_MEMBERS: "Banir membros",
    ADMINISTRATOR: "Administrador",
    MANAGE_CHANNELS: "Gerenciar canais",
    MANAGE_GUILD: "Gerenciar Servidor",
    ADD_REACTIONS: "Adicionar reações",
    VIEW_AUDIT_LOG: "Ver logs de auditação",
    PRIORITY_SPEAKER: "Usar o alto-falante com prioridade",
    STREAM: "Transmitir ao vivo",
    VIEW_CHANNEL: "Ver canal",
    SEND_MESSAGES: "Mandar mensagens",
    SEND_TTS_MESSAGES: "Mandar mensagens TTS",
    MANAGE_MESSAGES: "Gerenciar mensagens",
    EMBED_LINKS: "Incorporar links",
    ATTACH_FILES: "Anexar arquivos",
    READ_MESSAGE_HISTORY: "Ler o histórico de mensagens",
    MENTION_EVERYONE: "Mencionar todomundo",
    USE_EXTERNAL_EMOJIS: "Usar emojis externos",
    VIEW_GUILD_INSIGHTS: "Ver estatísticas do servidor",
    CONNECT: "Entrar com voz",
    SPEAK: "Falar",
    MUTE_MEMBERS: "Silenciar membros",
    DEAFEN_MEMBERS: "Desativar áudio de membros",
    MOVE_MEMBERS: "Mover membros",
    USE_VAD: "Usar a detecção de voz",
    CHANGE_NICKNAME: "Mudar o nickname",
    MANAGE_NICKNAMES: "Gerenciar nicknames",
    MANAGE_ROLES: "Gerenciar cargos",
    MANAGE_WEBHOOKS: "Gerenciar webhooks",
    MANAGE_EMOJIS: "Gerenciar emojis",
    REQUEST_TO_SPEAK: "Pedir pra falar",
    USE_APPLICATION_COMMANDS: "Usar comandos de aplicações",
    STAGE_MODERATOR: "Moderador do Stage",
  },
  MUSIC: {
    MUST_BE_IN_VC: "Você precisa estar em um canal de voz",
    BOT_NOT_IN_VC: "O Bot não está nesse canal de voz!",
    NO_QUEUE: "Não tem nada tocando agora",
    NO_PREV_QUEUE: "Nenhuma música anterior foi encontrada",
    QUEUE_CLEARED: "A lista de reprodução foi limpa",
    QUEUE: "Lista de reprodução",
    BETWEEN_0_100: "O volume deve estar entre 0 e 100",
    BETWEEN_1_TOTALQUEUE: "Use o número da música entre 1 e {totalQueue}",
    REMOVE_SUCCESS: "foi removido da lista de reprodução",
    VOL_SUCCESS: "O volume foi definido para {vol}% com sucesso",
    PLAYING: "Tocando",
    PAUSED: "Pausado",
    DURATION: "Duração",
    PROVIDE_SEARCH: "Por favor informe um termo de pesquisa",
    ADDED_TO_QUEUE: "{song} foi adicionado à lista de reprodução",
    ADDED_TO_QUEUE2: "Song foi adicionado à lista de reprodução",
    ADDED_PL_TO_QUEUE: "Playlist: {name} foi adicionada à fila ({length} músicas)",
    NOW_PLAYING: "Tocando:",
    REQUESTED_BY: "Pedida por {user}",
    NO_PERMS: "Eu não tenho as permissões corretas nesse canal de voz!",
    NO_RESULTS: "Nenhuma música foi encontrada",
    SUC_REM_FILTER: "Filtro {filter} removido com sucesso",
    SUC_APPLIED_FILTER: "Filtro {filter} aplicado com sucesso",
    FILTER_NOT_FOUND: "Esse filtro não foi encontrado",
    FILTER_ALREADY_ENABLED: "Filter `{filter}` já está ativado",
    FILTER_NOT_ENABLED: "Filter `{filter}` não está ativado?",
    NOT_VALID_OPTION: "{option} não é uma opção válida `set`, `remove`",
    NO_LIRYCS: "Não foram encontradas letras para {songTitle}.",
    NOW: "Agora",
    MUSIC_STARTING: "A música tá começando. Por favor espere uns segundinhos..",
    INFORMATION: "Informação",
    UPLOADER: "Uploader",
    LIKES: "Likes",
    ERRORS: {
      LIVE_NOT_SUPPORTED: "Lives não são suportadas",
      JOIN_ERROR:
        "Ocorreu um erro ao entrar no canal de voz, verifique de que ele não está lotado!",
      NO_RESULT: "Não foram encontrados nenhuma música.",
      VOICE_FULL: "Esse canal de voz está lotado.",
      NO_QUEUE: "Não tem nenhuma música tocando.",
      NO_PREVIOUS: "Não têm nenhuma música anterior na lista.",
      NO_UP_NEXT: "Não têm nenhuma música posterior na lista.",
      UNAVAILABLE_VIDEO: "Esse vídeo/playlist parece estar indisponível.",
      NOT_SUPPORTED_URL: "Essa URL não é suportada.",
      NON_NSFW: "Não é permitido tocar conteúdo restringido por idade em um canal que não é NSFW.",
      UNPLAYABLE_FORMATS: "Esse formato não pode ser usado.",
      NO_SONG_POSITION: "Não tem nenhuma música nessa posição na lista.",
      EMPTY_PLAYLIST: "Não tem nenhuma música na playlist",
    },
  },
  ECONOMY: {
    MONEY: "Dinheiro",
    BANK: "Banco",
    BALANCE: "Saldo",
    DAILY_ERROR: "Você já coletou o sua recompensa diária. Volte {time}",
    WEEKLY_ERROR: "cê já coletou o sua recompensa semanal. Volte {time}",
    DAILY_SUCCESS: "Você coletou sua recompensa diŕaia de **{amount}** moedas",
    WEEKLY_SUCCESS: "Você coletou sua recompensa smanal de **{amount}** moedas",
    STORE_EMPTY:
      "Não têm nenhum item na loja! Peça ao administrador que adicione items pelo dashboard",
    PROVIDE_ITEM_TO_BUY: "Por favor informe um item para comprar",
    NOT_ENOUGH_MONEY: "Você não tem isso de dinheiro",
    BUY_SUCCESS: "**{item}** foi comprado com sucesso por **{price}**",
    NOT_FOUND_STORE:
      "**{query}** não foi encontrado na loja, por favor use `{prefix}store` para ver todos os items disponíveis",
    ALREADY_OWN_ITEM: "Você já tem esse item",
    DEPOSITED_ALL: "Todo o seu dinheiro foi depositado com sucesso!",
    DEPOSITED_AMOUNT: "**{amount} moedas** foram depositadas com sucesso",
    WITHDRAW_ALL: "Todo o seu dinheiro foi retirado com sucesso!",
    WITHDRAW_AMOUNT: "**{amount} moedas** foram retiradas com sucesso",
    PROFILE: "Perfil",
    INV_EMPTY: "O inventário do usuário está vazio",
    INVENTORY: "Inventário",
    INV_ITEMS: "Inventário de Itens",
    VIEW_INVENTORY: "Use `{prefix}inventory <usuário>` para ver seu inventário de itens.",
    MONEY_LEADERBOARD: "Classificação de dinheiro",
    TOTAL_BALANCE: "Saldo Total",
    BOTH_COUNTED: "Contando Banco e dinheiro",
    DICE_LANDED: "Você tirou: {roll}",
    DICE_WON: "Parabéns! Você ganhou o prêmio de **{price}moedas**",
    DICE_LOST: "Você tem que tirar **6** pra ganhar o prêmio de **{price}moedas**",
    RECENTLY_WORKED: "Você já trablhou recentemente, ainda tem que esperar {time}",
    WORKED: "{member} trabalhou como **{job_name}** e ganhou **{amount}**!",
    CANNOT_PAY_SELF: "Você não pode pagar você mesmo",
    PAY_SUCCESS: "**{amount}moedas** foram enviadas para **{member}** com sucesso",
    CANNOT_ROB_SELF: "Você não pode roubar você mesmo!",
    BETWEEN_1_1000: "A quantia deve estar entre 1 e 1000",
    MEMBER_NO_MONEY: "O Usuário não tem dinheiro, por isso você não pode roubá-lo.",
    ROB_SUCCESS: "**{amount}moedas** foram roubadas com sucesso de **{member}**",
    STORE: "Loja",
    MANAGE_STORE_PERMS:
      "Você não tem as permissões necessárias para administrar a loja! (Administar o Servidor)",
    PROVIDE_VALID_ITEM: "Por favor informe um item válido para adicionar/remover!",
    PRICE: "Preço",
    ALREADY_EXISTS: "**{item}** já existe na loja!",
    PROVIDE_PRICE: "Por favor informe um preço para o item!",
    MUST_BE_NUMBER: "O preço deve ser um número!",
    ADDED_TO_STORE: "{item} foi adicionado à loja!",
    NOT_IN_STORE: "**{item}** não existe na loja!",
    REMOVED_FROM_STORE: "{item} foi removido da loja!",
    WON_SLOTS: "Você ganhou e recebeu {amount} moedas",
    LOST_SLOTS: "Você perdeu!",
    MAX_BET: "a aposta máxima é 500",
    ADDED_MONEY: "{amount} adicionados ao saldo do usuário com sucesso",
    REMOVED_MONEY: "{amount} removidos ao saldo do usuário com sucesso",
    MIN_BET: "A aposta mínima é 1",
    MIN_AMOUNT: "A quanida deve ser maior que 0",
    RESET_CONF: "Zerar todos os saldos? Sim [y]/ Não [n]",
    RESET_SUCCESS: "O saldo de todomundo foi zerado com sucesso",
    RESET_CANCEL: "reset-economy foi cancelado",
    PROVIDE_AMOUNT: "Por favor informe um valor para retirar",
    NO_MONEY: "Você não tem essa quantidade de dinheiro no banco!",
    WORK: "Trabalho!",
    ALREADY_WORKED: "Você já trabalhou recentemente. Tente voltar em {time}",
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
    VOTES: "Votes",
    WYR_QUESTIONS: "{question1} **OR** {question2}",
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
    BOT_UPTIME: "Bot has been up since: {botUpSince}",
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
      GUILD_TEXT: "Text channel",
      GUILD_VOICE: "Voice channel",
      GUILD_STAGE_VOICE: "Stage channel",
      GUILD_NEWS: "News channel",
      GUILD_STORE: "Store channel",
      GUILD_CATEGORY: "Category channel",
    },
    TOTAL_TRACKS: "Total tracks",
    RELEASE_DATE: "Release date",
    HEX_COLOR: "HEX Color",
    MDN_NOT_FOUND: "No results found for that query",
    UNKNOWN: "Unknown",
    PASTE_INVALID_FORMAT:
      "An invalid format was requested, valid types: https://pastebin.com/doc_api#5",
    INVALID_COLOR: "Invalid color HEX",
    SENT_SUG: "Sent suggestion 👍",
    ALREADY_VERIFED: "You are already verified",
    READ_MORE: "read more",
    EMOJI_NOT_FOUND: "Emoji can only be a custom emoji or the emoji was not found",
    EMOJI_INFO: "Emoji info",
    INVALID_PERMS: "Invalid Permissions",
    CREATED_AT: "Created At",
    ACCESSIBLE_BY: "Accessible By",
    GENERAL_INFO: "General Info",
    USES: "Uses",
    NO_DESCRIPTION: "No description",
    GUILD: "Guild",
    CHANNEL: "Channel",
    INVITER: "Inviter",
    INVITE: "Invite",
    ROLE_MENTION: "Role mention",
    SPOT_ARTISTS: "Artists",
    SPOT_ALBUM: "Album",
    SPOT_GENRES: "Genres",
    SPOT_TOP: "Top 10 tracks",
    SPOT_TRACKS: "Tracks",
    SPOT_MORE_TRACKS: "{tracks - 10} more tracks",
    USER_INFO: "{username}'s info",
    GUILD_INFO: "Guild info",
    TEMPERATURE: "Temperature",
    MY_PING: "My ping is `{ping}`ms",
  },
  BOT: {
    GUILDS: "Guilds",
    CHANNELS: "Channels",
    USERS: "Users",
    COMMAND_COUNT: "Command count",
    VC_CONNS: "Voice connections",
    INFO_2: "Bot Information",
    INFO: "Bot stats",
    SYSTEM_INFO: "System info",
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
    CLICK_HERE: "Click Here",
  },
  CONFIG: {
    OPTION_CMD_WORK: "{option} needs to be provided, for this command to work.",
  },
  HELP: {
    HELP: "Help",
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
    DEPRECATED:
      "**Note: Regular are considered deprecated for GhostyBot. We're working hard to transition the last batch of regular commands to slash commands.**",
    CATEGORIES: {
      admin: "Admin commands",
      animal: "Animal Commands",
      "bot-owner": "BotOwner Commands",
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
      "No pokémon was found with {query}. Please use correct spelling and try again later.",
  },
  REMINDER: {
    SUCCESS: "Success! I will ping you **in this channel** in {time}",
    REMOVE_SUCCESS: "Successfully removed your reminder",
    NO_REMINDER_SET: "You don't have a reminder set",
    INVALID_DATE: "That is not a valid date",
    NOT_FOUND: "That reminder was not found",
    UPDATED: "Updated reminder",
    NO_ACTIVE_REM: "User doesn't have any active reminders",
    MESSAGE: "Message:",
    TIME: "Time:",
    ENDS_IN: "Ends In:",
    USER_REMINDERS: "{memberUsername}'s active reminders",
    ALL_DELETED: "Removed all your reminders",
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
    CMD_DEPRECATED:
      "This command has been deprecated. You can add new slash commands instead via the dashboard: {URL}",
    ADDED_ROLE_TO: "Successfully added the **{roleName}** role for **{time}** to {userTag}",
  },
  TICKET: {
    CANNOT_DO_ACTION: "This action cannot be done in a non ticket channel",
    CLOSING: "Closing this ticket in 15 seconds, type `cancel` to cancel",
    WILL_NOT_CLOSE: "This ticket will not be closed.",
    ALREADY_ACTIVE_TICKET: "You already have an active ticket",
    TICKET_FOR: "Support ticket for: {member}",
    CREATED: "Successfully created ticket!",
    CREATED_IN: "Ticket was successfully created in {channel}",
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

    STICKER_CREATED: "New Sticker Created",
    STICKER_DELETED_MSG: "A sticker was deleted",
    STICKER_DELETED: "Sticker Deleted",
    STICKER_UPDATED: "Sticker updated",
    NAME_UPDATED: "Name updated",
    DESCRIPTION_UPDATED: "Description updated",
  },
  MESSAGE: {
    USER_IS_AFK: "{tag} is AFK!\n **Reason**: {reason}",
    NOT_AFK_ANYMORE: "{tag} is not AFK anymore",
    BLACKLISTED: "You're blacklisted from using this bot.",
    CATEGORY_DISABLED:
      "That command is disabled because this guild disabled the {category} category",
    COMMAND_DISABLED: "That command was disabled for this guild",
    OWNER_ONLY: "This command can only be used by the owner!",
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
  GIVEAWAY: {
    NEW: "**🎉🎉 New Giveaway 🎉🎉**",
    ENDED: "**GIVEAWAY ENDED**",
    ALREADY_ENDED: "Giveaway already ended yet or was not found",
    SUCCESS_ENDED: "Successfully ended giveaway",
    SUCCESS_REROLLED: "Successfully re-rolled the giveaway",
    STARTED: "Giveaway has started",
    NOT_FOUND: "No giveaway found with id: {id}",
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
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes - definitely.",
      "You may rely on it.",
      "As I see it, yes.",
    ],
    WIND_DIRECTIONS: {
      NORTH: "North",
      NORTH_EAST: "North East",
      EAST: "East",
      SOUTH: "South",
      SOUTH_EAST: "South East",
      SOUTH_WEST: "South West",
      WEST: "West",
      NORTH_WEST: "North West",
    },
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
