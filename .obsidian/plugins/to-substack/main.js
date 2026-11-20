var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// plugin/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ToSubstackPlugin
});
module.exports = __toCommonJS(main_exports);

// locales/en.json
var en_default = {
  pluginName: "To Substack",
  substackAccount: "Substack account",
  newsletter: "Newsletter",
  destination: "Destination",
  exportSettings: "Export",
  removeTrailingTags: "Remove trailing tags",
  removeTrailingTagsHelp: "Exclude paragraphs containing only hashtags at the end of articles and Notes. Keep tags elsewhere and leave the source unchanged.",
  publishSelectedText: "Publish only the selected text immediately to your Substack Notes feed.",
  invalidFrontmatter: "The note's YAML properties are invalid. Correct them before exporting.",
  noteDestination: "Note",
  publishNoteFromNote: "Publish \u201C{note}\u201D immediately to your Substack Notes feed.",
  publishNote: "Publish note",
  publishingNote: "Publishing note\u2026",
  notePublished: "Note published on Substack.",
  openNote: "Open note in Substack",
  notePublicationUncertain: "Substack did not confirm note publication. Check your Notes before trying again.",
  notePermissionDenied: "Substack refused note publication. Check your account permissions.",
  noteImageUploadFailed: "Could not upload an image. The note was not published.",
  tooManyNoteImages: "A Substack Note can contain at most 20 images.",
  emptyNote: "This note has no text or images to publish.",
  newsletters: "Newsletters",
  notConnected: "Not connected",
  connectedToAccount: "Connected to {account}",
  signIn: "Sign in",
  returnToSignIn: "Return to sign-in",
  switchAccount: "Switch account",
  refresh: "Refresh",
  cancel: "Cancel",
  disconnect: "Disconnect",
  manualConnection: "Manual connection",
  substackSession: "Substack session",
  connectionHelp: "Connect your account to load your newsletters.",
  emailCodeHelp: "Retrieve the code from your email, then click \u201CReturn to sign-in\u201D to enter it.",
  loadingAccountHelp: "Please wait while your Substack account loads.",
  noNewsletters: "No newsletters managed by this account",
  connectToLoadNewsletters: "Sign in to load your newsletters",
  checkAccountAccess: "Make sure you are signed in to the account that manages your publications.",
  manualSessionHelp: "On mobile, or if the sign-in window is unavailable, choose a secret containing your Substack session (substack.sid cookie), then click Refresh.",
  signingIn: "Connecting to Substack\u2026",
  loadingNewsletters: "Loading newsletters\u2026",
  disconnecting: "Disconnecting\u2026",
  connectionInterrupted: "Connection interrupted. Sign in again and complete verification in the Substack window.",
  chooseSession: "Choose a Substack session under Manual connection.",
  sessionSaveFailed: "Could not save the session. Please try again.",
  connectionEstablished: "Connected to Substack. Your newsletters are loaded.",
  connectionFailed: "Could not connect to Substack. Please try again.",
  disconnectFailed: "Could not save the disconnection. Please try again.",
  loginTitle: "Sign in to Substack",
  mobileSessionRequired: "On mobile, import a Substack session in the settings.",
  automaticLoginUnavailable: "Automatic sign-in is unavailable. Import a Substack session.",
  sessionReadFailed: "Could not read the Substack session. Please sign in again.",
  loginPageFailed: "Could not load the Substack sign-in page.",
  draftSetupRequired: "Connect your account in the To Substack settings to publish a Note or create a newsletter draft.",
  createDraftFromNote: "Create a draft from \u201C{note}\u201D.",
  createDraft: "Create draft",
  creatingDraft: "Creating draft\u2026",
  reconnectAccount: "Reconnect your account in the To Substack settings.",
  draftCreated: "Draft \u201C{title}\u201D created in {newsletter}.",
  openDraft: "Open draft in Substack",
  category: "Category",
  chooseCategory: "Choose a category\u2026",
  close: "Close",
  savingCategory: "Saving category\u2026",
  mainPublication: "Main publication",
  loadingCategories: "Loading categories\u2026",
  categoriesFailed: "Could not load this newsletter's categories. Open the draft in Substack to publish it.",
  invalidCategory: "Invalid category.",
  categorySaveFailed: "Substack did not confirm the selected category. Please try again.",
  publishDraft: "Publish",
  publishingDraft: "Publishing article\u2026",
  draftPublished: "\u201C{title}\u201D published on Substack.",
  openPublishedPost: "Open published article",
  draftPublicationUncertain: "Substack did not confirm publication. Check the draft in Substack before trying again.",
  draftPublicationDenied: "Substack refused publication. Check your account permissions.",
  draftPublicationFailed: "Substack could not publish this draft. Open it in Substack to check the required publication settings.",
  draftFailed: "Could not create the draft. Check your Substack drafts before trying again.",
  imageNotFound: "Image not found in the vault: {file}",
  unsupportedImage: "The embedded file \u201C{file}\u201D is not a supported image.",
  imageEmbedFailed: "Could not include an image in the draft.",
  tablesUnsupported: "Tables are not supported yet.",
  emptySession: "The Substack session is empty or invalid.",
  invalidSession: "The Substack session is invalid.",
  unexpectedProfile: "Substack returned an unexpected profile. Please try again later.",
  invalidNewsletterResponse: "Substack returned an invalid newsletter. Please try again later.",
  draftCreationUncertain: "The result of draft creation is unknown. Check your Substack drafts before trying again.",
  substackTimeout: "Substack is not responding. Please try signing in again.",
  substackConnectionFailed: "Could not reach Substack. Check your connection and try again.",
  draftPermissionDenied: "Substack refused draft creation in this newsletter. Check your account permissions.",
  sessionExpired: "Session rejected or expired. Please sign in to Substack again.",
  tooManyRequests: "Substack is receiving too many requests. Please try again shortly.",
  draftCreationUnconfirmed: "Substack did not confirm draft creation. Check your drafts before trying again.",
  substackUnavailable: "Substack is unavailable. Please try again later.",
  draftResponseUnreadable: "Could not read the draft creation response. Check your drafts before trying again.",
  responseUnreadable: "Could not read Substack's response. Please try again later.",
  invalidNewsletter: "Invalid newsletter.",
  invalidEncodedImage: "An encoded image is invalid.",
  imageUploadFailed: "Could not upload an image to Substack. The draft was not created.",
  createdDraftUnconfirmed: "Substack did not confirm the created draft. Check your drafts before trying again.",
  translationParameterMissing: "Missing translation parameter: {name}",
  languageEditions: "Language editions",
  defaultLanguage: "Default language",
  defaultLanguageHelp: "Choose the main language of your notes, then check the other languages to add to Substack drafts.",
  checkingDraftLanguages: "Checking language editions\u2026",
  activatingDraftLanguage: "Preparing the {language} edition\u2026",
  draftLanguagesReady: "Language editions are ready.",
  draftLanguagesFailed: "The draft was created, but its language editions could not all be confirmed. Open the draft in Substack to check them.",
  languageEnglish: "English",
  languageSpanish: "Spanish",
  languageGerman: "German",
  languageItalian: "Italian",
  languagePortuguese: "Portuguese",
  languageFrench: "French",
  mastodonAccount: "Mastodon account",
  mastodonServer: "Mastodon server",
  mastodonServerHelp: "Enter your server, for example mastodon.social.",
  mastodonConnectionHelp: "Connect to also publish Substack Notes on Mastodon. Long Notes are shortened with ... while keeping their original links.",
  mastodonAwaitingAuthorization: "Authorize To Substack in your browser. You will return to Obsidian automatically.",
  mastodonConnected: "Connected to {account}",
  mastodonConnectionFailed: "Could not connect to Mastodon. Check the server and try again.",
  mastodonInvalidServer: "Enter a valid HTTPS Mastodon server address.",
  mastodonAuthorizationFailed: "Mastodon authorization was denied, interrupted, or expired. Connect again.",
  mastodonSessionExpired: "Reconnect your Mastodon account in the To Substack settings.",
  mastodonSaveFailed: "Could not save the Mastodon connection. Connect again.",
  mastodonRevokeFailed: "Mastodon is disconnected locally. Revoke To Substack in your Mastodon account settings to remove its server access.",
  mastodonInstanceUnsupported: "This Mastodon server did not provide supported posting limits.",
  mastodonPublicationUncertain: "Mastodon did not confirm publication. Check your Mastodon profile before trying again.",
  mastodonTooManyImages: "Mastodon accepts at most {limit} images per post on this server.",
  mastodonTooManyLinks: "The links in this Note exceed this Mastodon server\u2019s character limit. The Mastodon post was not sent.",
  mastodonImageUnsupported: "This Mastodon server does not support one of the images.",
  mastodonImageTooLarge: "An image exceeds this Mastodon server\u2019s size limit.",
  mastodonImageFailed: "Mastodon could not finish processing an image. The Mastodon post was not sent.",
  publishingMastodon: "Publishing on Mastodon\u2026",
  mastodonPublished: "Also published on Mastodon.",
  openMastodonPost: "Open post on Mastodon",
  publishNoteBoth: "Publish \u201C{note}\u201D to Substack Notes and your connected Mastodon account.",
  publishSelectedTextBoth: "Publish only the selected text to Substack Notes and your connected Mastodon account."
};

