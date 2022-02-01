const types = {}
//Auth
types.AUTH_LOGIN = "AUTH_LOGIN";
types.AUTH_IS_AUTH = "AUTH_IS_AUTH";
types.AUTH_LOGOUT = "AUTH_LOGOUT";

//Settings
types.GET_SETTINGS = "GET_SETTINGS";

//Stats
types.GET_HEADER_STATS = "GET_HEADER_STATS";
types.GET_CONSUMPTION_STATS = "GET_CONSUMPTION_STATS";
types.GET_FEEDBACKS_STATS = "GET_FEEDBACKS_STATS";

//Users
types.GET_USERS = "GET_USERS";
types.GET_USER = "GET_USER";
types.UPDATE_USER = "UPDATE_USER";

//Messages
types.SHOW_MESSAGES = "SHOW_MESSAGES";
types.HIDE_MESSAGES = "HIDE_MESSAGES";
types.SHOW_MESSAGES_MODAL = "SHOW_MESSAGES_MODAL";
types.HIDE_MESSAGES_MODAL = "HIDE_MESSAGES_MODAL";
types.NET_ERROR = "NET_ERROR";
types.DISPLAY_NET_ERROR = "DISPLAY_NET_ERROR";

//Modal
types.HIDE_MAGGY_FIRST_USE = "HIDE_MAGGY_FIRST_USE";
types.SHOW_MAGGY_FIRST_USE = "SHOW_MAGGY_FIRST_USE";

types.HIDE_DELETE_RESSOURCES = "HIDE_DELETE_RESSOURCES";
types.SHOW_DELETE_RESSOURCES = "SHOW_DELETE_RESSOURCES";

//Service worker
types.SET_NEW_UPDATE = "SET_NEW_UPDATE";

//ressources
types.RESSOURCE_EXIST = "RESSOURCE_EXIST";
types.CREATE_RESSOURCE = "CREATE_RESSOURCE";
types.GET_RESSOURCES = "GET_RESSOURCES";
types.GET_RESSOURCE = "GET_RESSOURCE";
types.DELETE_RESSOURCES = "DELETE_RESSOURCES";
types.GET_RESSOURCES_WITH_TYPE = "GET_RESSOURCES_WITH_TYPE";
types.GET_HOME_RESSOURCES = "GET_HOME_RESSOURCES";

//download
types.DOWNLOAD_FILE = "DOWNLOAD_FILE";
types.PERCENT_COMPLETED = "PERCENT_COMPLETED";
types.RESET_DOWNLOAD_STATS = "RESET_DOWNLOAD_STATS";

//Upload
types.UPLOAD_IMAGES = "UPLOAD_IMAGES";
types.PERCENT_FILE_COMPLETED = "PERCENT_FILE_COMPLETED";
types.UPLOAD_FILE = "UPLOAD_FILE";
types.PERCENT_DOC_COMPLETED = "PERCENT_DOC_COMPLETED";
types.UPLOAD_DOC = "UPLOAD_DOC";
types.RESET_UPLOAD_STATS = "RESET_UPLOAD_STATS";

//feedback
types.POST_FEEDBACK = "POST_FEEDBACK";
types.DISPLAY_FEEDBACKS = "DISPLAY_FEEDBACKS";
types.DELETE_FEEDBACK = "DELETE_FEEDBACK";
types.UPDATE_FEEDBACK = "UPDATE_FEEDBACK";

export default types