// locales/fr.json
var fr_default = {
  pluginName: "To Substack",
  substackAccount: "Compte Substack",
  newsletter: "Newsletter",
  destination: "Destination",
  exportSettings: "Export",
  removeTrailingTags: "Supprimer les tags finaux",
  removeTrailingTagsHelp: "Exclure les paragraphes compos\xE9s uniquement de tags \xE0 la fin des articles et des Notes. Conserver les tags ailleurs et laisser le fichier source intact.",
  publishSelectedText: "Publier imm\xE9diatement uniquement le texte s\xE9lectionn\xE9 dans votre fil Substack Notes.",
  invalidFrontmatter: "Les propri\xE9t\xE9s YAML de cette note sont invalides. Corrigez-les avant l\u2019export.",
  noteDestination: "Note",
  publishNoteFromNote: "Publier imm\xE9diatement \xAB {note} \xBB dans votre fil Substack Notes.",
  publishNote: "Publier la note",
  publishingNote: "Publication de la note\u2026",
  notePublished: "Note publi\xE9e sur Substack.",
  openNote: "Ouvrir la note dans Substack",
  notePublicationUncertain: "Substack ne confirme pas la publication. V\xE9rifiez vos Notes avant de recommencer.",
  notePermissionDenied: "Substack a refus\xE9 la publication de la note. V\xE9rifiez les droits de votre compte.",
  noteImageUploadFailed: "L\u2019envoi d\u2019une image a \xE9chou\xE9. La note n\u2019a pas \xE9t\xE9 publi\xE9e.",
  tooManyNoteImages: "Une Note Substack peut contenir au maximum 20 images.",
  emptyNote: "Cette note ne contient aucun texte ni aucune image \xE0 publier.",
  newsletters: "Newsletters",
  notConnected: "Non connect\xE9",
  connectedToAccount: "Connect\xE9 \xE0 {account}",
  signIn: "Se connecter",
  returnToSignIn: "Revenir \xE0 la connexion",
  switchAccount: "Changer de compte",
  refresh: "Actualiser",
  cancel: "Annuler",
  disconnect: "Se d\xE9connecter",
  manualConnection: "Connexion manuelle",
  substackSession: "Session Substack",
  connectionHelp: "Connectez votre compte pour retrouver vos newsletters.",
  emailCodeHelp: "R\xE9cup\xE9rez le code dans vos emails, puis cliquez sur \xAB Revenir \xE0 la connexion \xBB pour le saisir.",
  loadingAccountHelp: "Patientez pendant le chargement du compte Substack.",
  noNewsletters: "Aucune newsletter g\xE9r\xE9e par ce compte",
  connectToLoadNewsletters: "Connectez-vous pour charger vos newsletters",
  checkAccountAccess: "V\xE9rifiez que vous \xEAtes connect\xE9 au compte qui administre vos publications.",
  manualSessionHelp: "Sur Mobile, ou si la fen\xEAtre de connexion ne fonctionne pas, choisissez un secret contenant votre session Substack (cookie substack.sid), puis cliquez sur Actualiser.",
  signingIn: "Connexion \xE0 Substack\u2026",
  loadingNewsletters: "Chargement des newsletters\u2026",
  disconnecting: "D\xE9connexion\u2026",
  connectionInterrupted: "Connexion interrompue. Relancez la connexion et terminez la v\xE9rification dans la fen\xEAtre Substack.",
  chooseSession: "Choisissez une session Substack dans la connexion manuelle.",
  sessionSaveFailed: "La session ne peut pas \xEAtre enregistr\xE9e. R\xE9essayez.",
  connectionEstablished: "Connexion Substack \xE9tablie. Vos newsletters sont charg\xE9es.",
  connectionFailed: "La connexion \xE0 Substack a \xE9chou\xE9. R\xE9essayez.",
  disconnectFailed: "La d\xE9connexion ne peut pas \xEAtre enregistr\xE9e. R\xE9essayez.",
  loginTitle: "Connexion \xE0 Substack",
  mobileSessionRequired: "Sur Mobile, importez une session Substack dans les r\xE9glages.",
  automaticLoginUnavailable: "Connexion automatique indisponible. Importez une session Substack.",
  sessionReadFailed: "Impossible de lire la session Substack. R\xE9essayez la connexion.",
  loginPageFailed: "La page de connexion Substack ne peut pas \xEAtre charg\xE9e.",
  draftSetupRequired: "Connectez votre compte dans les r\xE9glages To Substack pour publier une Note ou cr\xE9er un brouillon de newsletter.",
  createDraftFromNote: "Cr\xE9er un brouillon \xE0 partir de \xAB {note} \xBB.",
  createDraft: "Cr\xE9er le brouillon",
  creatingDraft: "Cr\xE9ation du brouillon\u2026",
  reconnectAccount: "Reconnectez votre compte dans les r\xE9glages To Substack.",
  draftCreated: "Brouillon \xAB {title} \xBB cr\xE9\xE9 dans {newsletter}.",
  openDraft: "Ouvrir le brouillon dans Substack",
  category: "Cat\xE9gorie",
  chooseCategory: "Choisir une cat\xE9gorie\u2026",
  close: "Fermer",
  savingCategory: "Enregistrement de la cat\xE9gorie\u2026",
  mainPublication: "Publication principale",
  loadingCategories: "Chargement des cat\xE9gories\u2026",
  categoriesFailed: "Impossible de charger les cat\xE9gories de cette newsletter. Ouvrez le brouillon dans Substack pour le publier.",
  invalidCategory: "Cat\xE9gorie invalide.",
  categorySaveFailed: "Substack ne confirme pas la cat\xE9gorie choisie. R\xE9essayez.",
  publishDraft: "Publier",
  publishingDraft: "Publication de l\u2019article\u2026",
  draftPublished: "\xAB {title} \xBB publi\xE9 sur Substack.",
  openPublishedPost: "Ouvrir l\u2019article publi\xE9",
  draftPublicationUncertain: "Substack ne confirme pas la publication. V\xE9rifiez le brouillon dans Substack avant de recommencer.",
  draftPublicationDenied: "Substack refuse la publication. V\xE9rifiez les droits du compte.",
  draftPublicationFailed: "Substack ne peut pas publier ce brouillon. Ouvrez-le dans Substack pour v\xE9rifier les r\xE9glages de publication requis.",
  draftFailed: "Le brouillon ne peut pas \xEAtre cr\xE9\xE9. V\xE9rifiez les brouillons Substack avant de recommencer.",
  imageNotFound: "Image introuvable dans le coffre : {file}",
  unsupportedImage: "Le fichier incorpor\xE9 \xAB {file} \xBB n\u2019est pas une image prise en charge.",
  imageEmbedFailed: "Impossible d\u2019int\xE9grer une image dans le brouillon.",
  tablesUnsupported: "Les tableaux ne sont pas encore pris en charge.",
  emptySession: "La session Substack est vide ou invalide.",
  invalidSession: "La session Substack est invalide.",
  unexpectedProfile: "Substack a renvoy\xE9 un profil inattendu. R\xE9essayez plus tard.",
  invalidNewsletterResponse: "Substack a renvoy\xE9 une newsletter invalide. R\xE9essayez plus tard.",
  draftCreationUncertain: "Le r\xE9sultat de la cr\xE9ation est inconnu. V\xE9rifiez les brouillons Substack avant de recommencer.",
  substackTimeout: "Substack ne r\xE9pond pas. R\xE9essayez la connexion.",
  substackConnectionFailed: "Impossible de joindre Substack. V\xE9rifiez votre connexion et r\xE9essayez.",
  draftPermissionDenied: "Substack refuse la cr\xE9ation dans cette newsletter. V\xE9rifiez les droits du compte.",
  sessionExpired: "Session refus\xE9e ou expir\xE9e. Reconnectez-vous \xE0 Substack.",
  tooManyRequests: "Substack re\xE7oit trop de demandes. R\xE9essayez dans quelques instants.",
  draftCreationUnconfirmed: "Substack ne confirme pas la cr\xE9ation. V\xE9rifiez vos brouillons avant de recommencer.",
  substackUnavailable: "Substack est indisponible. R\xE9essayez plus tard.",
  draftResponseUnreadable: "La r\xE9ponse de cr\xE9ation est illisible. V\xE9rifiez vos brouillons avant de recommencer.",
  responseUnreadable: "La r\xE9ponse de Substack est illisible. R\xE9essayez plus tard.",
  invalidNewsletter: "Newsletter invalide.",
  invalidEncodedImage: "Une image encod\xE9e est invalide.",
  imageUploadFailed: "L\u2019envoi d\u2019une image \xE0 Substack a \xE9chou\xE9. Le brouillon n\u2019a pas \xE9t\xE9 cr\xE9\xE9.",
  createdDraftUnconfirmed: "Substack ne confirme pas le brouillon cr\xE9\xE9. V\xE9rifiez vos brouillons avant de recommencer.",
  translationParameterMissing: "Param\xE8tre de traduction manquant : {name}",
  languageEditions: "\xC9ditions linguistiques",
  defaultLanguage: "Langue par d\xE9faut",
  defaultLanguageHelp: "Choisissez la langue principale de vos notes, puis cochez les autres langues \xE0 ajouter aux brouillons Substack.",
  checkingDraftLanguages: "V\xE9rification des \xE9ditions linguistiques\u2026",
  activatingDraftLanguage: "Pr\xE9paration de l\u2019\xE9dition en {language}\u2026",
  draftLanguagesReady: "Les \xE9ditions linguistiques sont pr\xEAtes.",
  draftLanguagesFailed: "Le brouillon est cr\xE9\xE9, mais toutes ses \xE9ditions linguistiques n\u2019ont pas pu \xEAtre confirm\xE9es. Ouvrez-le dans Substack pour les v\xE9rifier.",
  languageEnglish: "anglais",
  languageSpanish: "espagnol",
  languageGerman: "allemand",
  languageItalian: "italien",
  languagePortuguese: "portugais",
  languageFrench: "fran\xE7ais",
  mastodonAccount: "Compte Mastodon",
  mastodonServer: "Serveur Mastodon",
  mastodonServerHelp: "Indiquez votre serveur, par exemple mastodon.social.",
  mastodonConnectionHelp: "Connectez-vous pour publier aussi les Notes Substack sur Mastodon. Les Notes longues sont raccourcies avec ... en conservant leurs liens d\u2019origine.",
  mastodonAwaitingAuthorization: "Autorisez To Substack dans votre navigateur. Vous reviendrez automatiquement dans Obsidian.",
  mastodonConnected: "Connect\xE9 \xE0 {account}",
  mastodonConnectionFailed: "Impossible de joindre Mastodon. V\xE9rifiez le serveur et r\xE9essayez.",
  mastodonInvalidServer: "Indiquez une adresse HTTPS valide de serveur Mastodon.",
  mastodonAuthorizationFailed: "L\u2019autorisation Mastodon a \xE9t\xE9 refus\xE9e, interrompue ou a expir\xE9. Reconnectez-vous.",
  mastodonSessionExpired: "Reconnectez votre compte Mastodon dans les r\xE9glages To Substack.",
  mastodonSaveFailed: "Impossible d\u2019enregistrer la connexion Mastodon. Reconnectez-vous.",
  mastodonRevokeFailed: "Mastodon est d\xE9connect\xE9 localement. R\xE9voquez To Substack dans les r\xE9glages de votre compte Mastodon pour supprimer son acc\xE8s au serveur.",
  mastodonInstanceUnsupported: "Ce serveur Mastodon ne fournit pas de limites de publication prises en charge.",
  mastodonPublicationUncertain: "Mastodon ne confirme pas la publication. V\xE9rifiez votre profil Mastodon avant de recommencer.",
  mastodonTooManyImages: "Ce serveur Mastodon accepte au maximum {limit} images par publication.",
  mastodonTooManyLinks: "Les liens de cette Note d\xE9passent la limite de caract\xE8res de ce serveur Mastodon. La publication Mastodon n\u2019a pas \xE9t\xE9 envoy\xE9e.",
  mastodonImageUnsupported: "Ce serveur Mastodon ne prend pas en charge une des images.",
  mastodonImageTooLarge: "Une image d\xE9passe la taille maximale de ce serveur Mastodon.",
  mastodonImageFailed: "Mastodon n\u2019a pas pu terminer le traitement d\u2019une image. La publication Mastodon n\u2019a pas \xE9t\xE9 envoy\xE9e.",
  publishingMastodon: "Publication sur Mastodon\u2026",
  mastodonPublished: "\xC9galement publi\xE9 sur Mastodon.",
  openMastodonPost: "Ouvrir la publication Mastodon",
  publishNoteBoth: "Publier \xAB {note} \xBB dans Substack Notes et sur votre compte Mastodon connect\xE9.",
  publishSelectedTextBoth: "Publier uniquement le texte s\xE9lectionn\xE9 dans Substack Notes et sur votre compte Mastodon connect\xE9."
};

// plugin/i18n.ts
var messages = { en: en_default, fr: fr_default };
var locale = "en";
function resolveLocale(language) {
  const requested = language.toLowerCase().replace(/_/g, "-");
  const candidate = Object.prototype.hasOwnProperty.call(messages, requested) ? requested : requested.split("-")[0];
  return Object.prototype.hasOwnProperty.call(messages, candidate) ? candidate : "en";
}
function setLocale(language) {
  locale = resolveLocale(language);
}
function draftLanguageName(language) {
  const keys = { en: "languageEnglish", es: "languageSpanish", de: "languageGerman", it: "languageItalian", pt: "languagePortuguese", fr: "languageFrench" };
  return t(keys[language]);
}
function t(key, parameters = {}, language = locale) {
  var _a;
  const message = (_a = messages[language][key]) != null ? _a : en_default[key];
  return message.replace(/\{(\w+)\}/g, (_match, name) => {
    if (!Object.prototype.hasOwnProperty.call(parameters, name))
      throw new Error(t("translationParameterMissing", { name }, language));
    return parameters[name];
  });
}

// plugin/main.ts
var import_obsidian6 = require("obsidian");

// icon.svg
var icon_default = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor" stroke="none">\n  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>\n</svg>\n';

// plugin/post.ts
var import_obsidian3 = require("obsidian");

// plugin/mastodon.ts
var import_obsidian = require("obsidian");
var SCOPES = "read:accounts write:statuses write:media";
var MastodonError = class extends Error {
};
function isRecord(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function isSecret(value) {
  return typeof value === "string" && !!value && Array.from(value).every((character) => character.charCodeAt(0) > 32 && character.charCodeAt(0) < 127);
}
function normalizeMastodonServer(value) {
  try {
    const url = new URL(value.includes("://") ? value.trim() : `https://${value.trim()}`);
    if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash)
      throw new Error();
    return url.origin;
  } catch (e) {
    throw new MastodonError(t("mastodonInvalidServer"));
  }
}
async function request(server, path, options = {}, token, timeoutMs = 15e3) {
  const origin = normalizeMastodonServer(server);
  if (token !== void 0 && !isSecret(token))
    throw new MastodonError(t("mastodonSessionExpired"));
  let timeout;
  const uncertain = path === "/api/v1/statuses" && options.method === "POST";
  try {
    const response = await Promise.race([(0, import_obsidian.requestUrl)({
      ...options,
      url: origin + path,
      throw: false,
      headers: { "Content-Type": "application/json", ...options.headers, ...token ? { Authorization: `Bearer ${token}` } : {} }
    }), new Promise((_resolve, reject) => {
      timeout = window.setTimeout(() => reject(new MastodonError(t(uncertain ? "mastodonPublicationUncertain" : "mastodonConnectionFailed"))), timeoutMs);
    })]);
    if (response.status === 401 || response.status === 403)
      throw new MastodonError(t("mastodonSessionExpired"));
    if (response.status < 200 || response.status >= 300)
      throw new MastodonError(t(uncertain ? "mastodonPublicationUncertain" : "mastodonConnectionFailed"));
    return response;
  } catch (error) {
    if (error instanceof MastodonError)
      throw error;
    throw new MastodonError(t(uncertain ? "mastodonPublicationUncertain" : "mastodonConnectionFailed"));
  } finally {
    if (timeout !== void 0)
      window.clearTimeout(timeout);
  }
}
function json(response) {
  try {
    const value = response.json;
    return value;
  } catch (e) {
    throw new MastodonError(t("mastodonConnectionFailed"));
  }
}
function randomSecret() {
  return Array.from(window.crypto.getRandomValues(new Uint8Array(32)), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function beginMastodonLogin(value, redirectUri) {
  const server = normalizeMastodonServer(value);
  const application = json(await request(server, "/api/v1/apps", { method: "POST", body: JSON.stringify({ client_name: "To Substack", redirect_uris: redirectUri, scopes: SCOPES, website: "https://github.com/tcrouzet/obsidian-to-substack" }) }));
  if (!isRecord(application) || !isSecret(application.client_id) || !isSecret(application.client_secret))
    throw new MastodonError(t("mastodonConnectionFailed"));
  const state = randomSecret();
  const verifier = randomSecret();
  const digest = await window.crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  const challenge = (0, import_obsidian.arrayBufferToBase64)(digest).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const url = new URL("/oauth/authorize", server);
  for (const [key, entry] of Object.entries({ client_id: application.client_id, redirect_uri: redirectUri, response_type: "code", scope: SCOPES, state, code_challenge: challenge, code_challenge_method: "S256" }))
    url.searchParams.set(key, entry);
  return { server, clientId: application.client_id, clientSecret: application.client_secret, redirectUri, state, verifier, createdAt: Date.now(), authorizationUrl: url.href };
}
async function completeMastodonLogin(login, params) {
  if (params.state !== login.state || Date.now() - login.createdAt > 10 * 60 * 1e3 || params.error || !isSecret(params.code))
    throw new MastodonError(t("mastodonAuthorizationFailed"));
  const token = json(await request(login.server, "/oauth/token", { method: "POST", body: JSON.stringify({ grant_type: "authorization_code", client_id: login.clientId, client_secret: login.clientSecret, redirect_uri: login.redirectUri, code: params.code, code_verifier: login.verifier }) }));
  if (!isRecord(token) || !isSecret(token.access_token))
    throw new MastodonError(t("mastodonAuthorizationFailed"));
  const session = { server: login.server, accessToken: token.access_token, clientId: login.clientId, clientSecret: login.clientSecret, account: "" };
  try {
    const account = json(await request(login.server, "/api/v1/accounts/verify_credentials", {}, token.access_token));
    if (!isRecord(account) || typeof account.id !== "string" || typeof account.acct !== "string" || !account.acct.trim())
      throw new MastodonError(t("mastodonAuthorizationFailed"));
    session.account = account.acct.includes("@") ? account.acct : `${account.acct}@${new URL(login.server).host}`;
    return session;
  } catch (error) {
    await revokeMastodonSession(session).catch(() => {
    });
    throw error;
  }
}
function parseMastodonSession(value) {
  try {
    const session = JSON.parse(value);
    if (!isRecord(session) || typeof session.server !== "string" || !isSecret(session.accessToken) || !isSecret(session.clientId) || !isSecret(session.clientSecret) || typeof session.account !== "string" || !session.account)
      throw new Error();
    return { server: normalizeMastodonServer(session.server), accessToken: session.accessToken, clientId: session.clientId, clientSecret: session.clientSecret, account: session.account };
  } catch (e) {
    throw new MastodonError(t("mastodonSessionExpired"));
  }
}
async function revokeMastodonSession(session) {
  await request(session.server, "/oauth/revoke", { method: "POST", body: JSON.stringify({ client_id: session.clientId, client_secret: session.clientSecret, token: session.accessToken }) });
}
function mastodonStatusText(body, maxCharacters, reservedPerUrl) {
  const plain = (node) => {
    var _a, _b, _c;
    if (node.type === "image2")
      return "";
    if (node.type === "hardBreak")
      return "\n";
    if (node.text !== void 0) {
      const href = (_c = (_b = (_a = node.marks) == null ? void 0 : _a.find((mark) => mark.type === "link")) == null ? void 0 : _b.attrs) == null ? void 0 : _c.href;
      return href && /^https?:\/\//.test(href) ? `${href === node.text ? "" : node.text + " "}${href} ` : node.text;
    }
    const separator = ["doc", "blockquote", "bulletList", "orderedList", "listItem"].includes(node.type) ? "\n\n" : "";
    return (node.content || []).map(plain).filter((text2) => text2 !== "").join(separator);
  };
  const text = plain(body).trim();
  const tokens = text.match(/(?:https?:\/\/|www\.)\S+|[\s\S]/gu) || [];
  const isUrl = (token) => /^(?:https?:\/\/|www\.)/.test(token);
  const cost = (token) => {
    var _a;
    return isUrl(token) ? reservedPerUrl + (((_a = token.match(/[.,;:!?)\]}>"']+$/)) == null ? void 0 : _a[0].length) || 0) : 1;
  };
  if (tokens.reduce((sum, token) => sum + cost(token), 0) <= maxCharacters)
    return text;
  const links = [...new Set(tokens.filter(isUrl))];
  const suffix = links.length ? `

${links.join("\n")}` : "";
  const budget = maxCharacters - links.reduce((sum, url) => sum + cost(url), 0) - (links.length ? links.length + 1 : 0) - 3;
  if (budget < 0)
    throw new MastodonError(t("mastodonTooManyLinks"));
  let shortened = "";
  let used = 0;
  for (const token of tokens) {
    if (isUrl(token))
      continue;
    if (used + cost(token) > budget)
      break;
    shortened += token;
    used += cost(token);
  }
  return `${shortened.replace(/\s+$/, "")}...${suffix}`;
}
async function publishMastodonNote(session, body, sourceUrl) {
  if (!/^https:\/\/substack\.com\/note\/c-[1-9][0-9]*$/.test(sourceUrl))
    throw new MastodonError(t("mastodonPublicationUncertain"));
  const instance = json(await request(session.server, "/api/v2/instance", {}, session.accessToken));
  const configuration = isRecord(instance) && isRecord(instance.configuration) ? instance.configuration : null;
  const statuses = configuration && isRecord(configuration.statuses) ? configuration.statuses : null;
  const media = configuration && isRecord(configuration.media_attachments) ? configuration.media_attachments : null;
  if (!statuses || !media || typeof statuses.max_characters !== "number" || !Number.isSafeInteger(statuses.max_characters) || statuses.max_characters <= 0 || typeof statuses.max_media_attachments !== "number" || !Number.isSafeInteger(statuses.max_media_attachments) || statuses.max_media_attachments < 0 || typeof statuses.characters_reserved_per_url !== "number" || !Number.isSafeInteger(statuses.characters_reserved_per_url) || statuses.characters_reserved_per_url < 0 || typeof media.image_size_limit !== "number" || !Number.isSafeInteger(media.image_size_limit) || media.image_size_limit <= 0 || !Array.isArray(media.supported_mime_types) || !media.supported_mime_types.every((mime) => typeof mime === "string"))
    throw new MastodonError(t("mastodonInstanceUnsupported"));
  const status = mastodonStatusText(body, statuses.max_characters, statuses.characters_reserved_per_url);
  const images = /* @__PURE__ */ new Map();
  const collect = (node) => {
    var _a;
    if (node.type === "image2" && typeof ((_a = node.attrs) == null ? void 0 : _a.src) === "string" && !images.has(node.attrs.src))
      images.set(node.attrs.src, typeof node.attrs.alt === "string" ? node.attrs.alt : "");
    for (const child of node.content || [])
      collect(child);
  };
  collect(body);
  if (images.size > statuses.max_media_attachments)
    throw new MastodonError(t("mastodonTooManyImages", { limit: String(statuses.max_media_attachments) }));
  const supportedMimeTypes = media.supported_mime_types;
  const imageSizeLimit = media.image_size_limit;
  const prepared = [...images].map(([src, alt]) => {
    const match = src.match(/^data:(image\/[a-z0-9.+-]+);base64,([a-z0-9+/]+={0,2})$/i);
    const mime = match == null ? void 0 : match[1].toLowerCase().replace("image/jpg", "image/jpeg");
    if (!match || !mime || !supportedMimeTypes.includes(mime))
      throw new MastodonError(t("mastodonImageUnsupported"));
    const bytes = (0, import_obsidian.base64ToArrayBuffer)(match[2]);
    if (bytes.byteLength > imageSizeLimit)
      throw new MastodonError(t("mastodonImageTooLarge"));
    return { bytes, mime, alt };
  });
  const mediaIds = [];
  for (const image of prepared) {
    const form = new FormData();
    form.append("file", new Blob([image.bytes], { type: image.mime }), `image.${image.mime.split("/")[1].split("+")[0]}`);
    form.append("description", Array.from(image.alt).slice(0, typeof media.description_limit === "number" ? media.description_limit : 1500).join(""));
    const encoded = new Request(`${session.server}/api/v2/media`, { method: "POST", body: form });
    let attachment = json(await request(session.server, "/api/v2/media", { method: "POST", headers: { "Content-Type": encoded.headers.get("Content-Type") || "" }, body: await encoded.arrayBuffer() }, session.accessToken, 3e4));
    if (!isRecord(attachment) || typeof attachment.id !== "string" || !/^[0-9]+$/.test(attachment.id))
      throw new MastodonError(t("mastodonImageFailed"));
    const id = attachment.id;
    const deadline = Date.now() + 6e4;
    while (isRecord(attachment) && !attachment.url && Date.now() < deadline) {
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      attachment = json(await request(session.server, `/api/v1/media/${id}`, {}, session.accessToken, Math.max(1, Math.min(15e3, deadline - Date.now()))));
    }
    if (!isRecord(attachment) || attachment.id !== id || typeof attachment.url !== "string" || !attachment.url)
      throw new MastodonError(t("mastodonImageFailed"));
    mediaIds.push(id);
  }
  try {
    const result = json(await request(session.server, "/api/v1/statuses", { method: "POST", headers: { "Idempotency-Key": `to-substack-note-${sourceUrl.slice(sourceUrl.lastIndexOf("-") + 1)}` }, body: JSON.stringify({ status, media_ids: mediaIds }) }, session.accessToken));
    if (!isRecord(result) || typeof result.id !== "string" || !/^[0-9]+$/.test(result.id) || typeof result.url !== "string")
      throw new Error();
    const url = new URL(result.url);
    if (url.origin !== normalizeMastodonServer(session.server) || url.username || url.password)
      throw new Error();
    return url.href;
  } catch (error) {
    if (error instanceof MastodonError)
      throw error;
    throw new MastodonError(t("mastodonPublicationUncertain"));
  }
}

// plugin/substack.ts
var import_obsidian2 = require("obsidian");
var SubstackError = class extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
};
function normalizeSession(value) {
  const session = value.trim().replace(/^cookie:\s*/i, "");
  if (!session || Array.from(session).some((character) => character.charCodeAt(0) < 32 || character.charCodeAt(0) === 127)) {
    throw new SubstackError(t("emptySession"));
  }
  if (session.split(";").some((part) => part.trim().startsWith("substack.sid="))) {
    if (!session.split(";").every((part) => /^[^\s=;]+=[^\s;]+$/.test(part.trim()))) {
      throw new SubstackError(t("invalidSession"));
    }
    return session;
  }
  if (/[\s;]/.test(session))
    throw new SubstackError(t("invalidSession"));
  return `substack.sid=${session}`;
}
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function parseAccount(value) {
  if (!isRecord2(value) || !Array.isArray(value.publicationUsers)) {
    throw new SubstackError(t("unexpectedProfile"));
  }
  const newsletters = /* @__PURE__ */ new Map();
  for (const membership of value.publicationUsers) {
    const publication = isRecord2(membership) ? membership.publication : void 0;
    if (!isRecord2(publication) || typeof publication.subdomain !== "string" || !/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(publication.subdomain)) {
      throw new SubstackError(t("invalidNewsletterResponse"));
    }
    newsletters.set(publication.subdomain, {
      name: typeof publication.name === "string" && publication.name.trim() ? publication.name : publication.subdomain,
      subdomain: publication.subdomain
    });
  }
  return {
    name: typeof value.name === "string" && value.name.trim() ? value.name : t("substackAccount"),
    newsletters: [...newsletters.values()]
  };
}
async function request2(session, options, timeoutMs = 15e3) {
  const cookie = normalizeSession(session);
  const publishingNote = options.url === "https://substack.com/api/v1/comment/feed";
  const publishingDraft = options.method === "POST" && options.url.endsWith("/publish");
  const uncertainMessage = t(publishingNote ? "notePublicationUncertain" : publishingDraft ? "draftPublicationUncertain" : "draftCreationUncertain");
  let response;
  let timeout;
  try {
    response = await Promise.race([(0, import_obsidian2.requestUrl)({
      ...options,
      headers: { "Content-Type": "application/json", ...options.headers, Cookie: cookie },
      throw: false
    }), new Promise((_resolve, reject) => {
      timeout = window.setTimeout(() => reject(new SubstackError(options.method === "POST" ? uncertainMessage : t("substackTimeout"))), timeoutMs);
    })]);
  } catch (error) {
    if (error instanceof SubstackError)
      throw error;
    if (options.method === "POST")
      throw new SubstackError(uncertainMessage);
    throw new SubstackError(t("substackConnectionFailed"));
  } finally {
    if (timeout !== void 0)
      window.clearTimeout(timeout);
  }
  if (response.status === 401 || response.status === 403) {
    if (options.method === "POST" && response.status === 403)
      throw new SubstackError(t(publishingNote ? "notePermissionDenied" : publishingDraft ? "draftPublicationDenied" : "draftPermissionDenied"), response.status);
    throw new SubstackError(t("sessionExpired"), response.status);
  }
  if (response.status === 429) {
    throw new SubstackError(t("tooManyRequests"));
  }
  if (response.status < 200 || response.status >= 300) {
    if (publishingDraft)
      throw new SubstackError(t(response.status >= 400 && response.status < 500 ? "draftPublicationFailed" : "draftPublicationUncertain"), response.status);
    if (options.method === "POST")
      throw new SubstackError(t(publishingNote ? "notePublicationUncertain" : "draftCreationUnconfirmed"));
    throw new SubstackError(t("substackUnavailable"));
  }
  try {
    const result = response.json;
    return result;
  } catch (e) {
    if (publishingDraft)
      throw new SubstackError(t("draftPublicationUncertain"));
    if (options.method === "POST")
      throw new SubstackError(t(publishingNote ? "notePublicationUncertain" : "draftResponseUnreadable"));
    throw new SubstackError(t("responseUnreadable"));
  }
}
async function getAccount(session) {
  return parseAccount(await request2(session, { url: "https://substack.com/api/v1/user/profile/self", method: "GET" }));
}
async function getSections(session, newsletter) {
  if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(newsletter.subdomain))
    throw new SubstackError(t("invalidNewsletter"));
  const result = await request2(session, { url: `https://${newsletter.subdomain}.substack.com/api/v1/publication/sections`, method: "GET" });
  const sections = Array.isArray(result) ? result : isRecord2(result) ? result.sections : void 0;
  if (!Array.isArray(sections))
    throw new SubstackError(t("categoriesFailed"));
  const available = [];
  for (const section of sections) {
    if (!isRecord2(section) || typeof section.id !== "number" || !Number.isSafeInteger(section.id) || section.id <= 0 || typeof section.name !== "string" || !section.name.trim())
      throw new SubstackError(t("categoriesFailed"));
    if (section.is_live !== false)
      available.push({ id: section.id, name: section.name });
  }
  return available;
}
async function saveDraftSection(session, newsletter, draftId, sectionId) {
  if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(newsletter.subdomain) || !/^[a-zA-Z0-9_-]+$/.test(draftId))
    throw new SubstackError(t("invalidNewsletter"));
  if (sectionId !== null && (!Number.isSafeInteger(sectionId) || sectionId <= 0))
    throw new SubstackError(t("invalidCategory"));
  const url = `https://${newsletter.subdomain}.substack.com/api/v1/drafts/${draftId}`;
  const saved = await request2(session, { url, method: "PUT", body: JSON.stringify({ draft_section_id: sectionId, section_chosen: true }) });
  if (!isRecord2(saved) || String(saved.id) !== draftId || saved.draft_section_id !== sectionId)
    throw new SubstackError(t("categorySaveFailed"));
}
async function publishDraft(session, newsletter, draftId, sectionId) {
  await saveDraftSection(session, newsletter, draftId, sectionId);
  const url = `https://${newsletter.subdomain}.substack.com/api/v1/drafts/${draftId}`;
  await request2(session, { url: `${url}/publish`, method: "POST", body: JSON.stringify({ send: true, share_automatically: false }) });
  try {
    const published = await request2(session, { url, method: "GET" });
    if (!isRecord2(published) || String(published.id) !== draftId || published.is_published !== true || typeof published.slug !== "string" || !published.slug.trim())
      throw new Error();
    return `https://${newsletter.subdomain}.substack.com/p/${encodeURIComponent(published.slug)}`;
  } catch (e) {
    throw new SubstackError(t("draftPublicationUncertain"));
  }
}
async function publishNote(session, body) {
  const images = /* @__PURE__ */ new Set();
  let hasText = false;
  const convert = (node) => {
    var _a, _b, _c, _d;
    if (node.type === "image2") {
      const src = (_a = node.attrs) == null ? void 0 : _a.src;
      if (typeof src !== "string")
        throw new SubstackError(t("imageEmbedFailed"));
      if (src.startsWith("data:")) {
        if (!/^data:image\/[a-z0-9.+-]+;base64,[a-z0-9+/]+={0,2}$/i.test(src))
          throw new SubstackError(t("invalidEncodedImage"));
      } else {
        const url = new URL(src);
        if (!["https:", "http:"].includes(url.protocol) || url.username || url.password)
          throw new SubstackError(t("imageEmbedFailed"));
      }
      images.add(src);
      return null;
    }
    if ((_b = node.text) == null ? void 0 : _b.trim())
      hasText = true;
    if (node.type === "hardBreak")
      return { type: "text", text: "\n" };
    if (node.type === "horizontal_rule")
      return { type: "paragraph", content: [{ type: "text", text: "---" }] };
    const content = (_c = node.content) == null ? void 0 : _c.map(convert).filter((child) => child !== null);
    const marks = (_d = node.marks) == null ? void 0 : _d.map((mark) => ({ ...mark, type: mark.type === "strong" ? "bold" : mark.type === "em" ? "italic" : mark.type }));
    if (node.type === "heading")
      return { type: "paragraph", content: content == null ? void 0 : content.map((child) => {
        var _a2;
        return child.type === "text" && !((_a2 = child.marks) == null ? void 0 : _a2.some((mark) => mark.type === "bold")) ? { ...child, marks: [...child.marks || [], { type: "bold" }] } : child;
      }) };
    if (node.type === "doc")
      return { type: "doc", attrs: { schemaVersion: "v1" }, content: (content == null ? void 0 : content.length) ? content : [{ type: "paragraph" }] };
    return { ...node, ...content ? { content } : {}, ...marks ? { marks } : {} };
  };
  const bodyJson = convert(body);
  if (!hasText && !images.size)
    throw new SubstackError(t("emptyNote"));
  if (images.size > 20)
    throw new SubstackError(t("tooManyNoteImages"));
  const attachmentIds = [];
  for (const image of images) {
    try {
      const uploaded = await request2(session, { url: "https://substack.com/api/v1/image", method: "POST", body: JSON.stringify({ image }) });
      if (!isRecord2(uploaded) || typeof uploaded.url !== "string")
        throw new Error();
      const url = new URL(uploaded.url);
      if (url.protocol !== "https:" || url.username || url.password)
        throw new Error();
      const attachment = await request2(session, { url: "https://substack.com/api/v1/comment/attachment", method: "POST", body: JSON.stringify({ type: "image", url: url.href }) });
      if (!isRecord2(attachment) || !["string", "number"].includes(typeof attachment.id) || !/^[a-zA-Z0-9_-]+$/.test(String(attachment.id)))
        throw new Error();
      attachmentIds.push(attachment.id);
    } catch (e) {
      throw new SubstackError(t("noteImageUploadFailed"));
    }
  }
  const result = await request2(session, {
    url: "https://substack.com/api/v1/comment/feed",
    method: "POST",
    body: JSON.stringify({ bodyJson, attachmentIds, replyMinimumRole: "everyone" })
  });
  if (!isRecord2(result) || !["string", "number"].includes(typeof result.id) || !/^[1-9][0-9]*$/.test(String(result.id)))
    throw new SubstackError(t("notePublicationUncertain"));
  return `https://substack.com/note/c-${String(result.id)}`;
}
var DRAFT_LANGUAGES = ["en", "es", "de", "it", "pt", "fr"];
function isReadyLanguage(edition, language) {
  if (!isRecord2(edition) || edition.language !== language || typeof edition.draft_body !== "string")
    return false;
  try {
    const body = JSON.parse(edition.draft_body);
    return isRecord2(body) && body.type === "doc" && Array.isArray(body.content);
  } catch (e) {
    return false;
  }
}
async function activateDraftLanguages(session, newsletter, draftId, onProgress, selectedLanguages = DRAFT_LANGUAGES, defaultLanguage) {
  const languages = DRAFT_LANGUAGES.filter((language) => selectedLanguages.includes(language) && language !== defaultLanguage);
  if (!languages.length)
    return false;
  if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(newsletter.subdomain) || !/^[a-zA-Z0-9_-]+$/.test(draftId))
    throw new SubstackError(t("invalidNewsletter"));
  const baseUrl = `https://${newsletter.subdomain}.substack.com/api/v1`;
  const settings = await request2(session, { url: `${baseUrl}/publication_settings`, method: "GET" });
  if (!isRecord2(settings))
    throw new SubstackError(t("draftLanguagesFailed"));
  if (settings.additional_post_languages_enabled !== true || settings.auto_translate_enabled === false)
    return false;
  const url = `${baseUrl}/drafts/${draftId}`;
  const draft = await request2(session, { url, method: "GET" });
  if (!isRecord2(draft) || String(draft.id) !== draftId || !Array.isArray(draft.post_translations))
    throw new SubstackError(t("draftLanguagesFailed"));
  const detected = draft.language ? draft : await request2(session, { url: `${url}/detect-language`, method: "GET" });
  if (!isRecord2(detected) || typeof detected.language !== "string" || !/^[a-z]{2}(?:-[a-z]{2,4})?$/.test(detected.language))
    throw new SubstackError(t("draftLanguagesFailed"));
  const sourceLanguage = detected.language;
  const required = languages.filter((language) => language !== sourceLanguage);
  for (const language of required) {
    const existing = draft.post_translations.find((edition2) => isRecord2(edition2) && edition2.language === language);
    if (existing) {
      if (!isReadyLanguage(existing, language))
        throw new SubstackError(t("draftLanguagesFailed"));
      continue;
    }
    onProgress(language);
    const edition = await request2(session, { url: `${url}/translations/${language}`, method: "POST", body: JSON.stringify({ sourceLanguage }) }, 12e4);
    if (!isReadyLanguage(edition, language))
      throw new SubstackError(t("draftLanguagesFailed"));
  }
  const confirmed = await request2(session, { url, method: "GET" });
  if (!isRecord2(confirmed) || String(confirmed.id) !== draftId || !Array.isArray(confirmed.post_translations))
    throw new SubstackError(t("draftLanguagesFailed"));
  const editions = confirmed.post_translations;
  if (!required.every((language) => editions.some((edition) => isReadyLanguage(edition, language))))
    throw new SubstackError(t("draftLanguagesFailed"));
  return true;
}
async function createDraft(session, newsletter, post) {
  if (!/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(newsletter.subdomain))
    throw new SubstackError(t("invalidNewsletter"));
  const baseUrl = `https://${newsletter.subdomain}.substack.com/api/v1`;
  const images = /* @__PURE__ */ new Map();
  const upload = async (node) => {
    var _a;
    let result2 = node;
    const src = node.type === "image2" ? (_a = node.attrs) == null ? void 0 : _a.src : void 0;
    if (typeof src === "string" && src.startsWith("data:")) {
      if (!/^data:image\/[a-z0-9.+-]+;base64,[a-z0-9+/]+={0,2}$/i.test(src))
        throw new SubstackError(t("invalidEncodedImage"));
      let url = images.get(src);
      if (!url) {
        try {
          const response = await request2(session, { url: `${baseUrl}/image`, method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `image=${encodeURIComponent(src)}` });
          if (!isRecord2(response) || typeof response.url !== "string")
            throw new Error();
          const destination = new URL(response.url);
          if (destination.protocol !== "https:" || destination.username || destination.password)
            throw new Error();
          url = destination.href;
          images.set(src, url);
        } catch (e) {
          throw new SubstackError(t("imageUploadFailed"));
        }
      }
      result2 = { ...node, attrs: { ...node.attrs, src: url } };
    }
    if (node.content) {
      const content = [];
      for (const child of node.content)
        content.push(await upload(child));
      result2 = { ...result2, content };
    }
    return result2;
  };
  const body = await upload(post.body);
  const result = await request2(session, {
    url: `${baseUrl}/drafts`,
    method: "POST",
    body: JSON.stringify({
      draft_title: post.title,
      draft_subtitle: post.subtitle,
      draft_body: JSON.stringify(body),
      draft_bylines: [],
      audience: "everyone",
      type: "newsletter",
      section_chosen: false,
      write_comment_permissions: "everyone"
    })
  });
  if (!isRecord2(result) || !["string", "number"].includes(typeof result.id) || !/^[a-zA-Z0-9_-]+$/.test(String(result.id))) {
    throw new SubstackError(t("createdDraftUnconfirmed"));
  }
  return `https://${newsletter.subdomain}.substack.com/publish/post/${String(result.id)}`;
}

// plugin/post.ts
var NOTE_DESTINATION = ":note";
async function encodeImages(app, file, container) {
  const encoded = /* @__PURE__ */ new Map();
  const encode = async (link) => {
    var _a;
    if (/^data:image\//i.test(link))
      return link;
    if (/^https?:\/\//i.test(link)) {
      let data2 = encoded.get(link);
      if (!data2) {
        try {
          const url = new URL(link);
          if (url.username || url.password)
            throw new Error();
          const response = await (0, import_obsidian3.requestUrl)({ url: url.href, method: "GET", throw: false });
          const mime2 = ((_a = Object.entries(response.headers).find(([name]) => name.toLowerCase() === "content-type")) == null ? void 0 : _a[1].split(";")[0].trim().toLowerCase()) || "";
          if (response.status < 200 || response.status >= 300 || !/^image\/[a-z0-9.+-]+$/.test(mime2) || !response.arrayBuffer.byteLength)
            throw new Error();
          data2 = `data:${mime2};base64,${(0, import_obsidian3.arrayBufferToBase64)(response.arrayBuffer)}`;
          encoded.set(link, data2);
        } catch (e) {
          throw new SubstackError(t("imageEmbedFailed"));
        }
      }
      return data2;
    }
    const path = (0, import_obsidian3.getLinkpath)(link);
    let attachment = app.metadataCache.getFirstLinkpathDest(path, file.path);
    if (!attachment) {
      try {
        attachment = app.metadataCache.getFirstLinkpathDest(decodeURIComponent(path), file.path);
      } catch (e) {
      }
    }
    if (!attachment) {
      try {
        const source = new URL(app.vault.getResourcePath(file));
        const destination = new URL(link);
        const sourcePath = decodeURIComponent(source.pathname);
        const destinationPath = decodeURIComponent(destination.pathname);
        const root = sourcePath.slice(0, -file.path.length);
        if (source.protocol === destination.protocol && source.host === destination.host && sourcePath.endsWith(file.path) && destinationPath.startsWith(root)) {
          attachment = app.vault.getFileByPath(destinationPath.slice(root.length));
        }
      } catch (e) {
      }
    }
    if (!attachment)
      throw new SubstackError(t("imageNotFound", { file: link }));
    const mime = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", webp: "image/webp", svg: "image/svg+xml", avif: "image/avif", bmp: "image/bmp" }[attachment.extension.toLowerCase()];
    if (!mime)
      throw new SubstackError(t("unsupportedImage", { file: attachment.name }));
    let data = encoded.get(attachment.path);
    if (!data) {
      data = `data:${mime};base64,${(0, import_obsidian3.arrayBufferToBase64)(await app.vault.readBinary(attachment))}`;
      encoded.set(attachment.path, data);
    }
    return data;
  };
  for (const embed of Array.from(container.querySelectorAll(".internal-embed"))) {
    const image = createEl("img");
    image.src = await encode(embed.getAttribute("src") || "");
    image.alt = embed.getAttribute("alt") || "";
    embed.replaceWith(image);
  }
  for (const image of Array.from(container.querySelectorAll("img")))
    image.src = await encode(image.getAttribute("src") || "");
}
function inline(node, marks = [], includeCaptions = false) {
  var _a;
  if (node.nodeType === Node.TEXT_NODE)
    return node.textContent ? [{ type: "text", text: node.textContent, ...marks.length ? { marks } : {} }] : [];
  if (!node.instanceOf(HTMLElement))
    return [];
  if (node.tagName === "BR")
    return [{ type: "hardBreak" }];
  if (includeCaptions && node.tagName === "FIGCAPTION")
    return [];
  if (node.tagName === "IMG") {
    const src = node.getAttribute("src") || "";
    if (!/^(https?:\/\/|data:image\/)/i.test(src))
      throw new SubstackError(t("imageEmbedFailed"));
    const alt = node.getAttribute("alt") || "";
    const image = { type: "image2", attrs: { src, alt, fullscreen: false } };
    if (includeCaptions) {
      const figureCaption = (_a = node.closest("figure")) == null ? void 0 : _a.querySelector("figcaption");
      const caption = figureCaption ? inline(figureCaption) : [{ type: "text", text: alt }];
      if (caption.some((child) => {
        var _a2;
        return (_a2 = child.text) == null ? void 0 : _a2.trim();
      }))
        return [{ type: "captionedImage", content: [image, { type: "caption", content: caption }] }];
    }
    return [image];
  }
  const mark = { STRONG: "strong", B: "strong", EM: "em", I: "em", CODE: "code" }[node.tagName];
  if (mark)
    marks = [...marks, { type: mark }];
  const href = node.getAttribute("href");
  if (node.tagName === "A" && href && /^(https?:\/\/|mailto:|#)/i.test(href))
    marks = [...marks, { type: "link", attrs: { href } }];
  const result = [];
  for (const child of Array.from(node.childNodes))
    result.push(...inline(child, marks, includeCaptions));
  return result;
}
function blocks(parent, includeCaptions = false) {
  const result = [];
  let pending = [];
  const flush = () => {
    if (pending.some((node) => {
      var _a;
      return node.type !== "text" || ((_a = node.text) == null ? void 0 : _a.trim());
    }))
      result.push({ type: "paragraph", content: pending });
    pending = [];
  };
  for (const child of Array.from(parent.childNodes)) {
    if (!child.instanceOf(HTMLElement)) {
      pending.push(...inline(child, [], includeCaptions));
      continue;
    }
    const tag = child.tagName;
    if (tag === "IMG") {
      flush();
      result.push(...inline(child, [], includeCaptions));
    } else if (tag === "P") {
      flush();
      for (const item of inline(child, [], includeCaptions)) {
        if (item.type === "image2" || item.type === "captionedImage") {
          flush();
          result.push(item);
        } else
          pending.push(item);
      }
      flush();
    } else if (/^H[1-6]$/.test(tag)) {
      flush();
      result.push({ type: "heading", attrs: { level: Number(tag[1]) }, content: inline(child, [], includeCaptions) });
    } else if (tag === "HR") {
      flush();
      result.push({ type: "horizontal_rule" });
    } else if (tag === "PRE") {
      flush();
      result.push({ type: "codeBlock", content: child.textContent ? [{ type: "text", text: child.textContent }] : [] });
    } else if (["UL", "OL", "LI", "BLOCKQUOTE", "DIV", "FIGURE"].includes(tag)) {
      flush();
      const content = blocks(child, includeCaptions);
      if (tag === "DIV" || tag === "FIGURE")
        result.push(...content);
      else
        result.push({ type: { UL: "bulletList", OL: "orderedList", LI: "listItem", BLOCKQUOTE: "blockquote" }[tag], content });
    } else if (tag === "TABLE") {
      throw new SubstackError(t("tablesUnsupported"));
    } else
      pending.push(...inline(child, [], includeCaptions));
  }
  flush();
  return result;
}
async function preparePost(app, file, options = {}) {
  var _a, _b, _c, _d, _e;
  const markdown = (_a = options.selection) != null ? _a : await app.vault.read(file);
  const frontmatter = options.selection === void 0 ? (0, import_obsidian3.getFrontMatterInfo)(markdown) : null;
  const container = createDiv();
  const component = new import_obsidian3.Component();
  component.load();
  try {
    let metadata;
    try {
      metadata = (frontmatter == null ? void 0 : frontmatter.exists) ? (0, import_obsidian3.parseYaml)(frontmatter.frontmatter) : null;
    } catch (e) {
      throw new SubstackError(t("invalidFrontmatter"));
    }
    const properties = metadata && typeof metadata === "object" && !Array.isArray(metadata) ? metadata : {};
    await import_obsidian3.MarkdownRenderer.render(app, markdown.slice((_b = frontmatter == null ? void 0 : frontmatter.contentStart) != null ? _b : 0), container, file.path, component);
    const imageSource = typeof properties.image === "string" ? properties.image.trim() : "";
    const imageCaption = typeof properties.caption === "string" ? properties.caption.trim() : "";
    let cover = imageSource ? container.createEl("img", { attr: { src: imageSource, alt: imageCaption } }) : null;
    await encodeImages(app, file, container);
    if (cover) {
      const duplicate = Array.from(container.querySelectorAll("img")).some((image) => image !== cover && image.src === (cover == null ? void 0 : cover.src));
      cover.remove();
      if (duplicate)
        cover = null;
    }
    container.querySelectorAll("button, .collapse-indicator, .heading-collapse-indicator, .list-collapse-indicator").forEach((node) => node.remove());
    const yamlTitle = typeof properties.title === "string" ? properties.title.trim() : "";
    const heading = container.querySelector("h1");
    const headingTitle = ((_c = heading == null ? void 0 : heading.textContent) == null ? void 0 : _c.trim()) || "";
    const title = yamlTitle || (!options.forNote ? headingTitle : "") || file.basename;
    if (!options.forNote || yamlTitle && headingTitle === yamlTitle)
      heading == null ? void 0 : heading.remove();
    const body = blocks(container, !options.forNote);
    if (options.removeTrailingTags) {
      const isTag = (node) => {
        var _a2, _b2;
        return node.type === "hardBreak" || node.type === "text" && (!((_a2 = node.text) == null ? void 0 : _a2.trim()) || /^#[^\s#]+$/.test(node.text) && ((_b2 = node.marks) == null ? void 0 : _b2.some((mark) => {
          var _a3, _b3;
          return mark.type === "link" && ((_b3 = (_a3 = mark.attrs) == null ? void 0 : _a3.href) == null ? void 0 : _b3.startsWith("#"));
        })) === true);
      };
      while (body.length) {
        const last = body[body.length - 1];
        if (last.type !== "paragraph" || !((_d = last.content) == null ? void 0 : _d.length) || !last.content.every(isTag))
          break;
        body.pop();
      }
    }
    const first = body[0];
    let subtitle = "";
    if (!options.forNote && (first == null ? void 0 : first.type) === "paragraph" && ((_e = first.content) == null ? void 0 : _e.some((node) => {
      var _a2;
      return (_a2 = node.text) == null ? void 0 : _a2.trim();
    })) && first.content.every((node) => {
      var _a2, _b2;
      return node.type === "hardBreak" || node.type === "text" && (!((_a2 = node.text) == null ? void 0 : _a2.trim()) || ((_b2 = node.marks) == null ? void 0 : _b2.some((mark) => mark.type === "em")));
    })) {
      subtitle = first.content.map((node) => node.type === "hardBreak" ? " " : node.text || "").join("").replace(/\s+/g, " ").trim();
      body.shift();
    }
    if (!options.forNote && !subtitle && typeof properties.metadescription === "string") {
      subtitle = properties.metadescription.replace(/\s+/g, " ").trim();
    }
    if (cover) {
      const imageNodes = inline(cover, [], !options.forNote);
      if (options.forNote && imageCaption)
        imageNodes.push({ type: "paragraph", content: [{ type: "text", text: imageCaption, marks: [{ type: "em" }] }] });
      body.unshift(...imageNodes);
    }
    if (options.forNote && yamlTitle)
      body.unshift({ type: "paragraph", content: [{ type: "text", text: yamlTitle, marks: [{ type: "strong" }] }] });
    return { title, subtitle, body: { type: "doc", content: body.length ? body : [{ type: "paragraph" }] } };
  } finally {
    component.unload();
  }
}
var PostModal = class extends import_obsidian3.Modal {
  constructor(plugin, file, selectedMarkdown) {
    super(plugin.app);
    this.plugin = plugin;
    this.file = file;
    this.selectedMarkdown = selectedMarkdown;
  }
  async onOpen() {
    var _a, _b;
    this.titleEl.setText(t("pluginName"));
    if (!this.plugin.account && this.plugin.settings.sessionSecretId) {
      this.contentEl.createEl("p", { text: t("loadingNewsletters"), attr: { role: "status" } });
      await this.plugin.connect(false);
      if (!this.modalEl.isConnected)
        return;
      this.contentEl.empty();
    }
    const newsletters = this.selectedMarkdown === void 0 ? ((_a = this.plugin.account) == null ? void 0 : _a.newsletters) || [] : [];
    if (!this.plugin.account) {
      this.contentEl.createEl("p", { text: this.plugin.error || t("draftSetupRequired"), attr: { role: "alert" } });
      return;
    }
    let selected = ((_b = newsletters[0]) == null ? void 0 : _b.subdomain) || NOTE_DESTINATION;
    let submit;
    const description = this.contentEl.createEl("p");
    const updateDescription = () => {
      const mirror = !!this.plugin.mastodonAccount;
      description.setText(this.selectedMarkdown !== void 0 ? t(mirror ? "publishSelectedTextBoth" : "publishSelectedText") : t(selected === NOTE_DESTINATION ? mirror ? "publishNoteBoth" : "publishNoteFromNote" : "createDraftFromNote", { note: this.file.basename }));
    };
    updateDescription();
    new import_obsidian3.Setting(this.contentEl).setName(t("destination")).addDropdown((dropdown) => {
      dropdown.selectEl.setAttribute("aria-label", t("destination"));
      dropdown.addOption(NOTE_DESTINATION, t("noteDestination"));
      for (const newsletter of newsletters)
        dropdown.addOption(newsletter.subdomain, newsletter.name);
      dropdown.setValue(selected).onChange((value) => {
        selected = value;
        submit.setButtonText(t(selected === NOTE_DESTINATION ? "publishNote" : "createDraft"));
        updateDescription();
      });
    });
    const status = this.contentEl.createEl("p", { attr: { role: "status", "aria-live": "polite" } });
    new import_obsidian3.Setting(this.contentEl).addButton((button) => {
      submit = button;
      button.setButtonText(t(selected === NOTE_DESTINATION ? "publishNote" : "createDraft")).setCta().onClick(async () => {
        const isNote = selected === NOTE_DESTINATION;
        button.setDisabled(true);
        status.setAttribute("role", "status");
        status.setText(t(isNote ? "publishingNote" : "creatingDraft"));
        try {
          const newsletter = newsletters.find((item) => item.subdomain === selected);
          const session = this.app.secretStorage.getSecret(this.plugin.settings.sessionSecretId);
          if (!session || !isNote && !newsletter)
            throw new SubstackError(t("reconnectAccount"));
          const post = await preparePost(this.app, this.file, { forNote: isNote, selection: this.selectedMarkdown, removeTrailingTags: this.plugin.settings.removeTrailingTags });
          if (isNote) {
            const url2 = await publishNote(session, post.body);
            this.contentEl.empty();
            this.contentEl.createEl("p", { text: t("notePublished") });
            this.contentEl.createEl("a", { text: t("openNote"), href: url2, attr: { target: "_blank", rel: "noopener" } });
            if (this.plugin.mastodonAccount) {
              const mastodonStatus = this.contentEl.createEl("p", { text: t("publishingMastodon"), attr: { role: "status", "aria-live": "polite" } });
              try {
                const mastodon = this.plugin.getMastodonSession();
                if (!mastodon)
                  throw new MastodonError(t("mastodonSessionExpired"));
                const mastodonUrl = await publishMastodonNote(mastodon, post.body, url2);
                mastodonStatus.setText(t("mastodonPublished"));
                this.contentEl.createEl("a", { text: t("openMastodonPost"), href: mastodonUrl, attr: { target: "_blank", rel: "noopener" } });
              } catch (error) {
                mastodonStatus.setAttribute("role", "alert");
                mastodonStatus.setText(error instanceof MastodonError ? error.message : t("mastodonPublicationUncertain"));
              }
            }
            return;
          }
          if (!newsletter)
            throw new SubstackError(t("invalidNewsletter"));
          const url = await createDraft(session, newsletter, post);
          this.contentEl.empty();
          const languageStatus = this.contentEl.createEl("p", { text: t("checkingDraftLanguages"), attr: { role: "status", "aria-live": "polite" } });
          try {
            const activated = await activateDraftLanguages(session, newsletter, url.slice(url.lastIndexOf("/") + 1), (language) => {
              languageStatus.setText(t("activatingDraftLanguage", { language: draftLanguageName(language) }));
            }, this.plugin.settings.translationLanguages, this.plugin.settings.defaultLanguage);
            if (activated)
              languageStatus.setText(t("draftLanguagesReady"));
            else
              languageStatus.remove();
          } catch (e) {
            languageStatus.setAttribute("role", "alert");
            languageStatus.setText(t("draftLanguagesFailed"));
          }
          this.contentEl.prepend(this.contentEl.createEl("p", { text: t("draftCreated", { title: post.title, newsletter: newsletter.name }) }));
          await this.showPublicationControls(session, newsletter, url.slice(url.lastIndexOf("/") + 1), post.title);
        } catch (error) {
          status.setAttribute("role", "alert");
          status.setText(error instanceof SubstackError ? error.message : t(isNote ? "notePublicationUncertain" : "draftFailed"));
          button.setDisabled(isNote);
        }
      });
    });
  }
  async showPublicationControls(session, newsletter, draftId, title) {
    const status = this.contentEl.createEl("p", { text: t("loadingCategories"), attr: { role: "status", "aria-live": "polite" } });
    let sectionId = null;
    let categoriesLoaded = false;
    let categorySaved = false;
    let busy = false;
    let publicationAttempted = false;
    let category;
    let closeButton;
    let publishButton;
    let openButton;
    const setBusy = (value) => {
      busy = value;
      category == null ? void 0 : category.setDisabled(value || publicationAttempted);
      closeButton == null ? void 0 : closeButton.setDisabled(value);
      publishButton == null ? void 0 : publishButton.setDisabled(value || publicationAttempted);
      openButton == null ? void 0 : openButton.setDisabled(value);
    };
    const showActions = () => {
      const actions = new import_obsidian3.Setting(this.contentEl);
      actions.addButton((button) => {
        closeButton = button;
        button.setButtonText(t("close")).onClick(() => {
          if (!busy)
            this.close();
        });
      });
      if (categoriesLoaded)
        actions.addButton((button) => {
          publishButton = button;
          button.setButtonText(t("publishDraft")).onClick(async () => {
            if (busy || publicationAttempted)
              return;
            publicationAttempted = true;
            setBusy(true);
            status.setAttribute("role", "status");
            status.setText(t("publishingDraft"));
            try {
              const url = await publishDraft(session, newsletter, draftId, sectionId);
              if (!this.modalEl.isConnected)
                return;
              this.contentEl.empty();
              this.contentEl.createEl("p", { text: t("draftPublished", { title }), attr: { role: "status" } });
              this.contentEl.createEl("a", { text: t("openPublishedPost"), href: url, attr: { target: "_blank", rel: "noopener" } });
            } catch (error) {
              status.setAttribute("role", "alert");
              status.setText(error instanceof SubstackError ? error.message : t("draftPublicationUncertain"));
            } finally {
              setBusy(false);
            }
          });
        });
      actions.addButton((button) => {
        openButton = button;
        button.setButtonText(t("openDraft")).onClick(async () => {
          if (busy)
            return;
          setBusy(true);
          try {
            if (categoriesLoaded && !categorySaved && !publicationAttempted)
              await saveDraftSection(session, newsletter, draftId, sectionId);
            if (!this.modalEl.isConnected)
              return;
            window.open(`https://${newsletter.subdomain}.substack.com/publish/post/${draftId}`, "_blank", "noopener");
            this.close();
          } catch (error) {
            status.setAttribute("role", "alert");
            status.setText(error instanceof SubstackError ? error.message : t("categorySaveFailed"));
          } finally {
            setBusy(false);
          }
        });
      });
    };
    try {
      const sections = await getSections(session, newsletter);
      if (!this.modalEl.isConnected)
        return;
      categoriesLoaded = true;
      status.empty();
      if (sections.length) {
        const choice = new import_obsidian3.Setting(this.contentEl).setName(t("category")).addDropdown((dropdown) => {
          category = dropdown;
          dropdown.selectEl.setAttribute("aria-label", t("category"));
          dropdown.addOption(":choose", t("chooseCategory"));
          dropdown.addOption("", t("mainPublication"));
          for (const section of sections)
            dropdown.addOption(String(section.id), section.name);
          dropdown.setValue(":choose").onChange(async (value) => {
            if (busy || value === ":choose")
              return;
            sectionId = value ? Number(value) : null;
            setBusy(true);
            status.setAttribute("role", "status");
            status.setText(t("savingCategory"));
            try {
              await saveDraftSection(session, newsletter, draftId, sectionId);
              if (!this.modalEl.isConnected)
                return;
              categorySaved = true;
              choice.settingEl.remove();
              status.empty();
              showActions();
            } catch (error) {
              dropdown.setValue(":choose");
              status.setAttribute("role", "alert");
              status.setText(error instanceof SubstackError ? error.message : t("categorySaveFailed"));
            } finally {
              setBusy(false);
            }
          });
        });
        return;
      }
    } catch (error) {
      status.setAttribute("role", "alert");
      status.setText(error instanceof SubstackError ? error.message : t("categoriesFailed"));
    }
    if (this.modalEl.isConnected)
      showActions();
  }
};

// plugin/auth.ts
var import_obsidian4 = require("obsidian");
var SubstackLogin = class {
  constructor() {
    this.authWindow = null;
    this.cancel = null;
  }
  get isOpen() {
    return this.authWindow !== null && !this.authWindow.isDestroyed();
  }
  focus() {
    var _a;
    const authWindow = this.authWindow;
    if (!authWindow || authWindow.isDestroyed())
      return;
    if (authWindow.isMinimized())
      authWindow.restore();
    (_a = this.app) == null ? void 0 : _a.focus({ steal: true });
    authWindow.show();
    authWindow.focus();
  }
  close() {
    var _a;
    (_a = this.cancel) == null ? void 0 : _a.call(this);
  }
  open() {
    var _a;
    if (!import_obsidian4.Platform.isDesktopApp) {
      throw new SubstackError(t("mobileSessionRequired"));
    }
    let remote;
    try {
      const electron = window.require("electron");
      remote = (_a = electron.remote) != null ? _a : electron;
    } catch (e) {
      throw new SubstackError(t("automaticLoginUnavailable"));
    }
    if (!remote.BrowserWindow || !remote.createFunctionWithReturnValue) {
      throw new SubstackError(t("automaticLoginUnavailable"));
    }
    this.app = remote.app;
    const denyPopups = remote.createFunctionWithReturnValue({ action: "deny" });
    const settingsWindow = remote.BrowserWindow.getFocusedWindow();
    const authWindow = new remote.BrowserWindow({
      width: 520,
      height: 720,
      title: t("loginTitle"),
      parent: settingsWindow != null ? settingsWindow : void 0,
      webPreferences: {
        partition: `to-substack-login-${Date.now()}`,
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true
      }
    });
    this.authWindow = authWindow;
    return new Promise((resolve, reject) => {
      const { cookies, webRequest } = authWindow.webContents.session;
      authWindow.webContents.removeAllListeners("will-navigate");
      webRequest.onBeforeRequest((details, callback) => {
        let cancel = false;
        if (details.resourceType === "mainFrame" && details.url !== "about:blank") {
          try {
            const url = new URL(details.url);
            cancel = url.protocol !== "https:" || !!url.username || !!url.password || url.hostname !== "substack.com" && !url.hostname.endsWith(".substack.com");
          } catch (e) {
            cancel = true;
          }
        }
        callback({ cancel });
      });
      let finished = false;
      let checking = false;
      const finish = (result, error) => {
        var _a2;
        if (finished)
          return;
        finished = true;
        window.clearInterval(interval);
        cookies.removeListener("changed", cookieChanged);
        webRequest.onBeforeRequest(null);
        if (this.authWindow === authWindow) {
          this.authWindow = null;
          this.cancel = null;
        }
        if (!authWindow.isDestroyed())
          authWindow.hide();
        if (result && settingsWindow && !settingsWindow.isDestroyed()) {
          if (settingsWindow.isMinimized())
            settingsWindow.restore();
          (_a2 = this.app) == null ? void 0 : _a2.focus({ steal: true });
          settingsWindow.show();
          settingsWindow.focus();
        }
        window.setTimeout(() => {
          try {
            if (!authWindow.isDestroyed())
              authWindow.destroy();
          } catch (e) {
            reject(new SubstackError(t("sessionReadFailed")));
            return;
          }
          if (error)
            reject(error);
          else
            resolve(result);
        }, 0);
      };
      const checkCookies = () => {
        if (finished || checking)
          return;
        checking = true;
        void (async () => {
          try {
            const values = await cookies.get({ url: "https://substack.com" });
            if (finished || !values.some((cookie) => cookie.name === "substack.sid" && cookie.value))
              return;
            const session = values.filter((cookie) => cookie.name.startsWith("substack") || cookie.name === "connect.sid").map((cookie) => `${cookie.name}=${cookie.value}`).join("; ");
            const account = await getAccount(session);
            finish({ session, account });
          } catch (error) {
            if (error instanceof SubstackError && (error.status === 401 || error.status === 403))
              return;
            if (!finished)
              finish(null, error instanceof SubstackError ? error : new SubstackError(t("sessionReadFailed")));
          } finally {
            checking = false;
          }
        })();
      };
      const cookieChanged = (_event, cookie) => {
        if (cookie.name === "substack.sid")
          checkCookies();
      };
      const interval = window.setInterval(checkCookies, 2e3);
      this.cancel = () => finish(null);
      cookies.on("changed", cookieChanged);
      authWindow.on("closed", () => finish(null));
      authWindow.webContents.on("will-prevent-unload", () => finish(null));
      authWindow.webContents.on("did-finish-load", checkCookies);
      authWindow.webContents.on("did-navigate-in-page", checkCookies);
      authWindow.webContents.setWindowOpenHandler(denyPopups);
      void authWindow.loadURL("https://substack.com/sign-in").catch((error) => {
        if (error && typeof error === "object" && error.code === "ERR_ABORTED")
          return;
        finish(null, new SubstackError(t("loginPageFailed")));
      });
    });
  }
};

// plugin/settings.ts
var import_obsidian5 = require("obsidian");
var SubstackSettingTab = class extends import_obsidian5.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.icon = "to-substack";
    this.plugin = plugin;
  }
  async setControlValue(key, value) {
    if (key === "sessionSecretId")
      this.plugin.cancelConnection();
    if (key === "mastodonServer")
      this.plugin.cancelMastodonLogin();
    await super.setControlValue(key, value);
    this.update();
  }
  getSettingDefinitions() {
    var _a;
    const plugin = this.plugin;
    const languageNames = {};
    for (const language of DRAFT_LANGUAGES) {
      const name = draftLanguageName(language);
      languageNames[language] = name.charAt(0).toUpperCase() + name.slice(1);
    }
    return [
      {
        type: "group",
        heading: t("substackAccount"),
        items: [
          {
            name: plugin.activity || (plugin.account ? t("connectedToAccount", { account: plugin.account.name }) : t("notConnected")),
            desc: plugin.error || (plugin.hasLoginWindow ? t("emailCodeHelp") : plugin.busy ? t("loadingAccountHelp") : t("connectionHelp")),
            render: (setting) => {
              setting.descEl.setAttribute("role", plugin.error ? "alert" : "status");
              if (import_obsidian5.Platform.isDesktopApp)
                setting.addButton((button) => button.setButtonText(plugin.hasLoginWindow ? t("returnToSignIn") : plugin.account ? t("switchAccount") : t("signIn")).setCta().setDisabled(plugin.busy && !plugin.hasLoginWindow).onClick(() => {
                  void plugin.connect(true);
                }));
              setting.addButton((button) => button.setButtonText(t("refresh")).setDisabled(plugin.busy || !plugin.settings.sessionSecretId).onClick(() => {
                void plugin.connect(false);
              }));
              if (plugin.busy)
                setting.addButton((button) => button.setButtonText(t("cancel")).onClick(() => {
                  plugin.cancelConnection();
                  this.update();
                }));
              if (plugin.settings.sessionSecretId)
                setting.addButton((button) => button.setButtonText(t("disconnect")).setDisabled(plugin.busy).onClick(() => {
                  void plugin.disconnect();
                }));
            }
          }
        ]
      },
      {
        type: "group",
        heading: t("newsletters"),
        items: ((_a = plugin.account) == null ? void 0 : _a.newsletters.length) ? plugin.account.newsletters.map((newsletter) => ({
          name: newsletter.name,
          desc: `https://${newsletter.subdomain}.substack.com`
        })) : [{
          name: plugin.account ? t("noNewsletters") : t("connectToLoadNewsletters"),
          desc: plugin.account ? t("checkAccountAccess") : ""
        }]
      },
      {
        type: "group",
        heading: t("languageEditions"),
        items: [{
          name: t("defaultLanguage"),
          desc: t("defaultLanguageHelp"),
          control: {
            type: "dropdown",
            key: "defaultLanguage",
            disabled: () => plugin.busy,
            options: languageNames
          }
        }, ...DRAFT_LANGUAGES.filter((language) => language !== plugin.settings.defaultLanguage).map((language) => {
          return {
            name: languageNames[language],
            render: (setting) => {
              setting.addToggle((toggle) => toggle.setValue(plugin.settings.translationLanguages.includes(language)).setDisabled(plugin.busy).onChange(async (enabled) => {
                const selected = DRAFT_LANGUAGES.filter((candidate) => candidate === language ? enabled : plugin.settings.translationLanguages.includes(candidate));
                await this.setControlValue("translationLanguages", selected);
              }));
            }
          };
        })]
      },
      {
        type: "group",
        heading: t("exportSettings"),
        items: [{
          name: t("removeTrailingTags"),
          desc: t("removeTrailingTagsHelp"),
          control: { type: "toggle", key: "removeTrailingTags" }
        }]
      },
      {
        type: "group",
        heading: t("manualConnection"),
        items: [{
          name: t("substackSession"),
          desc: t("manualSessionHelp"),
          control: { type: "secret", key: "sessionSecretId", disabled: () => plugin.busy }
        }]
      },
      {
        type: "group",
        heading: t("mastodonAccount"),
        items: [{
          name: t("mastodonServer"),
          desc: t("mastodonServerHelp"),
          control: { type: "text", key: "mastodonServer", placeholder: "mastodon.social", disabled: () => plugin.mastodonBusy || !!plugin.mastodonAccount }
        }, {
          name: plugin.mastodonAccount ? t("mastodonConnected", { account: plugin.mastodonAccount }) : t("notConnected"),
          desc: plugin.mastodonError || t(plugin.hasMastodonLogin ? "mastodonAwaitingAuthorization" : "mastodonConnectionHelp"),
          render: (setting) => {
            setting.descEl.setAttribute("role", plugin.mastodonError ? "alert" : "status");
            if (!plugin.mastodonAccount)
              setting.addButton((button) => button.setButtonText(t(plugin.hasMastodonLogin ? "returnToSignIn" : "signIn")).setDisabled(plugin.mastodonBusy || !plugin.settings.mastodonServer.trim()).onClick(() => {
                void plugin.connectMastodon();
              }));
            if (plugin.settings.mastodonSecretId)
              setting.addButton((button) => button.setButtonText(t("disconnect")).setDisabled(plugin.mastodonBusy).onClick(() => {
                void plugin.disconnectMastodon();
              }));
            if (plugin.hasMastodonLogin)
              setting.addButton((button) => button.setButtonText(t("cancel")).setDisabled(plugin.mastodonBusy).onClick(() => {
                plugin.cancelMastodonLogin();
                this.update();
              }));
          }
        }]
      }
    ];
  }
};

// plugin/main.ts
var SESSION_SECRET = "obsidian-to-substack-session";
var MASTODON_SECRET = "to-substack-mastodon-session";
var ToSubstackPlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.settings = { sessionSecretId: "", defaultLanguage: "en", translationLanguages: [...DRAFT_LANGUAGES], removeTrailingTags: false, mastodonServer: "", mastodonSecretId: "" };
    this.account = null;
    this.activity = "";
    this.error = "";
    this.mastodonAccount = "";
    this.mastodonBusy = false;
    this.mastodonError = "";
    this.mastodonLogin = null;
    this.mastodonOperation = 0;
    this.operation = 0;
    this.connection = Promise.resolve();
    this.login = new SubstackLogin();
  }
  get busy() {
    return this.activity !== "";
  }
  get hasLoginWindow() {
    return this.login.isOpen;
  }
  get hasMastodonLogin() {
    return this.mastodonLogin !== null;
  }
  getMastodonSession() {
    const value = this.settings.mastodonSecretId ? this.app.secretStorage.getSecret(this.settings.mastodonSecretId) : null;
    return value ? parseMastodonSession(value) : null;
  }
  async onload() {
    var _a;
    setLocale((0, import_obsidian6.getLanguage)());
    const appLanguage = (0, import_obsidian6.getLanguage)().toLowerCase().replace(/_/g, "-").split("-")[0];
    this.settings.defaultLanguage = (_a = DRAFT_LANGUAGES.find((language) => language === appLanguage)) != null ? _a : "en";
    (0, import_obsidian6.addIcon)("to-substack", icon_default);
    const saved = await this.loadData();
    if (saved && typeof saved === "object") {
      const data = saved;
      const value = data.sessionSecretId;
      if (typeof value === "string" && /^[a-z0-9-]+$/.test(value))
        this.settings.sessionSecretId = value;
      const defaultLanguage = DRAFT_LANGUAGES.find((language) => language === data.defaultLanguage);
      if (defaultLanguage)
        this.settings.defaultLanguage = defaultLanguage;
      const languages = data.translationLanguages;
      if (Array.isArray(languages))
        this.settings.translationLanguages = DRAFT_LANGUAGES.filter((language) => languages.includes(language));
      if (typeof data.removeTrailingTags === "boolean")
        this.settings.removeTrailingTags = data.removeTrailingTags;
      if (typeof data.mastodonServer === "string")
        this.settings.mastodonServer = data.mastodonServer;
      if (typeof data.mastodonSecretId === "string" && /^[a-z0-9-]+$/.test(data.mastodonSecretId))
        this.settings.mastodonSecretId = data.mastodonSecretId;
    }
    try {
      const session = this.getMastodonSession();
      if (session) {
        this.mastodonAccount = session.account;
        this.settings.mastodonServer = session.server;
      }
    } catch (e) {
      this.mastodonError = t("mastodonSessionExpired");
    }
    this.settingsTab = new SubstackSettingTab(this.app, this);
    this.addSettingTab(this.settingsTab);
    this.register(() => {
      this.cancelConnection();
      this.cancelMastodonLogin();
    });
    this.registerObsidianProtocolHandler("to-substack-mastodon", (params) => {
      void this.finishMastodonLogin(params);
    });
    this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
      var _a2;
      if (!(file instanceof import_obsidian6.TFile) || file.extension !== "md")
        return;
      const view = this.app.workspace.getActiveViewOfType(import_obsidian6.MarkdownView);
      const selection = ((_a2 = view == null ? void 0 : view.file) == null ? void 0 : _a2.path) === file.path ? view.editor.getSelection() || void 0 : void 0;
      menu.addItem((item) => item.setTitle(t("pluginName")).setIcon("to-substack").onClick(() => {
        new PostModal(this, file, selection).open();
      }));
    }));
    this.registerEvent(this.app.workspace.on("editor-menu", (menu, editor, info) => {
      if (!info.file || info.file.extension !== "md")
        return;
      const file = info.file;
      const selection = editor.getSelection() || void 0;
      menu.addItem((item) => item.setTitle(t("pluginName")).setIcon("to-substack").onClick(() => {
        new PostModal(this, file, selection).open();
      }));
    }));
    if (this.settings.sessionSecretId && this.app.secretStorage.getSecret(this.settings.sessionSecretId)) {
      void this.connect(false);
    }
  }
  cancelMastodonLogin() {
    this.mastodonOperation++;
    this.mastodonLogin = null;
    this.mastodonBusy = false;
    this.mastodonError = "";
  }
  async connectMastodon() {
    if (this.mastodonBusy)
      return;
    if (this.mastodonLogin && Date.now() - this.mastodonLogin.createdAt < 10 * 60 * 1e3) {
      window.open(this.mastodonLogin.authorizationUrl, "_blank", "noopener");
      return;
    }
    this.cancelMastodonLogin();
    const operation = this.mastodonOperation;
    this.mastodonBusy = true;
    this.settingsTab.update();
    try {
      const redirectUri = `obsidian://to-substack-mastodon?vault=${encodeURIComponent(this.app.vault.getName())}`;
      const login = await beginMastodonLogin(this.settings.mastodonServer, redirectUri);
      if (operation !== this.mastodonOperation)
        return;
      this.mastodonLogin = login;
      window.open(login.authorizationUrl, "_blank", "noopener");
    } catch (error) {
      if (operation === this.mastodonOperation)
        this.mastodonError = error instanceof MastodonError ? error.message : t("mastodonConnectionFailed");
    } finally {
      if (operation === this.mastodonOperation) {
        this.mastodonBusy = false;
        this.settingsTab.update();
      }
    }
  }
  async finishMastodonLogin(params) {
    const login = this.mastodonLogin;
    if (!login || params.state !== login.state)
      return;
    this.mastodonLogin = null;
    const operation = this.mastodonOperation;
    this.mastodonBusy = true;
    this.settingsTab.update();
    try {
      const session = await completeMastodonLogin(login, params);
      if (operation !== this.mastodonOperation) {
        await revokeMastodonSession(session).catch(() => {
        });
        return;
      }
      const previousSecret = this.app.secretStorage.getSecret(MASTODON_SECRET);
      try {
        this.app.secretStorage.setSecret(MASTODON_SECRET, JSON.stringify(session));
        await this.saveData({ ...this.settings, mastodonServer: session.server, mastodonSecretId: MASTODON_SECRET });
      } catch (e) {
        await revokeMastodonSession(session).catch(() => {
        });
        this.app.secretStorage.setSecret(MASTODON_SECRET, previousSecret != null ? previousSecret : "");
        throw new MastodonError(t("mastodonSaveFailed"));
      }
      if (operation !== this.mastodonOperation)
        return;
      this.settings.mastodonServer = session.server;
      this.settings.mastodonSecretId = MASTODON_SECRET;
      this.mastodonAccount = session.account;
      this.mastodonError = "";
      new import_obsidian6.Notice(t("mastodonConnected", { account: session.account }));
    } catch (error) {
      if (operation === this.mastodonOperation)
        this.mastodonError = error instanceof MastodonError ? error.message : t("mastodonConnectionFailed");
    } finally {
      if (operation === this.mastodonOperation) {
        this.mastodonBusy = false;
        this.settingsTab.update();
      }
    }
  }
  async disconnectMastodon() {
    if (this.mastodonBusy)
      return;
    this.cancelMastodonLogin();
    this.mastodonBusy = true;
    this.settingsTab.update();
    try {
      let session = null;
      try {
        session = this.getMastodonSession();
      } catch (e) {
      }
      const ownSecret = this.settings.mastodonSecretId === MASTODON_SECRET;
      await this.saveData({ ...this.settings, mastodonSecretId: "" });
      this.settings.mastodonSecretId = "";
      this.mastodonAccount = "";
      if (ownSecret) {
        try {
          this.app.secretStorage.setSecret(MASTODON_SECRET, "");
        } catch (e) {
          this.mastodonError = t("mastodonSaveFailed");
        }
      }
      if (session && ownSecret) {
        try {
          await revokeMastodonSession(session);
        } catch (e) {
          this.mastodonError = t("mastodonRevokeFailed");
        }
      }
    } catch (e) {
      this.mastodonError = t("mastodonSaveFailed");
    } finally {
      this.mastodonBusy = false;
      this.settingsTab.update();
    }
  }
  cancelConnection() {
    this.operation++;
    this.login.close();
    this.activity = "";
    this.account = null;
    this.error = "";
  }
  connect(useBrowser) {
    if (this.busy) {
      if (useBrowser)
        this.login.focus();
      return this.connection;
    }
    this.connection = this.loadAccount(useBrowser);
    return this.connection;
  }
  async loadAccount(useBrowser) {
    const operation = ++this.operation;
    this.activity = useBrowser ? t("signingIn") : t("loadingNewsletters");
    this.error = "";
    this.settingsTab.update();
    try {
      let session;
      let account;
      if (useBrowser) {
        const connection = this.login.open();
        this.settingsTab.update();
        const result = await connection;
        if (operation !== this.operation)
          return;
        if (!result) {
          this.error = t("connectionInterrupted");
          return;
        }
        ({ session, account } = result);
      } else {
        const savedSession = this.settings.sessionSecretId ? this.app.secretStorage.getSecret(this.settings.sessionSecretId) : null;
        if (!savedSession)
          throw new SubstackError(t("chooseSession"));
        session = savedSession;
        account = await getAccount(session);
      }
      if (operation !== this.operation)
        return;
      if (useBrowser) {
        const previousSecret = this.app.secretStorage.getSecret(SESSION_SECRET);
        const previousId = this.settings.sessionSecretId;
        try {
          this.app.secretStorage.setSecret(SESSION_SECRET, session);
          await this.saveData({ ...this.settings, sessionSecretId: SESSION_SECRET });
          this.settings.sessionSecretId = SESSION_SECRET;
        } catch (e) {
          this.app.secretStorage.setSecret(SESSION_SECRET, previousSecret != null ? previousSecret : "");
          this.settings.sessionSecretId = previousId;
          throw new SubstackError(t("sessionSaveFailed"));
        }
      }
      if (operation === this.operation) {
        this.account = account;
        if (useBrowser)
          new import_obsidian6.Notice(t("connectionEstablished"));
      }
    } catch (error) {
      if (operation !== this.operation)
        return;
      this.account = null;
      this.error = error instanceof SubstackError ? error.message : t("connectionFailed");
      new import_obsidian6.Notice(this.error);
    } finally {
      if (operation === this.operation) {
        this.activity = "";
        this.settingsTab.update();
      }
    }
  }
  async disconnect() {
    if (this.busy)
      return;
    this.activity = t("disconnecting");
    this.settingsTab.update();
    try {
      await this.saveData({ ...this.settings, sessionSecretId: "" });
      if (this.settings.sessionSecretId === SESSION_SECRET)
        this.app.secretStorage.setSecret(SESSION_SECRET, "");
      this.settings.sessionSecretId = "";
      this.cancelConnection();
    } catch (e) {
      this.error = t("disconnectFailed");
    } finally {
      this.activity = "";
    }
    this.settingsTab.update();
  }
};

/* nosourcemap */