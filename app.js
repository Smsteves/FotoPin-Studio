'use strict';

/*!
 * FotoPin Studio
 * Copyright (c) 2026 Stefano Prevedini (Smsteves).
 * All Rights Reserved.
 *
 * This source code is publicly visible because it runs in the user's browser,
 * but it is NOT open source. See the LICENSE file for terms.
 *
 * Unauthorized copying, modification, redistribution, or use of this code
 * — in whole or in part, including derivative works — is prohibited
 * without prior written permission from the copyright holder.
 */

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  VERSIONE APP — INCREMENTARE AD OGNI NUOVA BUILD / MODIFICA            ║
// ║  Questo numero DEVE cambiare ogni volta che si genera un nuovo file.   ║
// ║  Formato: MAJOR.MINOR (es. 2.1, 2.2, 3.0, ...)                        ║
// ╚══════════════════════════════════════════════════════════════════════════╝
const APP_VERSION = '2.69';

const I18N = {
  it: {
    newProject:'Nuovo album', openProject:'Apri album', importFotoPin:'Importa FotoPin', saveProject:'Salva album', exportEmbedPublic:'Esporta Web embed', exportEmbedProtected:'Esporta Web embed protetto', exportEmbedPublicExported:'Viewer embed pubblico esportato', exportEmbedProtectedExported:'Viewer embed protetto esportato', project:'Album', albumName:'Nome album', musicMp3:'Musiche MP3', photos:'Foto', selectedPhoto:'Foto selezionata', photoTitle:'Titolo foto', photoDescription:'Descrizione foto', pointsNotes:'Punti / Note', startPresentation:'Presentazione', pausePresentation:'Pausa Presentazione', music:'Musica', pauseMusic:'Pausa Musica', home:'Home', deletePhoto:'Elimina foto', noPhoto:'Aggiungi una o più foto per iniziare.', editorHint:'In modalità Edita, clicca sulla foto per aggiungere un punto. Salva spesso l’album per non perdere il lavoro.', noSpots:'Nessun punto nota su questa foto.', notePlaceholder:'Scrivi qui la nota...', delete:'Elimina', point:'Punto', unsaved:'Hai modifiche non salvate. Ricordati di salvare l’album.', confirmNew:'Creare un nuovo album? Le modifiche non salvate andranno perse.', confirmDeletePhoto:'Eliminare questa foto?', confirmDeleteMusic:'Eliminare questa musica dal progetto?', projectSaved:'Album salvato', loadError:'Impossibile aprire l’album. Usa uno ZIP esportato da FotoPin.', fotoPinImportError:'Impossibile importare questo export FotoPin. Usa lo ZIP creato da Esporta album singolo nell’app Android.', fotoPinImported:'Album FotoPin importato', choosePhoto:'Seleziona una foto.', musicLoaded:'Musiche caricate:', noMusic:'Nessuna musica caricata', albumDefault:'Album FotoPin', compressing:'Compressione immagini in qualità Media...', rightClickBack:'Tasto destro: foto precedente. Clic: foto successiva.', exportedName:'progetto_fotopin', slideSeconds:'Secondi slide', showCaption:'Mostra titolo', yes:'Sì', no:'No', qualityMedium:'Compressione immagini: qualità Media', moveUp:'Sposta su', moveDown:'Sposta giù', musicFolder:'Le musiche saranno salvate nello ZIP dentro la cartella music/', playThis:'Usa questa', selectedMusic:'Musica selezionata', noViewerPhotos:'Aggiungi foto prima di esportare il viewer.', viewerExported:'Viewer esportato', projectFormat:'Formato album FotoPin compatibile.', keyboardHelp:'Scorciatoie: Spazio pausa/riprendi, Frecce avanti/indietro, Esc Home.', choosePointKind:'Vuoi aggiungere una FOTO collegata? OK = Foto, Annulla = Nota', selectLinkedPhoto:'Scegli la foto da collegare al punto.', notePoint:'Nota', photoPoint:'Foto', linkedPhoto:'Foto collegata', movePointHint:'Per spostare: tasto destro sul punto, scegli Sposta, trascina e rilascia.', editMode:'Edita', navigateMode:'Naviga', changeMusic:'Cambia musica', webPassword:'Password per esportazione Web protetta:', webPasswordRepeat:'Ripeti la password:', webPasswordMismatch:'Le password non coincidono.', webPasswordRequired:'Password obbligatoria.', protectedViewerExported:'Viewer Web protetto esportato', unlockAlbum:'Sblocca album', lockedAlbum:'Album bloccato: inserisci la password per modificare.', unlockedAlbum:'Album sbloccato.', noLockAlbum:'Album non bloccato.', unlockPassword:'Inserisci password/codice di sblocco:', unlockOk:'Album sbloccato.', unlockFail:'Password non valida.', latitude:'Latitudine GPS', longitude:'Longitudine GPS', lockedSaveBlocked:'Album bloccato: sbloccalo prima di salvare modifiche.', openMaps:'Apri in Google Maps', addressSearch:'Indirizzo / luogo', searchMaps:'Cerca in Google Maps', missingGps:'Inserisci latitudine e longitudine.', missingAddress:'Inserisci un indirizzo o luogo da cercare.', saveNote:'Salva', close:'Chiudi', miniGuide:'Mini guida', fullGuide:'Guida completa', settingsButton:'Impostazioni', settingsTitle:'Impostazioni', authorLabel:'Autore: Smsteves', buyCoffee:'OFFRIMI UN CAFFÈ', saveSettings:'Salva impostazioni', cancel:'Annulla', languageLabel:'Lingua', compressionInfo:'Compressione immagini: qualità Media', webQualityTitle:'Qualità export Web protetto', webQualityHelp:'Scegli la qualità delle foto per il viewer protetto. Più basso = file più leggero.', continueExport:'Continua', webQualityValue:'Qualità', passwordButton:'Password', showPassword:'Mostra password', albumPasswordTitle:'Password album', albumPasswordMessage:'Conserva questa password/codice. Serve per sbloccare l’album su Web e Android.', passwordUnavailable:'Password non disponibile in questo browser. Se l’album è locked, sbloccalo prima con il codice corretto.', copyPassword:'Copia password', passwordCopied:'Password copiata.', albumImageQuality:'Qualità immagini album', albumImageQualityHelp:'Usata quando aggiungi nuove foto all’album. Non modifica le foto già presenti.', albumImageQualityValue:'Qualità album', exportTargetTitle:'Tipo esportazione Web protetta', exportTargetHelp:'Scegli il viewer protetto più adatto al dispositivo.', exportTargetAndroid:'Android / PC', exportTargetIos:'iOS leggero', exportTargetIosHelp:'Consigliato per iPhone/iPad: decripta una foto alla volta e usa immagini più leggere.', exportClearPhotos:'Esporta foto in chiaro', reimportClearPhotos:'Reimporta foto', generateVideo:'Genera video MP4', videoNoSupport:'Questo browser non supporta la registrazione video diretta. Prova Chrome, Edge o Safari aggiornato.', videoGenerating:'Generazione video...', videoPreparing:'Preparazione video...', videoReady:'Video creato', videoFallbackWebm:'MP4 non supportato da questo browser: ho generato un file WebM.',
  videoAudioWebm:'Per mantenere l’audio compatibile ho generato WebM: questo browser non offre MP4/AAC diretto.', videoError:'Impossibile generare il video.', clearPhotosExported:'Foto in chiaro esportate', clearPhotosImportDone:'Foto reimportate:', clearPhotosImportError:'Impossibile reimportare le foto. Usa lo ZIP creato da Esporta foto in chiaro.', clearPhotosLocked:'Album bloccato: sbloccalo prima di esportare o reimportare foto.', clearPhotosImportPartial:'Reimportazione completata. Foto aggiornate:', clearPhotosImportMissing:'Foto mancanti nello ZIP lasciate invariate:', clearPhotosImportUnmatched:'File non riconosciuti ignorati:', selectExistingPhotoForPoint:'Scegli una foto esistente dall’elenco. Verrà mostrata in anteprima, poi conferma per creare il punto.', confirmLinkedPhoto:'OK', cancelLinkedPhoto:'Annulla', selectedLinkedPhotoPreview:'Foto collegata selezionata:', cannotLinkSamePhoto:'Scegli una foto diversa da quella di partenza.', verifyPath:'Verifica Percorso', pathOk:'Percorso OK: nessuna foto ripetuta oltre il limite.', pathProblems:'Attenzione: foto richiamate più di una volta o collegamenti non validi. Evidenziate in arancione:'
  },
  en: {
    newProject:'New album', openProject:'Open album', importFotoPin:'Import FotoPin', saveProject:'Save album', exportEmbedPublic:'Export Web embed', exportEmbedProtected:'Export protected Web embed', exportEmbedPublicExported:'Public embed viewer exported', exportEmbedProtectedExported:'Protected embed viewer exported', project:'Album', albumName:'Album name', musicMp3:'MP3 music', photos:'Photos', selectedPhoto:'Selected photo', photoTitle:'Photo title', photoDescription:'Photo description', pointsNotes:'Pins / Notes', startPresentation:'Presentation', pausePresentation:'Pause Presentation', music:'Music', pauseMusic:'Pause Music', home:'Home', deletePhoto:'Delete photo', noPhoto:'Add one or more photos to start.', editorHint:'In Edit mode, click the photo to add a pin. Save the album often to avoid losing work.', noSpots:'No note pins on this photo.', notePlaceholder:'Write the note here...', delete:'Delete', point:'Pin', unsaved:'You have unsaved changes. Remember to save the album.', confirmNew:'Create a new album? Unsaved changes will be lost.', confirmDeletePhoto:'Delete this photo?', confirmDeleteMusic:'Remove this music from the project?', projectSaved:'Album saved', loadError:'Cannot open the album. Use a ZIP exported by FotoPin.', fotoPinImportError:'Cannot import this FotoPin export. Use the ZIP created by single album export in the Android app.', fotoPinImported:'FotoPin album imported', choosePhoto:'Select a photo.', musicLoaded:'Loaded music:', noMusic:'No music loaded', albumDefault:'FotoPin Album', compressing:'Compressing images at Medium quality...', rightClickBack:'Right click: previous photo. Click: next photo.', exportedName:'fotopin_project', slideSeconds:'Slide seconds', showCaption:'Show title', yes:'Yes', no:'No', qualityMedium:'Image compression: Medium quality', moveUp:'Move up', moveDown:'Move down', musicFolder:'Music will be saved inside the ZIP in the music/ folder.', playThis:'Use this', selectedMusic:'Selected music', noViewerPhotos:'Add photos before exporting the viewer.', viewerExported:'Viewer exported', projectFormat:'Compatible FotoPin album format.', keyboardHelp:'Shortcuts: Space pause/resume, arrows next/previous, Esc Home.', choosePointKind:'Add a linked PHOTO? OK = Photo, Cancel = Note', selectLinkedPhoto:'Choose the photo to link to the pin.', notePoint:'Note', photoPoint:'Photo', linkedPhoto:'Linked photo', movePointHint:'To move: right-click the pin, choose Move, drag and drop.', editMode:'Edit', navigateMode:'Navigate', changeMusic:'Change music', webPassword:'Password for protected Web export:', webPasswordRepeat:'Repeat password:', webPasswordMismatch:'Passwords do not match.', webPasswordRequired:'Password required.', protectedViewerExported:'Protected Web viewer exported', unlockAlbum:'Unlock album', lockedAlbum:'Locked album: enter password to edit.', unlockedAlbum:'Album unlocked.', noLockAlbum:'Album not locked.', unlockPassword:'Enter unlock password/code:', unlockOk:'Album unlocked.', unlockFail:'Invalid password.', latitude:'GPS latitude', longitude:'GPS longitude', lockedSaveBlocked:'Album locked: unlock it before saving changes.', openMaps:'Open in Google Maps', addressSearch:'Address / place', searchMaps:'Search in Google Maps', missingGps:'Enter latitude and longitude.', missingAddress:'Enter an address or place to search.', saveNote:'Save', close:'Close', miniGuide:'Mini guide', fullGuide:'Full guide', settingsButton:'Settings', settingsTitle:'Settings', authorLabel:'Author: Smsteves', buyCoffee:'BUY ME A COFFEE', saveSettings:'Save settings', cancel:'Cancel', languageLabel:'Language', compressionInfo:'Image compression: Medium quality', webQualityTitle:'Protected Web export quality', webQualityHelp:'Choose photo quality for the protected viewer. Lower = smaller file.', continueExport:'Continue', webQualityValue:'Quality', passwordButton:'Password', showPassword:'Show password', albumPasswordTitle:'Album password', albumPasswordMessage:'Keep this password/code safe. It is needed to unlock the album on Web and Android.', passwordUnavailable:'Password not available in this browser. If the album is locked, unlock it first with the correct code.', copyPassword:'Copy password', passwordCopied:'Password copied.', albumImageQuality:'Album image quality', albumImageQualityHelp:'Used when adding new photos to the album. Existing photos are not changed.', albumImageQualityValue:'Album quality', exportTargetTitle:'Protected Web export type', exportTargetHelp:'Choose the protected viewer best suited to the device.', exportTargetAndroid:'Android / PC', exportTargetIos:'Light iOS', exportTargetIosHelp:'Recommended for iPhone/iPad: decrypts one photo at a time and uses lighter images.', exportClearPhotos:'Export clear photos', reimportClearPhotos:'Reimport photos', generateVideo:'Generate MP4 video', videoNoSupport:'This browser does not support direct video recording. Try an updated Chrome, Edge or Safari.', videoGenerating:'Generating video...', videoPreparing:'Preparing video...', videoReady:'Video created', videoFallbackWebm:'MP4 is not supported by this browser: I generated a WebM file.',
  videoAudioWebm:'To keep audio compatible I generated WebM: this browser does not provide direct MP4/AAC.', videoError:'Cannot generate the video.', clearPhotosExported:'Clear photos exported', clearPhotosImportDone:'Photos reimported:', clearPhotosImportError:'Cannot reimport photos. Use the ZIP created by Export clear photos.', clearPhotosLocked:'Album locked: unlock it before exporting or reimporting photos.', clearPhotosImportPartial:'Reimport completed. Photos updated:', clearPhotosImportMissing:'Photos missing from ZIP left unchanged:', clearPhotosImportUnmatched:'Unrecognized files ignored:', selectExistingPhotoForPoint:'Choose an existing photo from the list. It will be shown as a preview, then confirm to create the pin.', confirmLinkedPhoto:'OK', cancelLinkedPhoto:'Cancel', selectedLinkedPhotoPreview:'Linked photo selected:', cannotLinkSamePhoto:'Choose a different photo from the starting one.', verifyPath:'Check Path', pathOk:'Path OK: no photo is repeated beyond the limit.', pathProblems:'Warning: photos linked more than once or invalid links. Highlighted in orange:'
  }
};

Object.assign(I18N.it, {
  hiddenPathToolsTitle:'Funzioni nascoste',
  hiddenPathToolsHint:'Questa finestra appare solo con triplo click destro sul titolo FotoPin.',
  exportPathPoints:'Esporta percorso/punti',
  importPathPoints:'Importa percorso/punti',
  pathPointsExported:'Percorso e punti esportati',
  pathPointsImportLocked:'Album bloccato: sbloccalo prima di importare percorso e punti.',
  pathPointsImportProtected:'Importa percorso/punti è disponibile solo su un album non protetto.',
  pathPointsImportInvalid:'File percorso/punti non valido.',
  pathPointsImportNoMatches:'Nessuna foto corrispondente trovata nel nuovo album.',
  pathPointsImportConfirm:'Importare percorso e punti? I punti/note/testi esistenti sulle foto abbinate verranno sostituiti.',
  pathPointsImported:'Percorso e punti importati',
  pathPointsMatched:'Foto abbinate',
  pathPointsCopied:'Punti copiati',
  pathPointsSkipped:'Punti foto saltati perché la foto collegata non è stata trovata',
  pathPointsRootHint:'Nota: l’immagine principale resta sempre la prima foto del nuovo album.', saveDownloadHint:'Controlla la cartella Download del browser. Se non compare, verifica se il browser ha bloccato più download automatici.', saveDirectorySaved:'Album salvato nella posizione scelta.', saveDirectoryUnsupported:'Questo browser non permette la scelta diretta della cartella: uso il download normale.',
  watermarkOption:'Mostra scritta \"Fotopin by Sp.\" in basso a destra',
  edit:'Modifica', copy:'Copia', cut:'Taglia', pasteHere:'Incolla punto qui', move:'Sposta', undo:'Undo', noUndo:'Nessuna operazione da annullare', moveMode:'Trascina il punto/testo e rilascialo nella nuova posizione.', pasteAsk:'Hai un punto copiato/tagliato. Vuoi incollarlo qui?', pointMenuHint:'Clic su un punto: menu modifica/copia/taglia/elimina/sposta/undo.', pointMoved:'Punto spostato', confirmDeletePoint:'Eliminare questo punto?', chooseLinkedPhotoFromList:'Inserisci il numero della foto da collegare:', invalidPhotoNumber:'Numero foto non valido.', clipboard:'Clipboard', clipboardCut:'Taglia', clipboardCopy:'Copia', clipboardCutRestored:'Punto ripristinato nella posizione originale.', clipboardCleared:'Clipboard svuotata.', clipboardPasteHint:'Clicca sulla foto per incollare il punto.', listHint:'Clicca un punto per evidenziarlo sulla foto. Clicca ancora per aprire il menu.', cancel:'Annulla', photoRef:'Foto', freeTextPoint:'Testo libero', freeTextTitle:'Testo libero', freeTextPlaceholder:'Scrivi una riga di testo...', freeTextColor:'Colore', freeTextSize:'Dimensione', freeTextDefault:'Testo', saveFreeText:'Salva testo', titolatorPoint:'Titolatore', titolatorTitle:'Titolatore', titolatorPlaceholder:'Scrivi i titoli su più righe...', titolatorDefault:'Titoli di coda', saveTitolator:'Salva titolatore', titolatorWidth:'Larghezza riquadro (%)', titolatorHeight:'Altezza riquadro (%)', titolatorSpeed:'Velocità (1 = normale, meno = più lento)', titolatorMode:'Orientamento', titolatorModeVertical:'Verticale', titolatorModeHorizontal:'Orizzontale', titolatorDirection:'Verso orizzontale', titolatorDirRightLeft:'Destra → Sinistra', titolatorDirLeftRight:'Sinistra → Destra', titolatorContinuous:'Continuo fino alla fine', titolatorStopMarker:'stop', choosePointKind:'Scegli cosa inserire'
});
Object.assign(I18N.en, {
  hiddenPathToolsTitle:'Hidden tools',
  hiddenPathToolsHint:'This dialog appears only with a triple right-click on the FotoPin title.', photoListActionsTitle:'Photo actions', photoShowInfo:'Photo details', exportSinglePhoto:'Export photo', importSinglePhoto:'Import photo', singlePhotoLocked:'Album locked: unlock it before exporting or importing a photo.', singlePhotoExported:'Photo exported', singlePhotoImported:'Photo imported', singlePhotoImportError:'Cannot import the photo. Use an image file.', singlePhotoImportConfirm:'Import this photo in place of the selected one?',
  exportPathPoints:'Export path/pins',
  importPathPoints:'Import path/pins',
  pathPointsExported:'Path and pins exported',
  pathPointsImportLocked:'Locked album: unlock it before importing path and pins.',
  pathPointsImportProtected:'Import path/pins is available only on an unprotected album.',
  pathPointsImportInvalid:'Invalid path/pins file.',
  pathPointsImportNoMatches:'No matching photos found in the new album.',
  pathPointsImportConfirm:'Import path and pins? Existing pins/notes/texts on matched photos will be replaced.',
  pathPointsImported:'Path and pins imported',
  pathPointsMatched:'Matched photos',
  pathPointsCopied:'Copied pins',
  pathPointsSkipped:'Photo pins skipped because the linked photo was not found',
  pathPointsRootHint:'Note: the main image is still the first photo of the new album.', saveDownloadHint:'Check your browser Downloads folder. If it does not appear, check whether the browser blocked multiple automatic downloads.', saveDirectorySaved:'Album saved to the selected location.', saveDirectoryUnsupported:'This browser does not allow direct folder selection: using the normal download.',
  watermarkOption:'Show \"Fotopin by Sp.\" at bottom right',
  edit:'Edit', copy:'Copy', cut:'Cut', pasteHere:'Paste pin here', move:'Move', undo:'Undo', noUndo:'Nothing to undo', moveMode:'Drag the pin/text and drop it in the new position.', pasteAsk:'You have a copied/cut pin. Paste it here?', pointMenuHint:'Click a pin: edit/copy/cut/delete/move/undo menu.', pointMoved:'Pin moved', confirmDeletePoint:'Delete this pin?', chooseLinkedPhotoFromList:'Enter the number of the photo to link:', invalidPhotoNumber:'Invalid photo number.', clipboard:'Clipboard', clipboardCut:'Cut', clipboardCopy:'Copy', clipboardCutRestored:'Pin restored to the original position.', clipboardCleared:'Clipboard cleared.', clipboardPasteHint:'Click the image to paste the pin.', listHint:'Click a pin to highlight it on the image. Click again to open the menu.', cancel:'Cancel', photoRef:'Photo', freeTextPoint:'Free text', freeTextTitle:'Free text', freeTextPlaceholder:'Write one line of text...', freeTextColor:'Color', freeTextSize:'Size', freeTextDefault:'Text', saveFreeText:'Save text', titolatorPoint:'Scrolling titles', titolatorTitle:'Scrolling titles', titolatorPlaceholder:'Write multi-line scrolling titles...', titolatorDefault:'Credits', saveTitolator:'Save titles', titolatorWidth:'Box width (%)', titolatorHeight:'Box height (%)', titolatorSpeed:'Speed (1 = normal, lower = slower)', titolatorMode:'Orientation', titolatorModeVertical:'Vertical', titolatorModeHorizontal:'Horizontal', titolatorDirection:'Horizontal direction', titolatorDirRightLeft:'Right → Left', titolatorDirLeftRight:'Left → Right', titolatorContinuous:'Continuous until the end', titolatorStopMarker:'stop', choosePointKind:'Choose what to insert'
});

Object.assign(I18N.it, {
  verifyPathTitle:'Verifica Percorso',
  allowedRepeats:'Ripetizioni ammesse',
  runCheck:'Esegui',
  cinematicOff:'▶️ Normale',
  cinematicOn:'🎬 Cinema',
  cinematicLabel:'Modalità percorso'
});
Object.assign(I18N.en, {
  verifyPathTitle:'Check Path',
  allowedRepeats:'Allowed repeats',
  runCheck:'Run',
  cinematicOff:'▶️ Normal',
  cinematicOn:'🎬 Cinema',
  cinematicLabel:'Path mode'
});


Object.assign(I18N.it, {
  videoOptionsTitle:'Genera video',
  videoCancelled:'Generazione video annullata.',
  videoMusicLabel:'Musica',
  videoMusicNone:'Nessuna musica',
  videoMusicRandom:'Casuale',
  videoMusicChooseFile:'Scegli MP3 esterno',
  videoMusicSelectedFile:'File scelto',
  videoQualityLabel:'Qualità finale',
  videoQualityMedium:'Media — 854×480 — file leggero',
  videoQualityGood:'Buona — 960×540',
  videoQualityHigh:'Alta — 1280×720',
  videoQualityMaximum:'Massima — 1920×1080',
  videoStartFromRoot:'Il video parte sempre dalla foto principale dell album.',
  videoContinue:'Genera',
  videoMusicWarning:'Nota: per avere la musica nel video è meglio scegliere un MP3 locale o una musica già salvata nell album.',
  videoPreviewMusic:'▶ Prova musica',
  videoStopPreview:'■ Ferma musica',
  videoPreviewNoMusic:'Seleziona una musica o scegli un file MP3.',
  videoPreviewError:'Impossibile riprodurre questa musica.',
  videoAudioSkipped:'Musica non inclusa: formato non supportato o non caricabile dal browser.',
  videoWebMusicTitle:'Musiche free Web',
  videoWebMusicIdle:'Non scaricata',
  videoWebMusicDownloading:'Caricamento in corso',
  videoWebMusicReady:'Pronta',
  videoWebMusicError:'Errore caricamento',
  videoWebMusicDownload:'Carica',
  videoWebMusicRetry:'Riprova',
  videoWebMusicUse:'Usa',
  videoMusicNotReady:'Attendi che la musica selezionata diventi verde prima di usarla.',
  videoMusicDownloadingNow:'Caricamento musica in corso...',
  videoMusicSelectedSource:'Sorgente selezionata',
  videoMusicSelectedWeb:'Musica Web selezionata'
});
Object.assign(I18N.en, {
  videoOptionsTitle:'Generate video',
  videoCancelled:'Video generation cancelled.',
  videoMusicLabel:'Music',
  videoMusicNone:'No music',
  videoMusicRandom:'Random',
  videoMusicChooseFile:'Choose external MP3',
  videoMusicSelectedFile:'Selected file',
  videoQualityLabel:'Final quality',
  videoQualityMedium:'Medium — 854×480 — lighter file',
  videoQualityGood:'Good — 960×540',
  videoQualityHigh:'High — 1280×720',
  videoQualityMaximum:'Maximum — 1920×1080',
  videoStartFromRoot:'The video always starts from the main album photo.',
  videoContinue:'Generate',
  videoMusicWarning:'Note: to include music in the video, choosing a local MP3 or an album track is the most reliable option.',
  videoPreviewMusic:'▶ Preview music',
  videoStopPreview:'■ Stop music',
  videoPreviewNoMusic:'Select a music track or choose an MP3 file.',
  videoPreviewError:'Cannot play this music.',
  videoAudioSkipped:'Music not included: unsupported format or browser could not load it.',
  videoWebMusicTitle:'Free Web music',
  videoWebMusicIdle:'Not downloaded',
  videoWebMusicDownloading:'Loading',
  videoWebMusicReady:'Ready',
  videoWebMusicError:'Loading error',
  videoWebMusicDownload:'Load',
  videoWebMusicRetry:'Retry',
  videoWebMusicUse:'Use',
  videoMusicNotReady:'Wait until the selected music becomes green before using it.',
  videoMusicDownloadingNow:'Music loading in progress...',
  videoMusicSelectedSource:'Selected source',
  videoMusicSelectedWeb:'Selected Web music'
});


// Extra UI languages. Missing rare/technical keys intentionally fall back to English.
I18N.fr = Object.assign({}, I18N.en, {
  newProject:'Nouvel album', openProject:'Ouvrir album', importFotoPin:'Importer FotoPin', saveProject:'Enregistrer album',
  exportEmbedPublic:'Exporter Web public', exportEmbedProtected:'Exporter Web protégé', exportEmbedPublicExported:'Viewer Web public exporté', exportEmbedProtectedExported:'Viewer Web protégé exporté',
  project:'Album', albumName:'Nom de l’album', musicMp3:'Musique MP3', photos:'Photos', selectedPhoto:'Photo sélectionnée', photoTitle:'Titre de la photo', photoDescription:'Description de la photo', pointsNotes:'Points / Notes',
  startPresentation:'Présentation', pausePresentation:'Pause présentation', music:'Musique', pauseMusic:'Pause musique', home:'Accueil', deletePhoto:'Supprimer photo',
  noPhoto:'Ajoutez une ou plusieurs photos pour commencer.', editorHint:'En mode édition, cliquez sur la photo pour ajouter un point. Enregistrez souvent l’album pour ne pas perdre le travail.', noSpots:'Aucun point note sur cette photo.', notePlaceholder:'Écrivez la note ici...',
  delete:'Supprimer', point:'Point', unsaved:'Vous avez des modifications non enregistrées. Pensez à enregistrer l’album.', confirmNew:'Créer un nouvel album ? Les modifications non enregistrées seront perdues.', confirmDeletePhoto:'Supprimer cette photo ?', confirmDeleteMusic:'Supprimer cette musique du projet ?', projectSaved:'Album enregistré',
  loadError:'Impossible d’ouvrir l’album. Utilisez un ZIP exporté par FotoPin.', fotoPinImportError:'Impossible d’importer cet export FotoPin. Utilisez le ZIP créé par l’export d’album individuel dans l’app Android.', fotoPinImported:'Album FotoPin importé',
  choosePhoto:'Sélectionnez une photo.', musicLoaded:'Musiques chargées :', noMusic:'Aucune musique chargée', albumDefault:'Album FotoPin', compressing:'Compression des images en qualité moyenne...', rightClickBack:'Clic droit : photo précédente. Clic : photo suivante.', exportedName:'projet_fotopin',
  slideSeconds:'Secondes par diapo', showCaption:'Afficher le titre', yes:'Oui', no:'Non', qualityMedium:'Compression image : qualité moyenne', moveUp:'Monter', moveDown:'Descendre', musicFolder:'La musique sera enregistrée dans le ZIP, dossier music/.', playThis:'Utiliser', selectedMusic:'Musique sélectionnée',
  noViewerPhotos:'Ajoutez des photos avant d’exporter le viewer.', viewerExported:'Viewer exporté', projectFormat:'Format d’album FotoPin compatible.', keyboardHelp:'Raccourcis : Espace pause/reprise, flèches suivant/précédent, Échap accueil.', choosePointKind:'Que voulez-vous insérer ?',
  selectLinkedPhoto:'Choisissez la photo à relier au point.', notePoint:'Note', photoPoint:'Photo', linkedPhoto:'Photo liée', movePointHint:'Pour déplacer : clic droit sur le point, choisissez Déplacer, glissez et relâchez.', editMode:'Éditer', navigateMode:'Naviguer', changeMusic:'Changer musique',
  webPassword:'Mot de passe pour l’export Web protégé :', webPasswordRepeat:'Répéter le mot de passe :', webPasswordMismatch:'Les mots de passe ne correspondent pas.', webPasswordRequired:'Mot de passe obligatoire.', protectedViewerExported:'Viewer Web protégé exporté',
  unlockAlbum:'Déverrouiller album', lockedAlbum:'Album verrouillé : saisissez le mot de passe pour modifier.', unlockedAlbum:'Album déverrouillé.', noLockAlbum:'Album non verrouillé.', unlockPassword:'Entrez le mot de passe/code de déverrouillage :', unlockOk:'Album déverrouillé.', unlockFail:'Mot de passe invalide.',
  latitude:'Latitude GPS', longitude:'Longitude GPS', lockedSaveBlocked:'Album verrouillé : déverrouillez-le avant d’enregistrer.', openMaps:'Ouvrir dans Google Maps', addressSearch:'Adresse / lieu', searchMaps:'Chercher dans Google Maps', missingGps:'Entrez latitude et longitude.', missingAddress:'Entrez une adresse ou un lieu à chercher.',
  saveNote:'Enregistrer', close:'Fermer', miniGuide:'Mini guide', fullGuide:'Guide complet', settingsButton:'Paramètres', settingsTitle:'Paramètres', authorLabel:'Auteur : Smsteves', buyCoffee:'OFFREZ-MOI UN CAFÉ', saveSettings:'Enregistrer paramètres', cancel:'Annuler', languageLabel:'Langue',
  compressionInfo:'Compression image : qualité moyenne', webQualityTitle:'Qualité export Web protégé', webQualityHelp:'Choisissez la qualité des photos pour le viewer protégé. Plus bas = fichier plus léger.', continueExport:'Continuer', webQualityValue:'Qualité', passwordButton:'Mot de passe', showPassword:'Afficher mot de passe',
  albumPasswordTitle:'Mot de passe album', albumPasswordMessage:'Conservez ce mot de passe/code. Il sert à déverrouiller l’album sur Web et Android.', passwordUnavailable:'Mot de passe non disponible dans ce navigateur. Si l’album est verrouillé, déverrouillez-le d’abord avec le bon code.', copyPassword:'Copier mot de passe', passwordCopied:'Mot de passe copié.',
  albumImageQuality:'Qualité images album', albumImageQualityHelp:'Utilisée quand vous ajoutez de nouvelles photos. Les photos existantes ne sont pas modifiées.', albumImageQualityValue:'Qualité album', exportTargetTitle:'Type d’export Web protégé', exportTargetHelp:'Choisissez le viewer protégé le mieux adapté à l’appareil.', exportTargetAndroid:'Android / PC', exportTargetIos:'iOS léger', exportTargetIosHelp:'Recommandé pour iPhone/iPad : déchiffre une photo à la fois et utilise des images plus légères.',
  exportClearPhotos:'Exporter photos en clair', reimportClearPhotos:'Réimporter photos', generateVideo:'Générer vidéo MP4', videoNoSupport:'Ce navigateur ne prend pas en charge l’enregistrement vidéo direct. Essayez Chrome, Edge ou Safari à jour.', videoGenerating:'Génération vidéo...', videoPreparing:'Préparation vidéo...', videoReady:'Vidéo créée', videoFallbackWebm:'MP4 non pris en charge par ce navigateur : un fichier WebM a été généré.', videoAudioWebm:'Pour garder l’audio compatible, WebM a été généré : ce navigateur ne fournit pas MP4/AAC direct.', videoError:'Impossible de générer la vidéo.',
  clearPhotosExported:'Photos en clair exportées', clearPhotosImportDone:'Photos réimportées :', clearPhotosImportError:'Impossible de réimporter les photos. Utilisez le ZIP créé avec Exporter photos en clair.', clearPhotosLocked:'Album verrouillé : déverrouillez-le avant d’exporter ou réimporter des photos.', clearPhotosImportPartial:'Réimportation terminée. Photos mises à jour :', clearPhotosImportMissing:'Photos manquantes dans le ZIP laissées inchangées :', clearPhotosImportUnmatched:'Fichiers non reconnus ignorés :',
  selectExistingPhotoForPoint:'Choisissez une photo existante dans la liste. Elle sera affichée en aperçu, puis confirmez pour créer le point.', confirmLinkedPhoto:'OK', cancelLinkedPhoto:'Annuler', selectedLinkedPhotoPreview:'Photo liée sélectionnée :', cannotLinkSamePhoto:'Choisissez une photo différente de celle de départ.', verifyPath:'Vérifier parcours', pathOk:'Parcours OK : aucune photo répétée au-delà de la limite.', pathProblems:'Attention : photos appelées plusieurs fois ou liens invalides. Surlignées en orange :',
  hiddenPathToolsTitle:'Fonctions cachées', hiddenPathToolsHint:'Cette fenêtre apparaît seulement avec trois clics droits sur le titre FotoPin.', photoListActionsTitle:'Actions photo', photoShowInfo:'Détails photo', exportSinglePhoto:'Exporter photo', importSinglePhoto:'Importer photo', singlePhotoLocked:'Album verrouillé : déverrouillez-le avant d’exporter ou importer une photo.', singlePhotoExported:'Photo exportée', singlePhotoImported:'Photo importée', singlePhotoImportError:'Impossible d’importer la photo. Utilisez un fichier image.', singlePhotoImportConfirm:'Importer cette photo à la place de celle sélectionnée ?',
  exportPathPoints:'Exporter parcours/points', importPathPoints:'Importer parcours/points', pathPointsExported:'Parcours et points exportés', pathPointsImportLocked:'Album verrouillé : déverrouillez-le avant d’importer parcours et points.', pathPointsImportProtected:'Importer parcours/points est disponible seulement sur un album non protégé.', pathPointsImportInvalid:'Fichier parcours/points invalide.', pathPointsImportNoMatches:'Aucune photo correspondante trouvée dans le nouvel album.', pathPointsImportConfirm:'Importer parcours et points ? Les points/notes/textes existants sur les photos associées seront remplacés.', pathPointsImported:'Parcours et points importés', pathPointsMatched:'Photos associées', pathPointsCopied:'Points copiés', pathPointsSkipped:'Points photo ignorés car la photo liée est introuvable', pathPointsRootHint:'Note : l’image principale reste toujours la première photo du nouvel album.',
  saveDownloadHint:'Vérifiez le dossier Téléchargements du navigateur. Si rien n’apparaît, vérifiez si le navigateur a bloqué plusieurs téléchargements automatiques.', saveDirectorySaved:'Album enregistré à l’emplacement choisi.', saveDirectoryUnsupported:'Ce navigateur ne permet pas de choisir directement le dossier : téléchargement normal utilisé.', watermarkOption:'Afficher “Fotopin by Sp.” en bas à droite',
  edit:'Modifier', copy:'Copier', cut:'Couper', pasteHere:'Coller le point ici', move:'Déplacer', undo:'Annuler', noUndo:'Aucune opération à annuler', moveMode:'Glissez le point/texte et relâchez-le à la nouvelle position.', pasteAsk:'Vous avez un point copié/coupé. Le coller ici ?', pointMenuHint:'Clic sur un point : menu modifier/copier/couper/supprimer/déplacer/annuler.', pointMoved:'Point déplacé', confirmDeletePoint:'Supprimer ce point ?', chooseLinkedPhotoFromList:'Entrez le numéro de la photo à lier :', invalidPhotoNumber:'Numéro de photo invalide.', clipboard:'Presse-papiers', clipboardCut:'Couper', clipboardCopy:'Copier', clipboardCutRestored:'Point restauré à sa position d’origine.', clipboardCleared:'Presse-papiers vidé.', clipboardPasteHint:'Cliquez sur la photo pour coller le point.', listHint:'Cliquez un point pour le mettre en évidence. Cliquez encore pour ouvrir le menu.', photoRef:'Photo',
  freeTextPoint:'Texte libre', freeTextTitle:'Texte libre', freeTextPlaceholder:'Écrivez une ligne de texte...', freeTextColor:'Couleur', freeTextSize:'Taille', freeTextDefault:'Texte', saveFreeText:'Enregistrer texte', titolatorPoint:'Titolateur', titolatorTitle:'Titolateur', titolatorPlaceholder:'Écrivez les titres sur plusieurs lignes...', titolatorDefault:'Générique', saveTitolator:'Enregistrer titolateur', titolatorWidth:'Largeur du cadre (%)', titolatorHeight:'Hauteur du cadre (%)', titolatorSpeed:'Vitesse (1 = normal, moins = plus lent)', titolatorMode:'Orientation', titolatorModeVertical:'Vertical', titolatorModeHorizontal:'Horizontal', titolatorDirection:'Sens horizontal', titolatorDirRightLeft:'Droite → Gauche', titolatorDirLeftRight:'Gauche → Droite', titolatorContinuous:'Continu jusqu’à la fin', titolatorStopMarker:'stop',
  verifyPathTitle:'Vérifier parcours', allowedRepeats:'Répétitions autorisées', runCheck:'Exécuter', cinematicOff:'▶️ Normal', cinematicOn:'🎬 Cinéma', cinematicLabel:'Mode parcours',
  videoOptionsTitle:'Générer vidéo', videoCancelled:'Génération vidéo annulée.', videoMusicLabel:'Musique', videoMusicNone:'Aucune musique', videoMusicRandom:'Aléatoire', videoMusicChooseFile:'Choisir MP3 externe', videoMusicSelectedFile:'Fichier choisi', videoQualityLabel:'Qualité finale', videoQualityMedium:'Moyenne — 854×480 — fichier léger', videoQualityGood:'Bonne — 960×540', videoQualityHigh:'Haute — 1280×720', videoQualityMaximum:'Maximum — 1920×1080', videoStartFromRoot:'La vidéo part toujours de la photo principale de l’album.', videoContinue:'Générer', videoMusicWarning:'Note : pour inclure la musique dans la vidéo, le choix d’un MP3 local ou d’une piste de l’album est l’option la plus fiable.', videoPreviewMusic:'▶ Aperçu musique', videoStopPreview:'■ Arrêter musique', videoPreviewNoMusic:'Sélectionnez une piste musicale ou un fichier MP3.', videoPreviewError:'Impossible de lire cette musique.', videoAudioSkipped:'Musique non incluse : format non pris en charge ou navigateur incapable de la charger.', videoWebMusicTitle:'Musique Web gratuite', videoWebMusicIdle:'Non téléchargée', videoWebMusicDownloading:'Chargement', videoWebMusicReady:'Prête', videoWebMusicError:'Erreur chargement', videoWebMusicDownload:'Charger', videoWebMusicRetry:'Réessayer', videoWebMusicUse:'Utiliser', videoMusicNotReady:'Attendez que la musique sélectionnée devienne verte avant de l’utiliser.', videoMusicDownloadingNow:'Chargement de la musique en cours...', videoMusicSelectedSource:'Source sélectionnée', videoMusicSelectedWeb:'Musique Web sélectionnée'
});

I18N.de = Object.assign({}, I18N.en, {
  newProject:'Neues Album', openProject:'Album öffnen', importFotoPin:'FotoPin importieren', saveProject:'Album speichern', exportEmbedPublic:'Öffentlichen Web-Embed exportieren', exportEmbedProtected:'Geschützten Web-Embed exportieren', exportEmbedPublicExported:'Öffentlicher Embed-Viewer exportiert', exportEmbedProtectedExported:'Geschützter Embed-Viewer exportiert',
  project:'Album', albumName:'Albumname', musicMp3:'MP3-Musik', photos:'Fotos', selectedPhoto:'Ausgewähltes Foto', photoTitle:'Fototitel', photoDescription:'Fotobeschreibung', pointsNotes:'Punkte / Notizen', startPresentation:'Präsentation', pausePresentation:'Präsentation pausieren', music:'Musik', pauseMusic:'Musik pausieren', home:'Start', deletePhoto:'Foto löschen', noPhoto:'Fügen Sie ein oder mehrere Fotos hinzu, um zu beginnen.', editorHint:'Im Bearbeiten-Modus auf das Foto klicken, um einen Punkt hinzuzufügen. Speichern Sie das Album regelmäßig.', noSpots:'Keine Notizpunkte auf diesem Foto.', notePlaceholder:'Notiz hier schreiben...',
  delete:'Löschen', point:'Punkt', unsaved:'Es gibt ungespeicherte Änderungen. Denken Sie daran, das Album zu speichern.', confirmNew:'Neues Album erstellen? Ungespeicherte Änderungen gehen verloren.', confirmDeletePhoto:'Dieses Foto löschen?', confirmDeleteMusic:'Diese Musik aus dem Projekt löschen?', projectSaved:'Album gespeichert', loadError:'Album kann nicht geöffnet werden. Verwenden Sie ein von FotoPin exportiertes ZIP.', fotoPinImportError:'Dieser FotoPin-Export kann nicht importiert werden. Verwenden Sie das ZIP aus dem Einzelalbum-Export der Android-App.', fotoPinImported:'FotoPin-Album importiert',
  choosePhoto:'Foto auswählen.', musicLoaded:'Geladene Musik:', noMusic:'Keine Musik geladen', albumDefault:'FotoPin Album', compressing:'Bilder werden in mittlerer Qualität komprimiert...', rightClickBack:'Rechtsklick: vorheriges Foto. Klick: nächstes Foto.', exportedName:'fotopin_projekt', slideSeconds:'Sekunden pro Folie', showCaption:'Titel anzeigen', yes:'Ja', no:'Nein', qualityMedium:'Bildkomprimierung: mittlere Qualität', moveUp:'Nach oben', moveDown:'Nach unten', musicFolder:'Musik wird im ZIP im Ordner music/ gespeichert.', playThis:'Verwenden', selectedMusic:'Ausgewählte Musik',
  noViewerPhotos:'Fügen Sie Fotos hinzu, bevor Sie den Viewer exportieren.', viewerExported:'Viewer exportiert', projectFormat:'Kompatibles FotoPin-Albumformat.', keyboardHelp:'Tastenkürzel: Leertaste Pause/Fortsetzen, Pfeile vor/zurück, Esc Start.', choosePointKind:'Was möchten Sie einfügen?', selectLinkedPhoto:'Wählen Sie das Foto, das mit dem Punkt verknüpft werden soll.', notePoint:'Notiz', photoPoint:'Foto', linkedPhoto:'Verknüpftes Foto', movePointHint:'Zum Verschieben: Rechtsklick auf den Punkt, Verschieben wählen, ziehen und loslassen.', editMode:'Bearbeiten', navigateMode:'Navigieren', changeMusic:'Musik wechseln',
  webPassword:'Passwort für geschützten Web-Export:', webPasswordRepeat:'Passwort wiederholen:', webPasswordMismatch:'Passwörter stimmen nicht überein.', webPasswordRequired:'Passwort erforderlich.', protectedViewerExported:'Geschützter Web-Viewer exportiert', unlockAlbum:'Album entsperren', lockedAlbum:'Album gesperrt: Passwort eingeben, um zu bearbeiten.', unlockedAlbum:'Album entsperrt.', noLockAlbum:'Album nicht gesperrt.', unlockPassword:'Entsperrpasswort/-code eingeben:', unlockOk:'Album entsperrt.', unlockFail:'Ungültiges Passwort.',
  latitude:'GPS-Breite', longitude:'GPS-Länge', lockedSaveBlocked:'Album gesperrt: vor dem Speichern entsperren.', openMaps:'In Google Maps öffnen', addressSearch:'Adresse / Ort', searchMaps:'In Google Maps suchen', missingGps:'Breite und Länge eingeben.', missingAddress:'Adresse oder Ort für die Suche eingeben.', saveNote:'Speichern', close:'Schließen', miniGuide:'Mini-Anleitung', fullGuide:'Vollständige Anleitung', settingsButton:'Einstellungen', settingsTitle:'Einstellungen', authorLabel:'Autor: Smsteves', buyCoffee:'KAUF MIR EINEN KAFFEE', saveSettings:'Einstellungen speichern', cancel:'Abbrechen', languageLabel:'Sprache',
  compressionInfo:'Bildkomprimierung: mittlere Qualität', webQualityTitle:'Qualität geschützter Web-Export', webQualityHelp:'Wählen Sie die Fotoqualität für den geschützten Viewer. Niedriger = kleinere Datei.', continueExport:'Weiter', webQualityValue:'Qualität', passwordButton:'Passwort', showPassword:'Passwort anzeigen', albumPasswordTitle:'Album-Passwort', albumPasswordMessage:'Bewahren Sie dieses Passwort/diesen Code auf. Es wird zum Entsperren des Albums auf Web und Android benötigt.', passwordUnavailable:'Passwort in diesem Browser nicht verfügbar. Wenn das Album gesperrt ist, zuerst mit dem richtigen Code entsperren.', copyPassword:'Passwort kopieren', passwordCopied:'Passwort kopiert.',
  albumImageQuality:'Album-Bildqualität', albumImageQualityHelp:'Wird verwendet, wenn neue Fotos hinzugefügt werden. Vorhandene Fotos werden nicht geändert.', albumImageQualityValue:'Albumqualität', exportTargetTitle:'Typ geschützter Web-Export', exportTargetHelp:'Wählen Sie den am besten geeigneten geschützten Viewer.', exportTargetAndroid:'Android / PC', exportTargetIos:'Leichtes iOS', exportTargetIosHelp:'Empfohlen für iPhone/iPad: entschlüsselt jeweils ein Foto und nutzt leichtere Bilder.', exportClearPhotos:'Klare Fotos exportieren', reimportClearPhotos:'Fotos reimportieren', generateVideo:'MP4-Video erzeugen', videoNoSupport:'Dieser Browser unterstützt keine direkte Videoaufnahme. Versuchen Sie aktuelles Chrome, Edge oder Safari.', videoGenerating:'Video wird erzeugt...', videoPreparing:'Video wird vorbereitet...', videoReady:'Video erstellt', videoFallbackWebm:'MP4 wird von diesem Browser nicht unterstützt: WebM-Datei erzeugt.', videoAudioWebm:'Für kompatibles Audio wurde WebM erzeugt: Dieser Browser bietet kein direktes MP4/AAC.', videoError:'Video kann nicht erzeugt werden.',
  clearPhotosExported:'Klare Fotos exportiert', clearPhotosImportDone:'Fotos reimportiert:', clearPhotosImportError:'Fotos können nicht reimportiert werden. Verwenden Sie das ZIP von Klare Fotos exportieren.', clearPhotosLocked:'Album gesperrt: vor Export/Reimport der Fotos entsperren.', clearPhotosImportPartial:'Reimport abgeschlossen. Fotos aktualisiert:', clearPhotosImportMissing:'Im ZIP fehlende Fotos unverändert gelassen:', clearPhotosImportUnmatched:'Nicht erkannte Dateien ignoriert:', selectExistingPhotoForPoint:'Wählen Sie ein vorhandenes Foto aus der Liste. Es wird als Vorschau angezeigt, dann bestätigen, um den Punkt zu erstellen.', confirmLinkedPhoto:'OK', cancelLinkedPhoto:'Abbrechen', selectedLinkedPhotoPreview:'Verknüpftes Foto ausgewählt:', cannotLinkSamePhoto:'Wählen Sie ein anderes Foto als das Ausgangsfoto.', verifyPath:'Pfad prüfen', pathOk:'Pfad OK: kein Foto über dem Limit wiederholt.', pathProblems:'Warnung: Fotos mehrfach aufgerufen oder ungültige Links. Orange markiert:',
  hiddenPathToolsTitle:'Versteckte Funktionen', hiddenPathToolsHint:'Dieses Fenster erscheint nur per dreifachem Rechtsklick auf den FotoPin-Titel.', photoListActionsTitle:'Foto-Aktionen', photoShowInfo:'Fotodetails', exportSinglePhoto:'Foto exportieren', importSinglePhoto:'Foto importieren', singlePhotoLocked:'Album gesperrt: vor Export oder Import eines Fotos entsperren.', singlePhotoExported:'Foto exportiert', singlePhotoImported:'Foto importiert', singlePhotoImportError:'Foto kann nicht importiert werden. Verwenden Sie eine Bilddatei.', singlePhotoImportConfirm:'Dieses Foto anstelle des ausgewählten importieren?',
  exportPathPoints:'Pfad/Punkte exportieren', importPathPoints:'Pfad/Punkte importieren', pathPointsExported:'Pfad und Punkte exportiert', pathPointsImportLocked:'Album gesperrt: vor Import von Pfad und Punkten entsperren.', pathPointsImportProtected:'Pfad/Punkte importieren ist nur bei einem ungeschützten Album verfügbar.', pathPointsImportInvalid:'Ungültige Pfad/Punkte-Datei.', pathPointsImportNoMatches:'Keine passenden Fotos im neuen Album gefunden.', pathPointsImportConfirm:'Pfad und Punkte importieren? Vorhandene Punkte/Notizen/Texte auf passenden Fotos werden ersetzt.', pathPointsImported:'Pfad und Punkte importiert', pathPointsMatched:'Passende Fotos', pathPointsCopied:'Kopierte Punkte', pathPointsSkipped:'Fotopunkte übersprungen, weil das verknüpfte Foto nicht gefunden wurde', pathPointsRootHint:'Hinweis: Das Hauptbild bleibt immer das erste Foto des neuen Albums.',
  saveDownloadHint:'Prüfen Sie den Download-Ordner des Browsers. Wenn nichts erscheint, prüfen Sie, ob mehrere automatische Downloads blockiert wurden.', saveDirectorySaved:'Album am ausgewählten Ort gespeichert.', saveDirectoryUnsupported:'Dieser Browser erlaubt keine direkte Ordnerauswahl: normaler Download wird verwendet.', watermarkOption:'„Fotopin by Sp.“ unten rechts anzeigen',
  edit:'Bearbeiten', copy:'Kopieren', cut:'Ausschneiden', pasteHere:'Punkt hier einfügen', move:'Verschieben', undo:'Rückgängig', noUndo:'Nichts rückgängig zu machen', moveMode:'Punkt/Text ziehen und an der neuen Position loslassen.', pasteAsk:'Es gibt einen kopierten/ausgeschnittenen Punkt. Hier einfügen?', pointMenuHint:'Klick auf Punkt: Menü Bearbeiten/Kopieren/Ausschneiden/Löschen/Verschieben/Rückgängig.', pointMoved:'Punkt verschoben', confirmDeletePoint:'Diesen Punkt löschen?', chooseLinkedPhotoFromList:'Nummer des zu verknüpfenden Fotos eingeben:', invalidPhotoNumber:'Ungültige Fotonummer.', clipboard:'Zwischenablage', clipboardCut:'Ausschneiden', clipboardCopy:'Kopieren', clipboardCutRestored:'Punkt an ursprünglicher Position wiederhergestellt.', clipboardCleared:'Zwischenablage geleert.', clipboardPasteHint:'Klicken Sie auf das Foto, um den Punkt einzufügen.', listHint:'Klicken Sie einen Punkt an, um ihn hervorzuheben. Nochmals klicken, um das Menü zu öffnen.', photoRef:'Foto',
  freeTextPoint:'Freier Text', freeTextTitle:'Freier Text', freeTextPlaceholder:'Eine Textzeile schreiben...', freeTextColor:'Farbe', freeTextSize:'Größe', freeTextDefault:'Text', saveFreeText:'Text speichern', titolatorPoint:'Titolator', titolatorTitle:'Titolator', titolatorPlaceholder:'Titel über mehrere Zeilen schreiben...', titolatorDefault:'Abspann', saveTitolator:'Titolator speichern', titolatorWidth:'Rahmenbreite (%)', titolatorHeight:'Rahmenhöhe (%)', titolatorSpeed:'Geschwindigkeit (1 = normal, weniger = langsamer)', titolatorMode:'Ausrichtung', titolatorModeVertical:'Vertikal', titolatorModeHorizontal:'Horizontal', titolatorDirection:'Horizontale Richtung', titolatorDirRightLeft:'Rechts → Links', titolatorDirLeftRight:'Links → Rechts', titolatorContinuous:'Kontinuierlich bis zum Ende', titolatorStopMarker:'stop',
  verifyPathTitle:'Pfad prüfen', allowedRepeats:'Erlaubte Wiederholungen', runCheck:'Ausführen', cinematicOff:'▶️ Normal', cinematicOn:'🎬 Kino', cinematicLabel:'Pfadmodus',
  videoOptionsTitle:'Video erzeugen', videoCancelled:'Videoerzeugung abgebrochen.', videoMusicLabel:'Musik', videoMusicNone:'Keine Musik', videoMusicRandom:'Zufällig', videoMusicChooseFile:'Externe MP3 wählen', videoMusicSelectedFile:'Ausgewählte Datei', videoQualityLabel:'Endqualität', videoQualityMedium:'Mittel — 854×480 — kleine Datei', videoQualityGood:'Gut — 960×540', videoQualityHigh:'Hoch — 1280×720', videoQualityMaximum:'Maximum — 1920×1080', videoStartFromRoot:'Das Video startet immer vom Hauptfoto des Albums.', videoContinue:'Erzeugen', videoMusicWarning:'Hinweis: Um Musik ins Video einzufügen, ist eine lokale MP3 oder eine Albumspur am zuverlässigsten.', videoPreviewMusic:'▶ Musikvorschau', videoStopPreview:'■ Musik stoppen', videoPreviewNoMusic:'Wählen Sie eine Musikspur oder MP3-Datei.', videoPreviewError:'Diese Musik kann nicht abgespielt werden.', videoAudioSkipped:'Musik nicht enthalten: nicht unterstütztes Format oder Browser konnte sie nicht laden.', videoWebMusicTitle:'Kostenlose Web-Musik', videoWebMusicIdle:'Nicht heruntergeladen', videoWebMusicDownloading:'Laden', videoWebMusicReady:'Bereit', videoWebMusicError:'Ladefehler', videoWebMusicDownload:'Laden', videoWebMusicRetry:'Erneut versuchen', videoWebMusicUse:'Verwenden', videoMusicNotReady:'Warten Sie, bis die ausgewählte Musik grün wird.', videoMusicDownloadingNow:'Musik wird geladen...', videoMusicSelectedSource:'Ausgewählte Quelle', videoMusicSelectedWeb:'Ausgewählte Web-Musik'
});


// Translation audit fixes v2.63: complete remaining dialogs/labels and guide fallbacks.
Object.assign(I18N.it, {
  photoListActionsTitle:'Azioni foto', photoShowInfo:'Dettagli foto', exportSinglePhoto:'Esporta foto', importSinglePhoto:'Importa foto',
  singlePhotoLocked:'Album bloccato: sbloccalo prima di esportare o importare una foto.', singlePhotoExported:'Foto esportata', singlePhotoImported:'Foto importata',
  singlePhotoImportError:'Impossibile importare la foto. Usa un file immagine.', singlePhotoImportConfirm:'Importare questa foto al posto di quella selezionata?',
  exportEmbedError:'Errore export embed', exportEmbedProtectedError:'Errore export embed protetto',
  hiddenPathToolsHint:'Questa finestra appare solo con triplo click destro sul titolo FotoPin.'
});
Object.assign(I18N.en, {
  exportEmbedError:'Embed export error', exportEmbedProtectedError:'Protected embed export error',
  hiddenPathToolsHint:'This dialog appears only with a triple right-click on the FotoPin title.'
});
Object.assign(I18N.fr, {
  project:'Projet', photos:'Photos', notePoint:'Note', photoPoint:'Photo', miniGuide:'Mini-guide', exportTargetAndroid:'Android / PC', confirmLinkedPhoto:'OK', photoRef:'Photo',
  titolatorMode:'Orientation', titolatorModeVertical:'Vertical', titolatorModeHorizontal:'Horizontal', titolatorStopMarker:'stop', cinematicOff:'▶️ Normal', videoQualityMaximum:'Maximum — 1920×1080',
  titolatorPoint:'Titre défilant', titolatorTitle:'Titre défilant', saveTitolator:'Enregistrer le titre défilant', titolatorDefault:'Générique',
  exportEmbedError:'Erreur export embed', exportEmbedProtectedError:'Erreur export embed protégé'
});
Object.assign(I18N.de, {
  project:'Projekt', albumDefault:'FotoPin Album', exportTargetAndroid:'Android / PC', confirmLinkedPhoto:'OK', freeTextDefault:'Text', titolatorModeHorizontal:'Horizontal', titolatorStopMarker:'stop', cinematicOff:'▶️ Normal', videoQualityMaximum:'Maximum — 1920×1080',
  titolatorPoint:'Laufschrift', titolatorTitle:'Laufschrift', saveTitolator:'Laufschrift speichern', titolatorDefault:'Abspann',
  exportEmbedError:'Embed-Exportfehler', exportEmbedProtectedError:'Fehler beim geschützten Embed-Export'
});


// v2.68: single Export dialog labels.
Object.assign(I18N.it, {
  exportMenu:'Esporta',
  exportMenuTitle:'Esporta',
  exportMenuHelp:'Scegli cosa vuoi esportare o generare.',
  exportVideoOption:'Genera video MP4'
});
Object.assign(I18N.en, {
  exportMenu:'Export',
  exportMenuTitle:'Export',
  exportMenuHelp:'Choose what you want to export or generate.',
  exportVideoOption:'Generate MP4 video'
});
Object.assign(I18N.fr, {
  exportMenu:'Exporter',
  exportMenuTitle:'Exporter',
  exportMenuHelp:'Choisissez ce que vous voulez exporter ou générer.',
  exportVideoOption:'Générer vidéo MP4'
});
Object.assign(I18N.de, {
  exportMenu:'Exportieren',
  exportMenuTitle:'Exportieren',
  exportMenuHelp:'Wählen Sie, was exportiert oder erzeugt werden soll.',
  exportVideoOption:'MP4-Video erzeugen'
});

const $ = (id) => document.getElementById(id);
const DEFAULT_WEB_MUSIC_URLS = [
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Investigations.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Comfortable%20Mystery.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Dreaming.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Healing.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Serenity.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Equatorial%20Complex.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Floating%20Cities.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Peaceful%20Desolation.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Slow%20Burn.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hidden%20Agenda.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Impact%20Moderato.mp3',
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/That%20Zen%20Moment.mp3'
];
const state = {
  language:'en', albumName:'', photos:[], currentIndex:-1, musicTracks:[], activeMusicIndex:0,
  settings:{ slideSeconds:3.75, showCaption:true, imageQuality:'medium', albumImageQuality:75, allowedPathRepeats:0 },
  dirty:false, slideIndex:0, slideshowRunning:false, musicPlaying:false, slideTimer:null, slideFadeTimer:null, slideBranch:null, spotClipboard:null, moveSpot:null, undoStack:[], selectedSpot:null, interactionMode:'navigate', webMusic:null, webMusicIndex:0, webMusicStatus:'loading', sourceFileName:'', albumMeta:{id:null,createdAt:null,signature:null,isReadOnly:false,latitude:null,longitude:null,address:''}, albumLocked:false, albumRecoveryCode:'', pendingPhotoLink:null, photoHistory:[], pathWarningIds:new Set(), pathProblemDetails:new Map(), presentationPath:[], presentationPathPos:0, slideNoteMode:false, slideCrawlId:null, slideContinuousCrawl:null, cinematicMode:false, editPhotoMetaVisible:false, singlePhotoImportIndex:-1
};
const videoWebMusicCache = Object.create(null);

function t(key){ return (I18N[state.language] && I18N[state.language][key]) || I18N.en[key] || I18N.it[key] || key; }
function uid(){ return Math.random().toString(36).slice(2) + Date.now().toString(36); }
function safeName(name){ return (name || 'file').replace(/[\\/:*?"<>|]+/g,'_').replace(/\s+/g,'_'); }
function extFromType(type, fallback){ if(type==='image/png') return 'png'; if(type==='image/webp') return 'webp'; if(type==='audio/mpeg') return 'mp3'; if(type==='audio/wav') return 'wav'; if(type==='audio/ogg') return 'ogg'; return fallback || 'bin'; }
function setDirty(v=true){ state.dirty=v; }
function activeMusic(){ return state.musicTracks[state.activeMusicIndex] || state.webMusic || null; }
function validLanguage(value){ return ['en','it','fr','de'].includes(String(value || '').toLowerCase()) ? String(value).toLowerCase() : 'en'; }
function savePreferredLanguage(lang){ try{ const v=validLanguage(lang); localStorage.setItem('fotopin_language', v); localStorage.setItem('photopin_language', v); }catch(e){} }
function loadPreferredLanguage(){ try{ return validLanguage(localStorage.getItem('fotopin_language') || localStorage.getItem('photopin_language') || 'en'); }catch(e){ return 'en'; } }
function countSpotKinds(photo){
  const spots = photo && photo.spots ? photo.spots : [];
  let photos = 0, notes = 0, texts = 0;
  spots.forEach(s => {
    if(!s) return;
    if(isPhotoSpot(s)) photos++;
    else if(isTextSpot(s) || isCrawlSpot(s)) texts++;
    else if(isNoteSpot(s)) notes++;
  });
  return {photos, notes, texts};
}
function spotCountText(photo){
  const c = countSpotKinds(photo);
  const dicts={
    en:{noPins:'No pins', photo:['Photo','Photos'], note:['Note','Notes'], text:['Text','Texts']},
    it:{noPins:'Nessun punto', photo:['Foto','Foto'], note:['Nota','Note'], text:['Testo','Testi']},
    fr:{noPins:'Aucun point', photo:['Photo','Photos'], note:['Note','Notes'], text:['Texte','Textes']},
    de:{noPins:'Keine Punkte', photo:['Foto','Fotos'], note:['Notiz','Notizen'], text:['Text','Texte']}
  };
  const d=dicts[state.language] || dicts.en;
  if(c.photos === 0 && c.notes === 0 && c.texts === 0) return d.noPins;
  const parts = [];
  if(c.photos > 0) parts.push(`🔵 ${c.photos} ${c.photos === 1 ? d.photo[0] : d.photo[1]}`);
  if(c.notes > 0) parts.push(`🟡 ${c.notes} ${c.notes === 1 ? d.note[0] : d.note[1]}`);
  if(c.texts > 0) parts.push(`✏️ ${c.texts} ${c.texts === 1 ? d.text[0] : d.text[1]}`);
  return parts.join('  ');
}
function photoIncomingLinkIds(){
  const ids = new Set();
  state.photos.forEach(photo => {
    (photo.spots || []).forEach(s => {
      if(s && (s.type === 'photo' || s.targetPhotoId) && s.targetPhotoId){
        ids.add(s.targetPhotoId);
      }
    });
  });
  return ids;
}
function photoReachableIdsFromStart(photos=state.photos, startIndex=0){
  const list = Array.isArray(photos) ? photos : [];
  const ids = new Set();
  if(!list.length) return ids;
  const start = Math.max(0, Math.min(list.length - 1, Number.isFinite(Number(startIndex)) ? Math.round(Number(startIndex)) : 0));
  function visit(idx){
    const photo = list[idx];
    if(!photo || !photo.id || ids.has(photo.id)) return;
    ids.add(photo.id);
    (photo.spots || []).forEach(s => {
      if(!s || !(s.type === 'photo' || s.targetPhotoId) || !s.targetPhotoId) return;
      const childIndex = list.findIndex(p => p && p.id === s.targetPhotoId);
      if(childIndex >= 0) visit(childIndex);
    });
  }
  visit(start);
  return ids;
}
function isUnlinkedPhoto(photo, index, incomingIds, reachableIds){
  if(!photo || !photo.id) return false;
  // La prima foto dell'album è il punto di partenza: non deve risultare "Non Collegata".
  if(index === 0) return false;
  // Una foto è utile al percorso solo se è raggiungibile dalla foto iniziale seguendo i punti foto.
  // Se non è mai richiamata da nessun punto, oppure è richiamata solo da una zona non raggiungibile, resta "Non Collegata".
  if(reachableIds && !reachableIds.has(photo.id)) return true;
  return !incomingIds.has(photo.id);
}
function unlinkedPhotoText(){
  return ({en:'Not linked', it:'Non Collegata', fr:'Non liée', de:'Nicht verknüpft'}[state.language]) || 'Not linked';
}
function currentPhoto(){ return state.photos[state.currentIndex] || null; }
function clearPhotoHistory(){ state.photoHistory=[]; }
function pushCurrentPhotoToHistory(targetId=null){
  const current=currentPhoto();
  if(!current) return;
  if(targetId && current.id===targetId) return;
  const hist=Array.isArray(state.photoHistory) ? state.photoHistory : [];
  if(hist[hist.length-1]!==current.id){
    hist.push(current.id);
    if(hist.length>100) hist.splice(0, hist.length-100);
  }
  state.photoHistory=hist;
}
function goBackThroughPhotoHistory(){
  const hist=Array.isArray(state.photoHistory) ? state.photoHistory : [];
  while(hist.length){
    const prevId=hist.pop();
    const idx=state.photos.findIndex(p=>p.id===prevId);
    if(idx>=0){
      state.photoHistory=hist;
      state.currentIndex=idx;
      state.selectedSpot=null;
      renderAll();
      return true;
    }
  }
  state.photoHistory=[];
  return false;
}
function isAlbumLocked(){ return !!state.albumLocked; }
function isProtectedAlbum(){ return !!(state.albumMeta && state.albumMeta.signature); }
function canEdit(){ return !isAlbumLocked(); }

const RECOVERY_STORAGE_KEY = 'photopin_web_recovery_codes_v1';
function generateRecoveryCode(){
  const bytes=new Uint8Array(8); crypto.getRandomValues(bytes);
  const parts=[];
  for(let i=0;i<4;i++) parts.push(((bytes[i*2]<<8)|bytes[i*2+1]).toString(16).toUpperCase().padStart(4,'0'));
  return parts.join('-');
}
function loadRecoveryCodeMap(){
  try{ return JSON.parse(localStorage.getItem(RECOVERY_STORAGE_KEY) || '{}') || {}; }catch(e){ return {}; }
}
function saveRecoveryCodeLocal(albumId, code){
  if(!albumId || !code) return;
  const map=loadRecoveryCodeMap(); map[String(albumId)]=code; localStorage.setItem(RECOVERY_STORAGE_KEY, JSON.stringify(map));
}
function getRecoveryCodeLocal(albumId){
  if(!albumId) return '';
  return loadRecoveryCodeMap()[String(albumId)] || '';
}
async function createAlbumSignature(albumId, createdAt, recoveryCode){
  const saltBytes=new Uint8Array(32); crypto.getRandomValues(saltBytes);
  const keyMaterial=await crypto.subtle.importKey('raw', new TextEncoder().encode(String(recoveryCode).trim().toUpperCase()), 'PBKDF2', false, ['deriveBits']);
  const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:saltBytes,iterations:100000,hash:'SHA-256'}, keyMaterial, 256);
  const contentData=strToU8(String(albumId)+'|'+String(createdAt));
  const contentHash=await crypto.subtle.digest('SHA-256', contentData);
  return { albumId, recoveryCodeHash:bytesToBase64(new Uint8Array(bits)), deviceId:'photopin_web', salt:bytesToBase64(saltBytes), createdAt, contentHash:bytesToBase64(new Uint8Array(contentHash)) };
}
async function ensureAlbumPassword(){
  if(state.albumMeta && state.albumMeta.signature && state.albumRecoveryCode) return state.albumRecoveryCode;
  const albumId = state.albumMeta.id || Date.now();
  const createdAt = state.albumMeta.createdAt || Date.now();
  const code = state.albumRecoveryCode || getRecoveryCodeLocal(albumId) || generateRecoveryCode();
  state.albumMeta.id=albumId; state.albumMeta.createdAt=createdAt;
  if(!state.albumMeta.signature) state.albumMeta.signature=await createAlbumSignature(albumId, createdAt, code);
  state.albumMeta.isReadOnly=false;
  state.albumRecoveryCode=code;
  state.albumLocked=false;
  saveRecoveryCodeLocal(albumId, code);
  return code;
}
async function showAlbumPassword(){
  if(isAlbumLocked()) return unlockAlbumFromPassword();
  await ensureAlbumPassword();
  const code=state.albumRecoveryCode || getRecoveryCodeLocal(state.albumMeta.id);
  if(!code) return alert(t('passwordUnavailable'));
  const msg=`${t('albumPasswordTitle')}\n\n${code}\n\n${t('albumPasswordMessage')}`;
  if(confirm(`${msg}\n\n${t('copyPassword')}?`)){
    try{ await navigator.clipboard.writeText(code); alert(t('passwordCopied')); }catch(e){ prompt(t('albumPasswordTitle'), code); }
  }
  updateLockUi();
}
function numOrNull(v){ const n=Number(v); return Number.isFinite(n) ? n : null; }
function openAlbumInMaps(){
  const lat=numOrNull($('albumLatitude').value);
  const lng=numOrNull($('albumLongitude').value);
  if(lat === null || lng === null){ alert(t('missingGps')); return; }
  const label=encodeURIComponent(state.albumName || 'FotoPin');
  window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}(${label})`, '_blank', 'noopener');
}
function searchAddressInMaps(){
  const q=String($('albumAddress').value || '').trim();
  if(!q){ alert(t('missingAddress')); return; }
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`, '_blank', 'noopener');
}
function clampSlideSeconds(v){ const n=Number(v); return Number.isFinite(n) ? Math.min(60, Math.max(1, n)) : 3.75; }
function clampAlbumImageQuality(v){ const n=Number(v); return Number.isFinite(n) ? Math.min(100, Math.max(50, Math.round(n))) : 75; }
function isPhotoSpot(spot){ return !!(spot && (spot.type === 'photo' || spot.targetPhotoId)); }
function isTextSpot(spot){ return !!(spot && spot.type === 'text'); }
function isCrawlSpot(spot){
  const type=String((spot && spot.type) || '').toLowerCase();
  const hasCrawlLayout=!!(spot && (spot.boxWidthPct !== undefined || spot.crawlBoxWidthPct !== undefined || spot.boxHeightPct !== undefined || spot.crawlBoxHeightPct !== undefined || spot.scrollSpeed !== undefined || spot.crawlSpeed !== undefined || spot.crawlMode !== undefined || spot.orientation !== undefined || spot.crawlDirection !== undefined || spot.tickerDirection !== undefined));
  return !!(spot && (hasCrawlLayout || type === 'crawl' || type === 'titolator' || type === 'titolatore' || type === 'titolazione' || type === 'scrolling-titles' || type === 'scrolling_titles' || type === 'credits'));
}
function isNoteSpot(spot){
  const hasCrawlLayout=spot && (spot.boxWidthPct !== undefined || spot.crawlBoxWidthPct !== undefined || spot.boxHeightPct !== undefined || spot.crawlBoxHeightPct !== undefined || spot.scrollSpeed !== undefined || spot.crawlSpeed !== undefined || spot.crawlMode !== undefined || spot.orientation !== undefined || spot.crawlDirection !== undefined || spot.tickerDirection !== undefined);
  return !!(spot && !hasCrawlLayout && !isPhotoSpot(spot) && !isTextSpot(spot) && !isCrawlSpot(spot) && (spot.type === 'note' || String(spot.text || '').trim()));
}
function cleanFreeTextColor(value){ const v=String(value || '').trim(); return /^#[0-9a-f]{6}$/i.test(v) ? v : '#ffffff'; }
function getFreeTextColor(spot){ return cleanFreeTextColor(spot && (spot.color || spot.textColor || spot.freeTextColor || spot.fontColor)); }
function cleanFreeTextSize(value){ const n=Number(value); return Number.isFinite(n) ? Math.max(12, Math.min(96, Math.round(n))) : 28; }
function getFreeTextSize(spot){ return cleanFreeTextSize(spot && (spot.fontSize || spot.size || spot.textSize || spot.freeTextSize)); }
function setFreeTextStyle(spot, color, size){
  if(!spot) return spot;
  const c=cleanFreeTextColor(color);
  const fs=cleanFreeTextSize(size);
  spot.color=c; spot.textColor=c; spot.freeTextColor=c;
  spot.fontSize=fs; spot.size=fs; spot.textSize=fs;
  return spot;
}
function cleanCrawlBoxWidthPct(value){ const n=Number(value); return Number.isFinite(n) ? Math.max(20, Math.min(100, Math.round(n))) : 62; }
function cleanCrawlBoxHeightPct(value){ const n=Number(value); return Number.isFinite(n) ? Math.max(8, Math.min(100, Math.round(n))) : 46; }
function cleanCrawlSpeed(value){ const n=Number(value); return Number.isFinite(n) ? Math.max(0.25, Math.min(3, Math.round(n*100)/100)) : 1; }
function cleanCrawlMode(value){
  const v=String(value || '').trim().toLowerCase();
  return (v==='horizontal' || v==='orizzontale' || v==='ticker' || v==='news' || v==='h') ? 'horizontal' : 'vertical';
}
function cleanCrawlDirection(value){
  const v=String(value || '').trim().toLowerCase();
  return (v==='ltr' || v==='left-right' || v==='left_to_right' || v==='sinistra-destra') ? 'ltr' : 'rtl';
}
function getCrawlBoxWidthPct(spot){ return cleanCrawlBoxWidthPct(spot && (spot.boxWidthPct ?? spot.crawlBoxWidthPct ?? spot.widthPct)); }
function getCrawlBoxHeightPct(spot){ return cleanCrawlBoxHeightPct(spot && (spot.boxHeightPct ?? spot.crawlBoxHeightPct ?? spot.heightPct)); }
function getCrawlSpeed(spot){ return cleanCrawlSpeed(spot && (spot.scrollSpeed ?? spot.crawlSpeed ?? spot.speed)); }
function getCrawlMode(spot){ return cleanCrawlMode(spot && (spot.crawlMode ?? spot.orientation ?? spot.mode)); }
function getCrawlDirection(spot){ return cleanCrawlDirection(spot && (spot.crawlDirection ?? spot.tickerDirection ?? spot.direction)); }
function cleanCrawlContinuous(value){ return !!value; }
function getCrawlContinuous(spot){ return cleanCrawlContinuous(spot && (spot.crawlContinuous ?? spot.continuous ?? spot.continuousCrawl ?? spot.continuo)); }
function getCrawlText(spot){ return String((spot && spot.text) || '').replace(/\r/g,'').trim(); }
function isCrawlStopMarker(spot){ return !!(spot && getCrawlContinuous(spot) && (/^stop$/i.test(getCrawlText(spot)) || !getCrawlText(spot))); }
function setCrawlLayout(spot, widthPct, heightPct, speed, mode='vertical', direction='rtl', continuous=false){
  if(!spot) return spot;
  spot.type='crawl';
  const w=cleanCrawlBoxWidthPct(widthPct), h=cleanCrawlBoxHeightPct(heightPct), sp=cleanCrawlSpeed(speed);
  const md=cleanCrawlMode(mode), dir=cleanCrawlDirection(direction), cont=cleanCrawlContinuous(continuous);
  spot.boxWidthPct=w; spot.crawlBoxWidthPct=w;
  spot.boxHeightPct=h; spot.crawlBoxHeightPct=h;
  spot.scrollSpeed=sp; spot.crawlSpeed=sp;
  spot.crawlMode=md; spot.orientation=md;
  spot.crawlDirection=dir; spot.tickerDirection=dir;
  spot.crawlContinuous=cont; spot.continuous=cont; spot.continuousCrawl=cont;
  return spot;
}
function normalizeFreeTextSpot(spot){
  if(!spot) return spot;
  if(isTextSpot(spot)) return setFreeTextStyle(spot, getFreeTextColor(spot), getFreeTextSize(spot));
  if(isCrawlSpot(spot)) return setCrawlLayout(setFreeTextStyle(spot, getFreeTextColor(spot), getFreeTextSize(spot)), getCrawlBoxWidthPct(spot), getCrawlBoxHeightPct(spot), getCrawlSpeed(spot), getCrawlMode(spot), getCrawlDirection(spot), getCrawlContinuous(spot));
  return spot;
}
function getCrawlSpots(photo){ return (photo && photo.spots ? photo.spots : []).map(normalizeFreeTextSpot).filter(isCrawlSpot); }
function estimateCrawlDurationMs(spot, viewHeight=720, viewWidth=null){
  const text=String((spot && spot.text) || '').replace(/\r/g,'').trim();
  const size=cleanFreeTextSize(spot && spot.fontSize);
  const lineHeight=Math.round(size*1.28);
  const mode=getCrawlMode(spot);
  const vw=Number(viewWidth) || Math.round(viewHeight*16/9);
  if(mode==='horizontal'){
    const single=text.replace(/\s*\n\s*/g,'   ');
    const boxWidth=Math.max(160, Math.round(vw * getCrawlBoxWidthPct(spot) / 100));
    const estimatedTextWidth=Math.max(size*4, single.length * size * 0.62 + 28);
    const travel=Math.max(260, boxWidth + estimatedTextWidth + 70);
    const pixelsPerSec=Math.max(35, Math.round(boxWidth * 0.18 * getCrawlSpeed(spot)));
    return Math.max(4500, Math.min(60000, Math.round((travel / pixelsPerSec) * 1000)));
  }
  const lines=Math.max(1, text ? text.split('\n').length : 1);
  const textHeight=lines*lineHeight + 24;
  const boxHeight=Math.max(120, Math.round(viewHeight * getCrawlBoxHeightPct(spot) / 100));
  const travel=Math.max(220, boxHeight + textHeight + 70);
  const pixelsPerSec=Math.max(30, Math.round(boxHeight * 0.18 * getCrawlSpeed(spot)));
  return Math.max(5000, Math.min(45000, Math.round((travel / pixelsPerSec) * 1000)));
}
function computeCrawlOverlayGeometry(layer, imgEl, spot){
  if(!layer || !imgEl || !spot) return null;
  const layerRect=layer.getBoundingClientRect();
  const imgRect=imgEl.getBoundingClientRect();
  if(!imgRect.width || !imgRect.height) return null;
  const boxW=Math.max(160, Math.min(imgRect.width, imgRect.width * getCrawlBoxWidthPct(spot) / 100));
  const boxH=Math.max(36, Math.min(imgRect.height, imgRect.height * getCrawlBoxHeightPct(spot) / 100));
  const centerX=imgRect.left-layerRect.left + imgRect.width * (Number(spot.x)||50)/100;
  const centerY=imgRect.top-layerRect.top + imgRect.height * (Number(spot.y)||50)/100;
  return {boxW, boxH, centerX, centerY};
}
function renderScrollingTextOverlay(layer, imgEl, spot, staticPreview=false, options={}){
  if(!layer || !imgEl || !spot) return;
  const layerRect=layer.getBoundingClientRect();
  const imgRect=imgEl.getBoundingClientRect();
  if(!imgRect.width || !imgRect.height) return;
  const mode=getCrawlMode(spot);
  const dir=getCrawlDirection(spot);
  const fixedBoxW=Number(options.fixedBoxWidthPx), fixedBoxH=Number(options.fixedBoxHeightPx);
  const fixedCenterX=Number(options.fixedCenterXPx), fixedCenterY=Number(options.fixedCenterYPx);
  const boxW=(Number.isFinite(fixedBoxW) && fixedBoxW > 0) ? fixedBoxW : Math.max(160, Math.min(imgRect.width, imgRect.width * getCrawlBoxWidthPct(spot) / 100));
  const boxH=(Number.isFinite(fixedBoxH) && fixedBoxH > 0) ? fixedBoxH : Math.max(36, Math.min(imgRect.height, imgRect.height * getCrawlBoxHeightPct(spot) / 100));
  const centerX=Number.isFinite(fixedCenterX) ? fixedCenterX : (imgRect.left-layerRect.left + imgRect.width * (Number(spot.x)||50)/100);
  const centerY=Number.isFinite(fixedCenterY) ? fixedCenterY : (imgRect.top-layerRect.top + imgRect.height * (Number(spot.y)||50)/100);
  const host=document.createElement('div');
  host.className=staticPreview ? 'crawl-preview-overlay' : 'crawl-scroll-host';
  host.dataset.x=spot.x; host.dataset.y=spot.y;
  host.style.position='absolute';
  host.style.left=centerX+'px';
  host.style.top=centerY+'px';
  host.style.transform='translate(-50%, -50%)';
  host.style.width=boxW+'px';
  host.style.height=boxH+'px';
  host.style.pointerEvents='none';
  host.style.overflow='hidden';
  host.style.boxSizing='border-box';
  host.style.borderRadius='18px';
  host.style.background=staticPreview ? 'rgba(30,41,59,.18)' : 'transparent';
  host.style.outline=staticPreview ? '2px solid rgba(191,219,254,.78)' : 'none';
  const inner=document.createElement('div');
  inner.className=staticPreview ? 'crawl-preview-text' : 'crawl-scroll-text';
  inner.textContent=(mode==='horizontal' && !staticPreview) ? String(spot.text || t('titolatorDefault')).replace(/\s*\n\s*/g,'   ') : (spot.text || t('titolatorDefault'));
  inner.style.position='absolute';
  inner.style.color=getFreeTextColor(spot);
  inner.style.fontWeight='800';
  inner.style.fontSize=Math.max(16, Math.round(cleanFreeTextSize(spot.fontSize) * Math.max(1, imgRect.width/900)))+'px';
  inner.style.lineHeight='1.28';
  inner.style.textShadow='0 1px 4px rgba(0,0,0,.7), 0 0 8px rgba(0,0,0,.4)';
  inner.style.padding='8px 14px';
  inner.style.borderRadius='14px';
  inner.style.background='transparent';
  inner.style.boxSizing='border-box';
  host.appendChild(inner);
  layer.appendChild(host);
  if(staticPreview){
    inner.style.left='50%'; inner.style.top='50%';
    inner.style.width='100%'; inner.style.maxWidth='100%';
    inner.style.whiteSpace='pre-wrap'; inner.style.textAlign='center';
    inner.style.transform='translate(-50%, -50%)';
    inner.style.maxHeight='92%';
    return host;
  }
  const duration=Math.max(50, Number(options.durationMs) || estimateCrawlDurationMs(spot, imgRect.height, boxW));
  const progress=Math.max(0, Math.min(1, Number(options.progress) || 0));
  if(mode==='horizontal'){
    inner.style.top='50%';
    inner.style.left='0px';
    inner.style.width='max-content';
    inner.style.maxWidth='none';
    inner.style.whiteSpace='nowrap';
    inner.style.textAlign='left';
    const textW=Math.max(inner.offsetWidth || 0, inner.scrollWidth || 0, boxW*0.3);
    const start=dir==='ltr' ? -(textW+24) : boxW+18;
    const end=dir==='ltr' ? boxW+18 : -(textW+24);
    const current=start + (end-start) * progress;
    inner.style.transform=`translate(${current}px, -50%)`;
    if(progress < 1){
      requestAnimationFrame(()=>{
        inner.style.transition=`transform ${Math.max(0, duration * (1-progress))}ms linear`;
        inner.style.transform=`translate(${end}px, -50%)`;
      });
    }
    return host;
  }
  inner.style.left='50%';
  inner.style.width='100%';
  inner.style.maxWidth='100%';
  inner.style.whiteSpace='pre-wrap';
  inner.style.textAlign='center';
  const start=boxH + 18;
  const end=-(inner.offsetHeight + 24);
  inner.style.top='0px';
  const current=start + (end-start) * progress;
  inner.style.transform=`translate(-50%, ${current}px)`;
  if(progress < 1){
    requestAnimationFrame(()=>{
      inner.style.transition=`transform ${Math.max(0, duration * (1-progress))}ms linear`;
      inner.style.transform=`translate(-50%, ${end}px)`;
    });
  }
  return host;
}


function updateLeftPanelLayout(){
  const isEdit = state.interactionMode === 'edit';
  const panel=document.querySelector('.left-panel');
  if(panel) panel.classList.toggle('edit-photos-only', isEdit);
  document.body.classList.toggle('edit-layout', isEdit);
}

function updateSelectedPhotoPanelVisibility(){
  const section = $('selectedPhotoSection');
  if(!section) return;
  const show = state.interactionMode !== 'edit' || !!state.editPhotoMetaVisible;
  section.classList.toggle('hidden', !show);
}

function applyI18n(){
  document.documentElement.lang = state.language;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $('newProjectBtn').textContent = t('newProject');
  $('openProjectBtn').textContent = t('openProject');
  $('saveProjectBtn').textContent = t('saveProject');
  if($('exportMenuBtn')) $('exportMenuBtn').textContent = t('exportMenu');
  if($('exportEmbedPublicBtn')) $('exportEmbedPublicBtn').textContent = t('exportEmbedPublic');
  if($('exportEmbedProtectedBtn')) $('exportEmbedProtectedBtn').textContent = t('exportEmbedProtected');
  if($('exportClearPhotosBtn')) $('exportClearPhotosBtn').textContent = t('exportClearPhotos');
  if($('reimportClearPhotosBtn')) $('reimportClearPhotosBtn').textContent = t('reimportClearPhotos');
  $('settingsBtn').textContent = t('settingsButton');
  $('miniGuideBtn').textContent = t('miniGuide');
  $('fullGuideBtn').textContent = t('fullGuide');
  $('startSlideshowBtn').textContent = t('startPresentation');
  if($('generateVideoBtn')) $('generateVideoBtn').textContent = t('generateVideo');
  if($('appVersion')) $('appVersion').textContent = APP_VERSION;
  if($('cinematicBtn')){
    $('cinematicBtn').textContent = state.cinematicMode ? t('cinematicOn') : t('cinematicOff');
    $('cinematicBtn').title = t('cinematicLabel');
    $('cinematicBtn').classList.toggle('cinematic-active', !!state.cinematicMode);
  }
  $('deletePhotoBtn').textContent = t('deletePhoto');
  if($('verifyPathBtn')) $('verifyPathBtn').textContent = t('verifyPath');
  $('emptyMessage').textContent = t('noPhoto');
  $('editorHint').textContent = `${t('editorHint')} ${t('pointMenuHint')} ${t('keyboardHelp')}`;
  $('qualityInfo').textContent = `${t('qualityMedium')}. ${t('projectFormat')}`;
  $('movePhotoUpBtn').textContent = t('moveUp');
  $('movePhotoDownBtn').textContent = t('moveDown');
  $('slidePlayBtn').textContent = state.slideshowRunning ? t('pausePresentation') : t('startPresentation');
  $('musicBtn').textContent = state.musicPlaying ? t('pauseMusic') : t('music');
  $('homeBtn').textContent = t('home');
  if($('changeMusicBtn')) $('changeMusicBtn').textContent = t('changeMusic');
  if($('modeNavigateBtn')){
    $('modeNavigateBtn').textContent = t('navigateMode');
    $('modeNavigateBtn').classList.toggle('mode-active', state.interactionMode === 'navigate');
  }
  if($('modeEditBtn')){
    $('modeEditBtn').textContent = t('editMode');
    $('modeEditBtn').classList.toggle('edit-active', state.interactionMode === 'edit');
    $('modeEditBtn').classList.toggle('mode-active', state.interactionMode === 'edit');
  }
  updateLeftPanelLayout();
  if($('confirmLinkPhotoBtn')) $('confirmLinkPhotoBtn').textContent = t('confirmLinkedPhoto');
  if($('cancelLinkPhotoBtn')) $('cancelLinkPhotoBtn').textContent = t('cancelLinkedPhoto');
  $('unlockAlbumBtn').textContent = t('passwordButton');
  if($('showPasswordBtn')) $('showPasswordBtn').textContent = t('showPassword');
  if($('openMapsBtn')) $('openMapsBtn').textContent = t('openMaps');
  if($('searchMapsBtn')) $('searchMapsBtn').textContent = t('searchMaps');
  updateLockUi();
  syncSettingsInputs(); updateGpsVisibility(); updateMusicName(); renderClipboardBar(); renderSpotList(); renderMusicList();
}

function init(){
  state.language = loadPreferredLanguage();
  const savedAlbumQuality=Number(localStorage.getItem('photopin_album_image_quality') || '');
  if(Number.isFinite(savedAlbumQuality) && savedAlbumQuality>0) state.settings.albumImageQuality=clampAlbumImageQuality(savedAlbumQuality);
  $('languageSelect').value = state.language;
  state.albumName = t('albumDefault'); $('albumName').value = state.albumName;
  bindEvents(); applyI18n(); renderAll(); loadDefaultWebMusic();
}

function bindEvents(){
  $('languageSelect').addEventListener('change', e => { state.language=validLanguage(e.target.value); savePreferredLanguage(state.language); setDirty(); applyI18n(); });
  $('albumName').addEventListener('input', e => { if(!canEdit()) return; state.albumName=e.target.value; setDirty(); });
  $('albumLatitude').addEventListener('input', e => { if(!canEdit()) return; state.albumMeta.latitude=numOrNull(e.target.value); setDirty(); });
  $('albumLongitude').addEventListener('input', e => { if(!canEdit()) return; state.albumMeta.longitude=numOrNull(e.target.value); setDirty(); });
  $('albumAddress').addEventListener('input', e => { if(!canEdit()){ syncAlbumMetaInputs(); return; } state.albumMeta.address=String(e.target.value || '').trim(); setDirty(); });
  $('openMapsBtn').addEventListener('click', openAlbumInMaps);
  $('searchMapsBtn').addEventListener('click', searchAddressInMaps);
  $('slideSeconds').addEventListener('change', e => { state.settings.slideSeconds=clampSlideSeconds(e.target.value); syncSettingsInputs(); restartTimerIfNeeded(); setDirty(); });
  $('showCaptionSelect').addEventListener('change', e => { state.settings.showCaption = e.target.value === 'true'; renderSlide(); setDirty(); });
  $('photoInput').addEventListener('change', importPhotos);
  $('musicInput').addEventListener('change', importMusic);
  $('newProjectBtn').addEventListener('click', () => newProject());
  $('openProjectBtn').addEventListener('click', () => $('fotoPinImportInput').click());
  $('projectInput').addEventListener('change', openProjectFile);
  $('fotoPinImportInput').addEventListener('change', importFotoPinExportFile);
  $('saveProjectBtn').addEventListener('click', saveProject);
  $('unlockAlbumBtn').addEventListener('click', unlockAlbumFromPassword);
  $('showPasswordBtn').addEventListener('click', showAlbumPassword);
  if($('exportMenuBtn')) $('exportMenuBtn').addEventListener('click', showExportMenuDialog);
  if($('exportEmbedPublicBtn')) $('exportEmbedPublicBtn').addEventListener('click', exportEmbedPublicZip);
  if($('exportEmbedProtectedBtn')) $('exportEmbedProtectedBtn').addEventListener('click', exportEmbedProtectedZip);
  $('exportClearPhotosBtn').addEventListener('click', exportClearPhotosZip);
  $('reimportClearPhotosBtn').addEventListener('click', () => $('clearPhotosImportInput').click());
  $('clearPhotosImportInput').addEventListener('change', reimportClearPhotosZip);
  if($('singlePhotoImportInput')) $('singlePhotoImportInput').addEventListener('change', importSinglePhotoZip);
  installPathTransferUi();
  installHiddenPathToolsTrigger();
  $('settingsBtn').addEventListener('click', showSettingsModal);
  $('miniGuideBtn').addEventListener('click', showMiniGuide);
  $('fullGuideBtn').addEventListener('click', showFullGuide);
  $('deletePhotoBtn').addEventListener('click', deleteCurrentPhoto);
  if($('verifyPathBtn')) $('verifyPathBtn').addEventListener('click', showVerifyPathDialog);
  $('movePhotoUpBtn').addEventListener('click', () => movePhoto(-1));
  $('movePhotoDownBtn').addEventListener('click', () => movePhoto(1));
  $('startSlideshowBtn').addEventListener('click', openSlideshow);
  if($('generateVideoBtn')) $('generateVideoBtn').addEventListener('click', exportPresentationVideo);
  if($('cinematicBtn')) $('cinematicBtn').addEventListener('click', toggleCinematicMode);
  $('modeNavigateBtn').addEventListener('click', () => setInteractionMode('navigate'));
  $('modeEditBtn').addEventListener('click', () => setInteractionMode('edit'));
  $('confirmLinkPhotoBtn').addEventListener('click', confirmPendingPhotoLink);
  $('cancelLinkPhotoBtn').addEventListener('click', cancelPendingPhotoLink);
  $('photoTitle').addEventListener('input', e => { const p=currentPhoto(); if(!p) return; p.title=e.target.value; setDirty(); renderPhotoList(); updateCaption(); });
  $('photoDescription').addEventListener('input', e => { const p=currentPhoto(); if(!p) return; p.description=e.target.value; setDirty(); updateCaption(); });
  let imageStageSingleClickTimer = null;
  $('imageStage').addEventListener('click', e => {
    if(imageStageSingleClickTimer) clearTimeout(imageStageSingleClickTimer);
    // In modalità "Sposta" il punto si trascina e si rilascia: il click vuoto non riposiziona più.
    if(state.moveSpot){ e.stopPropagation(); return; }
    if(e.target.closest('.pin') || e.target.closest('.tooltip') || e.target.closest('.free-text-overlay') || e.target.closest('.crawl-static-overlay')) return;
    imageStageSingleClickTimer = setTimeout(() => {
      imageStageSingleClickTimer = null;
      addSpotFromClick(e);
    }, 260);
  });
  $('imageStage').addEventListener('dblclick', e => {
    if(imageStageSingleClickTimer){ clearTimeout(imageStageSingleClickTimer); imageStageSingleClickTimer = null; }
    if(state.moveSpot){ e.preventDefault(); e.stopPropagation(); return; }
    if(e.target.closest('.pin') || e.target.closest('.tooltip') || e.target.closest('.free-text-overlay') || e.target.closest('.crawl-static-overlay')) return;
    addSpotFromClick(e);
  });
  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  TASTO DESTRO SULLA FOTO IN MODALITÀ EDITA:                             ║
  // ║  - Su zona vuota: torna alla foto precedente                            ║
  // ║  - Su un punto/nota: apre il menu del punto (modifica/taglia/copia...) ║
  // ║  Questo comportamento NON deve MAI essere modificato.                   ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  $('imageStage').addEventListener('contextmenu', e => {
    e.preventDefault();
    // Controlla se il click destro è su un pin
    const pinEl = e.target.closest('.pin,.free-text-overlay,.crawl-static-overlay');
    if (pinEl && state.interactionMode === 'edit') {
      const p = currentPhoto(); if (!p) return;
      const pinIndex = parseInt(pinEl.dataset.index, 10);
      if (!isNaN(pinIndex) && p.spots[pinIndex]) {
        const spot = p.spots[pinIndex];
        setSelectedSpot(p.id, spot.id);
        renderSpotList(); renderPins($('pinLayer'), p);
        showSpotMenu(e, spot, pinIndex);
        return;
      }
    }
    // Zona vuota: torna indietro
    previousPhotoInEditor();
  });
  document.addEventListener('click', e => { if(!e.target.closest('#spotMenu')) closeSpotMenu(); });
  $('mainImage').addEventListener('load', () => positionPins($('pinLayer')));
  $('slideImage').addEventListener('load', () => positionPins($('slidePinLayer')));
  window.addEventListener('resize', () => { positionPins($('pinLayer')); positionPins($('slidePinLayer')); if(_mapVisible && !$('slideshow').classList.contains('hidden')) drawPresentationMap(0); else drawEditorMap(); });
  $('slidePlayBtn').addEventListener('click', toggleSlideshow);
  if($('slideCinematicBtn')) $('slideCinematicBtn').addEventListener('click', toggleCinematicMode);
  $('musicBtn').addEventListener('click', toggleMusic);
  $('changeMusicBtn').addEventListener('click', playNextMusic);
  $('homeBtn').addEventListener('click', closeSlideshow);
  $('slideStage').addEventListener('click', () => { if(!state.slideshowRunning) nextSlide(); });
  $('slideStage').addEventListener('contextmenu', e => { e.preventDefault(); prevSlide(); });
  $('audioPlayer').addEventListener('ended', playNextMusic);
  // Mappa: click sulla mappa → nasconde; click sul bottone → mostra
  $('presentationMap').addEventListener('click', e => { e.stopPropagation(); setMapVisible(false); });
  $('presentationMapBtn').addEventListener('click', e => { e.stopPropagation(); setMapVisible(true); });
  // ── Editor map: click su nodo + drag per spostare ──
  let _emDrag = false, _emStartX = 0, _emStartY = 0, _emOrigLeft = 0, _emOrigTop = 0, _emMoved = false;
  const editorMapEl = $('editorMap');
  editorMapEl.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    e.stopPropagation();
    const rect = editorMapEl.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    // Se click su un nodo, non iniziare drag
    let onNode = false;
    _editorMapNodes.forEach(n => { if (Math.sqrt((n.x-mx)**2 + (n.y-my)**2) < 16) onNode = true; });
    if (onNode) return;
    _emDrag = true; _emMoved = false;
    _emStartX = e.clientX; _emStartY = e.clientY;
    _emOrigLeft = parseInt(editorMapEl.style.left || 'auto');
    _emOrigTop = parseInt(editorMapEl.style.top || 'auto');
    if (isNaN(_emOrigLeft)) _emOrigLeft = rect.left - editorMapEl.parentElement.getBoundingClientRect().left;
    if (isNaN(_emOrigTop)) _emOrigTop = rect.top - editorMapEl.parentElement.getBoundingClientRect().top;
    editorMapEl.style.cursor = 'grabbing';
  });
  document.addEventListener('mousemove', e => {
    if (!_emDrag) return;
    const dx = e.clientX - _emStartX, dy = e.clientY - _emStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) _emMoved = true;
    editorMapEl.style.right = 'auto';
    editorMapEl.style.bottom = 'auto';
    editorMapEl.style.left = (_emOrigLeft + dx) + 'px';
    editorMapEl.style.top = (_emOrigTop + dy) + 'px';
  });
  document.addEventListener('mouseup', e => {
    if (!_emDrag) return;
    _emDrag = false;
    editorMapEl.style.cursor = 'pointer';
  });
  editorMapEl.addEventListener('click', e => {
    e.stopPropagation();
    if (_emMoved) { _emMoved = false; return; } // era un drag, non un click
    if (!_editorMapNodes.length) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let best = null, bestDist = 16;
    _editorMapNodes.forEach(n => {
      const d = Math.sqrt((n.x - mx) ** 2 + (n.y - my) ** 2);
      if (d < bestDist) { bestDist = d; best = n; }
    });
    if (!best) return;
    const idx = state.photos.findIndex(p => p.id === best.id);
    if (idx >= 0 && idx !== state.currentIndex) {
      state.currentIndex = idx;
      state.selectedSpot = null;
      renderAll();
    }
  });
  window.addEventListener('keydown', handleKeys);
  window.addEventListener('beforeunload', e => { if(state.dirty){ e.preventDefault(); e.returnValue = t('unsaved'); } });
}

function syncSettingsInputs(){
  $('slideSeconds').value = state.settings.slideSeconds;
  $('showCaptionSelect').value = String(!!state.settings.showCaption);
  syncAlbumMetaInputs();
}

function syncAlbumMetaInputs(){
  if($('albumLatitude')) $('albumLatitude').value = state.albumMeta.latitude ?? '';
  if($('albumLongitude')) $('albumLongitude').value = state.albumMeta.longitude ?? '';
  if($('albumAddress')) $('albumAddress').value = state.albumMeta.address || '';
}
function updateGpsVisibility(){
  const box=$('albumGpsSection');
  if(!box) return;
  box.classList.toggle('hidden', state.currentIndex !== 0);
}
function setAlbumLockFromMeta(){
  const sig=state.albumMeta && state.albumMeta.signature;
  // Comportamento sicuro: ogni album FotoPin protetto appena aperto parte SEMPRE locked.
  // La password salvata localmente non deve sbloccarlo automaticamente e non deve essere mostrata.
  if(sig && sig.recoveryCodeHash && sig.salt){
    state.albumRecoveryCode = '';
    state.albumLocked = true;
  } else {
    state.albumRecoveryCode = '';
    state.albumLocked = false;
  }
}
function updateLockUi(){
  const locked=isAlbumLocked();
  if($('lockStatus')){
    $('lockStatus').textContent = locked ? t('lockedAlbum') : (state.albumMeta && state.albumMeta.signature ? t('unlockedAlbum') : t('noLockAlbum'));
    $('lockStatus').classList.toggle('locked', locked);
    $('lockStatus').classList.toggle('unlocked', !locked && !!(state.albumMeta && state.albumMeta.signature));
  }
  if($('unlockAlbumBtn')) $('unlockAlbumBtn').classList.toggle('hidden', !locked);
  if($('showPasswordBtn')) {
    $('showPasswordBtn').classList.toggle('hidden', locked || !(state.albumMeta && state.albumMeta.signature));
    $('showPasswordBtn').disabled = locked;
  }
  const editable=[ 'albumName','albumLatitude','albumLongitude','albumAddress','photoInput','musicInput','photoTitle','photoDescription','movePhotoUpBtn','movePhotoDownBtn','deletePhotoBtn','exportMenuBtn','exportEmbedPublicBtn','exportEmbedProtectedBtn','exportClearPhotosBtn','reimportClearPhotosBtn','generateVideoBtn','verifyPathBtn' ];
  editable.forEach(id=>{ const el=$(id); if(el) el.disabled=locked; });
  if(locked){ state.interactionMode='navigate'; state.pendingPhotoLink=null; }
  const hideWhenLocked=[ 'exportMenuBtn','exportEmbedPublicBtn','exportEmbedProtectedBtn','exportClearPhotosBtn','reimportClearPhotosBtn','generateVideoBtn','deletePhotoBtn','movePhotoUpBtn','movePhotoDownBtn','photoInput','musicInput','verifyPathBtn' ];
  hideWhenLocked.forEach(id=>{ const el=$(id); if(el) el.classList.toggle('hidden', locked); });
  // Queste funzioni sono disponibili solo nel menu segreto del titolo FotoPin.
  ['exportClearPhotosBtn','reimportClearPhotosBtn'].forEach(id=>{ const el=$(id); if(el) el.classList.add('hidden'); });
  if($('saveProjectBtn')){
    $('saveProjectBtn').classList.remove('hidden');
    $('saveProjectBtn').disabled=false;
    $('saveProjectBtn').title = locked ? t('lockedSaveBlocked') : '';
  }
  if($('modeNavigateBtn')){
    $('modeNavigateBtn').classList.remove('hidden');
    $('modeNavigateBtn').disabled=false;
    $('modeNavigateBtn').classList.toggle('mode-active', state.interactionMode === 'navigate');
  }
  if($('modeEditBtn')){
    $('modeEditBtn').classList.toggle('hidden', locked);
    $('modeEditBtn').disabled=locked;
    $('modeEditBtn').classList.toggle('edit-active', state.interactionMode === 'edit' && !locked);
    $('modeEditBtn').classList.toggle('mode-active', state.interactionMode === 'edit' && !locked);
  }
  renderLinkPhotoSelection();
}
async function verifyUnlockCode(code){
  const sig=state.albumMeta && state.albumMeta.signature;
  if(!sig || !sig.recoveryCodeHash || !sig.salt) return false;
  const clean=String(code||'').trim().toUpperCase();
  try{
    const salt=base64ToBytes(sig.salt);
    const keyMaterial=await crypto.subtle.importKey('raw', new TextEncoder().encode(clean), 'PBKDF2', false, ['deriveBits']);
    const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt,iterations:100000,hash:'SHA-256'}, keyMaterial, 256);
    return bytesToBase64(new Uint8Array(bits)) === sig.recoveryCodeHash;
  }catch(e){ console.error(e); return false; }
}
async function unlockAlbumFromPassword(){
  const code=prompt(t('unlockPassword'));
  if(code===null) return false;
  if(await verifyUnlockCode(code)){
    state.albumLocked=false;
    state.albumRecoveryCode=String(code||'').trim().toUpperCase();
    if(state.albumMeta){
      state.albumMeta.isReadOnly=false;
      if(state.albumMeta.id) saveRecoveryCodeLocal(state.albumMeta.id, state.albumRecoveryCode);
      if(state.albumMeta.signature) state.albumMeta.signature.deviceId='photopin_web_unlocked';
    }
    alert(t('unlockOk'));
    applyI18n(); renderAll();
    return true;
  }else{
    alert(t('unlockFail'));
    return false;
  }
}

function updateMusicName(){
  const count = state.musicTracks.length;
  const active = activeMusic();
  $('musicName').textContent = count ? `${t('musicLoaded')} ${count}. ${active ? t('selectedMusic') + ': ' + active.name : ''} — ${t('musicFolder')}` : t('noMusic');
}

function setMusicButtonState(){
  const btn=$('musicBtn'); if(!btn) return;
  const ready=!!activeMusic();
  btn.classList.toggle('music-ready', ready);
  btn.classList.toggle('music-waiting', !ready);
  btn.disabled = !ready;
}
function testAudioUrl(url){
  return new Promise(resolve=>{
    const audio=new Audio();
    let done=false;
    const finish=(ok)=>{ if(done) return; done=true; audio.removeAttribute('src'); audio.load(); resolve(ok); };
    audio.preload='auto';
    audio.addEventListener('canplay',()=>finish(true),{once:true});
    audio.addEventListener('loadedmetadata',()=>finish(true),{once:true});
    audio.addEventListener('error',()=>finish(false),{once:true});
    setTimeout(()=>finish(false),6000);
    audio.src=url;
    audio.load();
  });
}
function setWebMusicByIndex(index){
  const total=DEFAULT_WEB_MUSIC_URLS.length;
  if(!total) return;
  state.webMusicIndex=((index%total)+total)%total;
  const url=DEFAULT_WEB_MUSIC_URLS[state.webMusicIndex];
  const name=decodeURIComponent(url.split('/').pop() || 'default.mp3');
  state.webMusic={id:'web-default-'+state.webMusicIndex, name, type:'audio/mpeg', url};
}

async function loadDefaultWebMusic(){
  state.webMusicStatus='loading';
  setMusicButtonState();
  const start=Math.floor(Math.random()*Math.max(1, DEFAULT_WEB_MUSIC_URLS.length));
  for(let offset=0; offset<DEFAULT_WEB_MUSIC_URLS.length; offset++){
    const idx=(start+offset)%DEFAULT_WEB_MUSIC_URLS.length;
    const url=DEFAULT_WEB_MUSIC_URLS[idx];
    try{
      const ok=await testAudioUrl(url);
      if(!ok) continue;
      state.webMusicIndex=idx;
      setWebMusicByIndex(idx);
      state.webMusicStatus='ready';
      loadActiveMusic();
      setMusicButtonState();
      renderSlide();
      return;
    }catch(err){
      console.warn('Default web music failed:', url, err);
    }
  }
  // Fallback: non blocchiamo il pulsante. Alcuni browser non segnalano canplay su file aperti da index.html,
  // ma la riproduzione diretta dell'URL può funzionare dopo il click dell'utente.
  setWebMusicByIndex(start);
  state.webMusicStatus='ready';
  loadActiveMusic();
  setMusicButtonState();
  renderSlide();
}

function isSelectedSpot(photoId, spotId){ return !!(state.selectedSpot && state.selectedSpot.photoId===photoId && state.selectedSpot.spotId===spotId); }
function setSelectedSpot(photoId, spotId){ state.selectedSpot = photoId && spotId ? {photoId, spotId} : null; }
function restoreClipboardCut(){
  const clip=state.spotClipboard;
  if(!clip || clip.mode!=='cut' || !clip.origin) return false;
  const photo=findPhotoById(clip.origin.photoId);
  if(!photo){ state.spotClipboard=null; return false; }
  const restored=cloneSpot(clip.spot);
  const idx=Math.max(0, Math.min(photo.spots.length, Number.isInteger(clip.origin.index)?clip.origin.index:photo.spots.length));
  photo.spots.splice(idx,0,restored);
  state.spotClipboard=null;
  setSelectedSpot(photo.id, restored.id);
  setDirty();
  return true;
}
function clearClipboard(restoreCut=false){
  let msg='';
  if(restoreCut && restoreClipboardCut()) msg=t('clipboardCutRestored');
  else if(state.spotClipboard){ state.spotClipboard=null; msg=t('clipboardCleared'); }
  renderClipboardBar();
  renderSpotList();
  renderCurrentPhoto();
  if(msg) $('editorHint').textContent=msg;
}
function setSpotClipboard(mode, spot, origin){
  if(state.spotClipboard && state.spotClipboard.mode==='cut') restoreClipboardCut();
  state.spotClipboard={mode, spot:cloneSpot(spot), origin: origin || null};
  renderClipboardBar();
  renderSpotList();
  if(mode==='copy' || mode==='cut') $('editorHint').textContent=t('clipboardPasteHint');
}
function renderClipboardBar(){
  const box=$('clipboardBar'); if(!box) return;
  const clip=state.spotClipboard;
  if(!clip){ box.classList.add('hidden'); box.innerHTML=''; return; }
  box.classList.remove('hidden');
  const kind=clip.mode==='cut' ? t('clipboardCut') : t('clipboardCopy');
  const spot=clip.spot||{};
  const title=`${t('clipboard')}: ${kind}`;
  const sub=[isPhotoSpot(spot)?t('photoPoint'):(isCrawlSpot(spot)?t('titolatorPoint'):(isTextSpot(spot)?t('freeTextPoint'):t('notePoint'))), spot.text||''].filter(Boolean).join(' — ');
  box.innerHTML='';
  const left=document.createElement('div'); left.className='clipboard-left';
  const a=document.createElement('div'); a.className='clipboard-title'; a.textContent=title;
  const b=document.createElement('div'); b.className='clipboard-sub'; b.textContent=sub;
  left.append(a,b);
  const close=document.createElement('button'); close.className='clipboard-close'; close.type='button'; close.textContent='×'; close.title='X';
  close.addEventListener('click', ev=>{ ev.stopPropagation(); clearClipboard(true); });
  box.append(left, close);
}

async function importPhotos(e){
  const files = [...e.target.files]; if(!files.length) return;
  $('editorHint').textContent = t('compressing');
  for(const file of files){
    const compressed = await compressImageMedium(file);
    const id = uid(); const ext = extFromType(compressed.type, 'jpg');
    const name = safeName(file.name.replace(/\.[^.]+$/,'')) + '.' + ext;
    state.photos.push({ id, name, title:file.name.replace(/\.[^.]+$/,''), description:'', type:compressed.type, buffer:compressed.buffer, url:URL.createObjectURL(new Blob([compressed.buffer], {type:compressed.type})), spots:[] });
  }
  if(state.currentIndex < 0 && state.photos.length) state.currentIndex = 0;
  e.target.value=''; setDirty(); $('editorHint').textContent = `${t('editorHint')} ${t('pointMenuHint')} ${t('keyboardHelp')}`; renderAll();
}

function compressImageMedium(file){
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img,0,0);
        canvas.toBlob(async blob => {
          if(!blob){ resolve({type:file.type || 'image/jpeg', buffer:reader.result}); return; }
          resolve({ type:'image/jpeg', buffer:await blob.arrayBuffer() });
        }, 'image/jpeg', clampAlbumImageQuality(state.settings.albumImageQuality) / 100);
      };
      img.onerror = () => resolve({type:file.type || 'image/jpeg', buffer:reader.result});
      img.src = URL.createObjectURL(new Blob([reader.result], {type:file.type}));
    };
    reader.readAsArrayBuffer(file);
  });
}

async function importMusic(e){
  const files=[...e.target.files]; if(!files.length) return;
  for(const file of files){
    const buffer = await file.arrayBuffer();
    state.musicTracks.push({ id:uid(), name:safeName(file.name), type:file.type || 'audio/mpeg', buffer, url:URL.createObjectURL(new Blob([buffer], {type:file.type || 'audio/mpeg'})) });
  }
  if(state.musicTracks.length && state.activeMusicIndex < 0) state.activeMusicIndex = 0;
  e.target.value=''; setDirty(); updateMusicName(); renderMusicList();
}

function renderAll(){ renderPhotoList(); renderCurrentPhoto(); updateGpsVisibility(); renderClipboardBar(); renderSpotList(); renderMusicList(); updateButtons(); updateLockUi(); renderLinkPhotoSelection(); updateLeftPanelLayout(); updateSelectedPhotoPanelVisibility(); updatePathTransferUi(); }
function updateButtons(){
  $('deletePhotoBtn').disabled = !currentPhoto() || isAlbumLocked();
  $('movePhotoUpBtn').disabled = state.currentIndex <= 0 || isAlbumLocked();
  $('movePhotoDownBtn').disabled = state.currentIndex < 0 || state.currentIndex >= state.photos.length-1 || isAlbumLocked();
}

function setInteractionMode(mode){
  if(mode === 'edit' && isAlbumLocked()) return;
  const next = mode === 'edit' ? 'edit' : 'navigate';
  if(state.pendingPhotoLink) cancelPendingPhotoLink();
  state.interactionMode = next;
  closeSpotMenu(); closeNotePopup();
  document.querySelectorAll('.tooltip').forEach(x=>x.classList.add('hidden'));
  applyI18n();
  renderCurrentPhoto();
  setDirty();
}
function toggleInteractionMode(){
  setInteractionMode(state.interactionMode === 'edit' ? 'navigate' : 'edit');
}

function appendSpotMiniPreview(parent, rawSpot, index){
  if(!parent || !rawSpot) return;
  const s=normalizeFreeTextSpot(rawSpot);
  const x=(Number.isFinite(Number(s.x)) ? Number(s.x) : 50) + '%';
  const y=(Number.isFinite(Number(s.y)) ? Number(s.y) : 50) + '%';
  if(isTextSpot(s) || isCrawlSpot(s)){
    const textEl=document.createElement('div');
    const crawl=isCrawlSpot(s);
    textEl.className='spot-preview-text-overlay' + (crawl ? ' crawl' : '');
    const label=crawl ? (isCrawlStopMarker(s) ? 'stop' : (getCrawlText(s) || t('titolatorDefault'))) : (String(s.text || '').trim() || t('freeTextDefault'));
    textEl.textContent=label;
    textEl.style.left=x;
    textEl.style.top=y;
    textEl.style.color=crawl ? getFreeTextColor(s) : cleanFreeTextColor(s.color);
    const baseSize=crawl ? cleanFreeTextSize(s.fontSize) : getFreeTextSize(s);
    textEl.style.fontSize=Math.max(8, Math.min(15, Math.round(baseSize * 0.45))) + 'px';
    if(crawl){
      textEl.style.width=Math.max(22, Math.min(92, getCrawlBoxWidthPct(s))) + '%';
      textEl.style.height=Math.max(12, Math.min(70, getCrawlBoxHeightPct(s))) + '%';
      textEl.style.whiteSpace=getCrawlMode(s)==='horizontal' ? 'nowrap' : 'pre-wrap';
      textEl.style.alignItems=getCrawlMode(s)==='horizontal' ? 'center' : 'flex-start';
    }
    parent.appendChild(textEl);
    return;
  }
  const miniPin=document.createElement('div');
  miniPin.className='spot-preview-pin ' + (isPhotoSpot(s) ? 'photo' : 'note');
  miniPin.textContent=String(index + 1);
  miniPin.style.left=x;
  miniPin.style.top=y;
  parent.appendChild(miniPin);
}

function renderPhotoList(){
  const box = $('photoList'); box.innerHTML='';
  const incomingIds = photoIncomingLinkIds();
  const reachableIds = photoReachableIdsFromStart(state.photos, 0);
  state.photos.forEach((p,i) => {
    const pending = state.pendingPhotoLink;
    const isPendingTarget = pending && pending.targetPhotoId === p.id;
    const unlinked = isUnlinkedPhoto(p, i, incomingIds, reachableIds);
    const item = document.createElement('div');
    item.className='photo-item' + (i===state.currentIndex?' active':'') + (isPendingTarget ? ' link-target' : '') + (state.pathWarningIds && state.pathWarningIds.has(p.id) ? ' path-warning' : '') + (unlinked ? ' unlinked-photo' : '');
    item.innerHTML = `<div class="photo-item-title"></div><div class="photo-item-sub"></div>`;
    item.querySelector('.photo-item-title').textContent = `${String(i+1).padStart(2,'0')} - ${p.title || p.name}`;
    const sub = item.querySelector('.photo-item-sub');
    sub.classList.toggle('unlinked-label', unlinked);
    if(unlinked){
      sub.innerHTML = '';
      const warn = document.createElement('span');
      warn.className = 'unlinked-label-text';
      warn.textContent = unlinkedPhotoText();
      sub.appendChild(warn);
      sub.appendChild(document.createTextNode(' - ' + spotCountText(p)));
    } else {
      sub.textContent = spotCountText(p);
    }
    if(state.interactionMode === 'edit' && p.url){
      const thumbWrap = document.createElement('div');
      thumbWrap.className = 'spot-preview-wrap photo-list-preview';
      const thumb = document.createElement('img');
      thumb.className = 'spot-preview-img photo-list-preview-img';
      thumb.src = p.url;
      thumb.alt = p.title || p.name || '';
      thumbWrap.appendChild(thumb);
      (p.spots || []).forEach((s, si) => appendSpotMiniPreview(thumbWrap, s, si));
      item.appendChild(thumbWrap);
    }
    item.addEventListener('click', () => {
      closeSpotMenu(); closeNotePopup();
      if(state.pendingPhotoLink){
        state.currentIndex=i;
        state.selectedSpot=null;
        if(p.id === state.pendingPhotoLink.originPhotoId){
          state.pendingPhotoLink.targetPhotoId=null;
          $('editorHint').textContent=t('cannotLinkSamePhoto') + ' ' + t('selectExistingPhotoForPoint');
        } else {
          state.pendingPhotoLink.targetPhotoId=p.id;
          $('editorHint').textContent=`${t('selectedLinkedPhotoPreview')} ${p.title || p.name}`;
        }
        renderAll();
        return;
      }
      clearPhotoHistory();
      state.currentIndex=i;
      state.selectedSpot=null;
      if(state.interactionMode === 'edit') state.editPhotoMetaVisible = false;
      renderAll();
    });
    item.addEventListener('contextmenu', async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      closeSpotMenu(); closeNotePopup();
      if(state.pendingPhotoLink) return;
      clearPhotoHistory();
      state.currentIndex=i;
      state.selectedSpot=null;
      if(state.interactionMode === 'edit') state.editPhotoMetaVisible = true;
      renderAll();
      if(canEdit()) await showPhotoListActionsDialog(i);
    });
    item.addEventListener('dblclick', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      goToCallerOfPhoto(p.id);
    });
    box.appendChild(item);
  });
}



function inferImageTypeFromName(name, fallback='image/jpeg'){
  const lower=String(name || '').toLowerCase();
  if(lower.endsWith('.png')) return 'image/png';
  if(lower.endsWith('.webp')) return 'image/webp';
  if(lower.endsWith('.gif')) return 'image/gif';
  if(lower.endsWith('.bmp')) return 'image/bmp';
  return fallback || 'image/jpeg';
}
async function showPhotoListActionsDialog(index){
  const photo=state.photos[index];
  if(!photo) return;
  const old=document.getElementById('photoListActionsOverlay');
  if(old) old.remove();
  return new Promise(resolve=>{
    const overlay=document.createElement('div');
    overlay.id='photoListActionsOverlay';
    Object.assign(overlay.style,{position:'fixed',inset:'0',background:'rgba(15,23,42,.42)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:'10030',padding:'18px'});
    const card=document.createElement('div');
    Object.assign(card.style,{background:'#fff',borderRadius:'16px',padding:'16px',width:'min(92vw,380px)',boxShadow:'0 18px 44px rgba(0,0,0,.28)'});
    const title=document.createElement('div');
    title.textContent=t('photoListActionsTitle') + ': ' + (photo.title || photo.name || ('#'+(index+1)));
    Object.assign(title.style,{fontWeight:'800',marginBottom:'12px'});
    const actions=document.createElement('div');
    Object.assign(actions.style,{display:'flex',flexDirection:'column',gap:'8px'});
    const makeBtn=(label, primary=false)=>{
      const btn=document.createElement('button');
      btn.type='button';
      btn.textContent=label;
      Object.assign(btn.style,{padding:'10px 12px',borderRadius:'12px',border:'1px solid ' + (primary ? '#2563eb' : '#cbd5e1'),background:primary ? '#2563eb' : '#fff',color:primary ? '#fff' : '#0f172a',fontWeight:'700',cursor:'pointer'});
      return btn;
    };
    const detailsBtn=makeBtn(t('photoShowInfo'), true);
    const exportBtn=makeBtn(t('exportSinglePhoto'));
    const importBtn=makeBtn(t('importSinglePhoto'));
    const cancelBtn=makeBtn(t('cancel'));
    function close(){ try{ overlay.remove(); }catch(e){} resolve(); }
    detailsBtn.onclick=()=>{ close(); };
    exportBtn.onclick=async()=>{ close(); await exportSinglePhoto(index); };
    importBtn.onclick=()=>{ close(); state.singlePhotoImportIndex=index; if($('singlePhotoImportInput')) $('singlePhotoImportInput').click(); };
    cancelBtn.onclick=()=>close();
    overlay.addEventListener('click', e=>{ if(e.target===overlay) close(); });
    card.append(title, actions);
    actions.append(detailsBtn, exportBtn, importBtn, cancelBtn);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  });
}
async function exportSinglePhoto(index){
  if(isAlbumLocked()) return alert(t('singlePhotoLocked'));
  const photo=state.photos[index];
  if(!photo || !photo.buffer) return;
  const ext=extFromType(photo.type, 'jpg');
  const base=safeName(photo.title || photo.name || ('photo_'+String(index+1).padStart(2,'0')));
  const imageName=safeName(photo.name || (base + '.' + ext));
  const suggestedName=imageName.includes('.') ? imageName : (imageName + '.' + ext);
  const blob=new Blob([photo.buffer], {type:photo.type || inferImageTypeFromName(suggestedName)});
  const saveTarget=await chooseImageSaveTarget(suggestedName, photo.type || inferImageTypeFromName(suggestedName));
  if(saveTarget && saveTarget.kind === 'cancelled') return;
  const saved=await writeBlobToSaveTarget(saveTarget, blob, suggestedName);
  alert(t('singlePhotoExported') + ': ' + (saved && saved.name ? saved.name : suggestedName));
}
async function importSinglePhotoZip(e){
  const file=e.target.files && e.target.files[0];
  const targetIndex=state.singlePhotoImportIndex;
  e.target.value='';
  state.singlePhotoImportIndex=-1;
  if(!file || targetIndex<0 || !state.photos[targetIndex]) return;
  if(isAlbumLocked()) return alert(t('singlePhotoLocked'));
  if(!file.type || !file.type.startsWith('image/')) return alert(t('singlePhotoImportError'));
  if(!confirm(t('singlePhotoImportConfirm'))) return;
  try{
    const buffer=await file.arrayBuffer();
    const photo=state.photos[targetIndex];
    const type=file.type || inferImageTypeFromName(file.name, photo.type || 'image/jpeg');
    try{ if(photo.url) URL.revokeObjectURL(photo.url); }catch(err){}
    photo.name=safeName(file.name || photo.name || ('photo_'+String(targetIndex+1).padStart(2,'0')+'.'+extFromType(type,'jpg')));
    // Importa solo la foto: titolo, descrizione, punti, note e testi restano invariati.
    photo.type=type;
    photo.buffer=buffer;
    photo.url=URL.createObjectURL(new Blob([buffer], {type}));
    state.currentIndex=targetIndex;
    state.selectedSpot=null;
    if(state.interactionMode==='edit') state.editPhotoMetaVisible=true;
    setDirty();
    renderAll();
    alert(t('singlePhotoImported') + ': ' + (photo.title || photo.name || ''));
  }catch(err){
    console.error(err);
    alert(t('singlePhotoImportError'));
  }
}


function showVerifyPathDialog(){
  if(isAlbumLocked()) return;
  const old=document.getElementById('verifyPathOverlay');
  if(old) old.remove();
  const overlay=document.createElement('div');
  overlay.id='verifyPathOverlay';
  overlay.className='guide-overlay';

  const box=document.createElement('div');
  box.className='guide-box verify-path-box';

  const header=document.createElement('div');
  header.className='guide-header';
  const title=document.createElement('h2');
  title.textContent=t('verifyPathTitle');
  const close=document.createElement('button');
  close.textContent='×';
  close.type='button';
  close.addEventListener('click',()=>overlay.remove());
  header.append(title, close);

  const body=document.createElement('div');
  body.className='guide-body';
  const row=document.createElement('div');
  row.className='verify-path-row';
  const label=document.createElement('label');
  label.htmlFor='verifyPathRepeatLimit';
  label.textContent=t('allowedRepeats');
  const input=document.createElement('input');
  input.id='verifyPathRepeatLimit';
  input.type='number';
  input.min='0';
  input.max='5';
  input.step='1';
  input.value=String(clampAllowedPathRepeats(state.settings.allowedPathRepeats ?? 0));
  row.append(label, input);
  body.append(row);

  const footer=document.createElement('div');
  footer.className='guide-footer';
  const cancel=document.createElement('button');
  cancel.type='button';
  cancel.textContent=t('cancel');
  const run=document.createElement('button');
  run.type='button';
  run.className='primary';
  run.textContent=t('runCheck');

  cancel.addEventListener('click',()=>overlay.remove());
  run.addEventListener('click',()=>{
    let allowed=Number(input.value);
    if(!Number.isFinite(allowed)) allowed=0;
    allowed=Math.max(0, Math.min(5, Math.round(allowed)));
    overlay.remove();
    verifyPath(allowed);
  });

  footer.append(cancel, run);
  box.append(header, body, footer);
  overlay.appendChild(box);
  overlay.addEventListener('click', ev=>{ if(ev.target===overlay) overlay.remove(); });
  document.body.appendChild(overlay);
  input.focus();
  input.select();
}

function verifyPath(allowedRepeats=1){
  if(isAlbumLocked()) return;
  const allowed=clampAllowedPathRepeats(allowedRepeats);
  state.settings.allowedPathRepeats=allowed;
  const built=buildCurrentPresentationPath(Math.max(0,state.currentIndex), allowed);
  state.pathWarningIds=built.warningIds || new Set();
  state.pathProblemDetails=built.problemDetails || new Map();
  renderPhotoList();
  renderCurrentPhoto();
  setDirty();
  if(!state.pathWarningIds.size){
    alert(t('pathOk'));
    return;
  }
  const names=state.photos
    .filter(p=>state.pathWarningIds.has(p.id))
    .map(p=>{
      const actual=(built.occurrenceCounts && built.occurrenceCounts.get(p.id)) || 0;
      const attempted=(built.attemptedCounts && built.attemptedCounts.get(p.id)) || actual;
      const details=(state.pathProblemDetails && state.pathProblemDetails.get(p.id) || []).join('; ');
      return `${p.title || p.name} — percorso: ${actual}, richieste: ${attempted}${details ? ' — '+details : ''}`;
    })
    .join('\n- ');
  alert(t('pathProblems')+' '+state.pathWarningIds.size+'\\n\\n- '+names);
}


function renderMusicList(){
  const box=$('musicList'); if(!box) return; box.innerHTML='';
  state.musicTracks.forEach((m,i)=>{
    const item=document.createElement('div'); item.className='music-item' + (i===state.activeMusicIndex?' active':'');
    const title=document.createElement('div'); title.className='music-title'; title.textContent=m.name;
    const sub=document.createElement('div'); sub.className='music-sub'; sub.textContent=i===state.activeMusicIndex ? t('selectedMusic') : '';
    const actions=document.createElement('div'); actions.className='music-actions';
    const use=document.createElement('button'); use.textContent=t('playThis'); use.addEventListener('click', ev=>{ ev.stopPropagation(); setActiveMusic(i); });
    const del=document.createElement('button'); del.className='danger'; del.textContent=t('delete'); del.addEventListener('click', ev=>{ ev.stopPropagation(); deleteMusic(i); });
    actions.appendChild(use); actions.appendChild(del); item.appendChild(title); item.appendChild(sub); item.appendChild(actions);
    item.addEventListener('click',()=>setActiveMusic(i)); box.appendChild(item);
  });
}
function setActiveMusic(i){ state.activeMusicIndex=i; loadActiveMusic(); setDirty(); updateMusicName(); renderMusicList(); renderSlide(); }
function deleteMusic(i){
  if(!confirm(t('confirmDeleteMusic'))) return;
  const m=state.musicTracks[i]; if(m && m.url) URL.revokeObjectURL(m.url);
  state.musicTracks.splice(i,1);
  if(state.activeMusicIndex >= state.musicTracks.length) state.activeMusicIndex = Math.max(0, state.musicTracks.length-1);
  loadActiveMusic(); setDirty(); updateMusicName(); renderMusicList(); renderSlide();
}


function cloneSpot(spot){ return JSON.parse(JSON.stringify(spot)); }
function pushSpotUndo(photo){
  if(!photo) return;
  state.undoStack.push({ photoId: photo.id, spots: (photo.spots || []).map(cloneSpot) });
  if(state.undoStack.length > 30) state.undoStack.shift();
}
function undoLastSpotChange(){
  const snap = state.undoStack.pop();
  if(!snap){ alert(t('noUndo')); return; }
  const photo = findPhotoById(snap.photoId);
  if(!photo) return;
  photo.spots = snap.spots.map(cloneSpot);
  state.moveSpot = null;
  setDirty();
  renderAll();
}
function closeSpotMenu(){ const old=document.getElementById('spotMenu'); if(old) old.remove(); }
function closeNotePopup(){ const old=document.getElementById('notePopup'); if(old) old.remove(); }
function showNotePopup(ev, spot, editable=false){
  closeSpotMenu(); closeNotePopup();
  const p=currentPhoto(); if(!p || !spot) return;
  setSelectedSpot(p.id, spot.id);
  renderSpotList(); renderPins($('pinLayer'), p);
  const popup=document.createElement('div'); popup.id='notePopup'; popup.className='note-popup';
  const header=document.createElement('div'); header.className='note-popup-header';
  const title=document.createElement('strong'); title.textContent=t('notePoint');
  const close=document.createElement('button'); close.type='button'; close.className='note-popup-close'; close.textContent='×'; close.title=t('close'); close.addEventListener('click', closeNotePopup);
  header.append(title, close); popup.appendChild(header);
  if(editable && !isAlbumLocked()){
    const textarea=document.createElement('textarea'); textarea.className='note-popup-textarea'; textarea.value=spot.text || ''; textarea.placeholder=t('notePlaceholder');
    const actions=document.createElement('div'); actions.className='note-popup-actions';
    const save=document.createElement('button'); save.type='button'; save.className='primary'; save.textContent=t('saveNote');
    save.addEventListener('click',()=>{ pushSpotUndo(p); spot.text=textarea.value; setDirty(); closeNotePopup(); renderAll(); });
    actions.appendChild(save); popup.append(textarea, actions); setTimeout(()=>textarea.focus(),0);
  } else {
    const body=document.createElement('div'); body.className='note-popup-body'; body.textContent=spot.text || '';
    popup.appendChild(body);
  }
  document.body.appendChild(popup);
  const rect=popup.getBoundingClientRect();
  const x=ev && Number.isFinite(ev.clientX) ? ev.clientX : window.innerWidth/2;
  const y=ev && Number.isFinite(ev.clientY) ? ev.clientY : window.innerHeight/2;
  popup.style.left=Math.max(8, Math.min(x+12, window.innerWidth-rect.width-8))+'px';
  popup.style.top=Math.max(8, Math.min(y+12, window.innerHeight-rect.height-8))+'px';
}

function showSpotMenu(ev, spot, index){
  ev.preventDefault(); ev.stopPropagation(); closeSpotMenu();
  if(isAlbumLocked()) return;
  const p=currentPhoto(); if(!p) return;
  setSelectedSpot(p.id, spot.id);
  renderSpotList(); renderPins($('pinLayer'), p);
  const menu=document.createElement('div'); menu.id='spotMenu'; menu.className='spot-menu';
  const addButton=(label, handler, cls='')=>{ const b=document.createElement('button'); b.textContent=label; if(cls) b.className=cls; b.addEventListener('click', e=>{ e.stopPropagation(); closeSpotMenu(); handler(); }); menu.appendChild(b); };
  addButton(t('edit'), ()=>editSpot(spot));
  addButton(t('copy'), ()=>{ setSpotClipboard('copy', spot, {photoId:p.id, index}); });
  addButton(t('cut'), ()=>{ pushSpotUndo(p); const i=p.spots.indexOf(spot); setSpotClipboard('cut', spot, {photoId:p.id, index:i}); if(i>=0) p.spots.splice(i,1); setSelectedSpot(null,null); setDirty(); renderAll(); });
  addButton(t('move'), ()=>{ state.moveSpot={photoId:p.id, spotId:spot.id}; setSelectedSpot(p.id, spot.id); $('editorHint').textContent=t('moveMode'); renderSpotList(); renderPins($('pinLayer'), p); });
  addButton(t('undo'), undoLastSpotChange);
  addButton(t('delete'), ()=>{ if(!confirm(t('confirmDeletePoint'))) return; pushSpotUndo(p); const i=p.spots.indexOf(spot); if(i>=0) p.spots.splice(i,1); if(isSelectedSpot(p.id, spot.id)) setSelectedSpot(null,null); setDirty(); renderAll(); }, 'danger');
  document.body.appendChild(menu);
  const rect=menu.getBoundingClientRect();
  menu.style.left=Math.min(ev.clientX, window.innerWidth-rect.width-8)+'px';
  menu.style.top=Math.min(ev.clientY, window.innerHeight-rect.height-8)+'px';
}
async function editSpot(spot){
  const p=currentPhoto(); if(!p) return;
  if(isTextSpot(spot)){
    const edited=await askFreeTextSpot(spot);
    if(!edited) return;
    pushSpotUndo(p);
    spot.text=edited.text;
    setFreeTextStyle(spot, edited.color, edited.fontSize);
  } else if(isCrawlSpot(spot)){
    const edited=await askCrawlSpot(spot);
    if(!edited) return;
    pushSpotUndo(p);
    spot.type='crawl';
    spot.text=edited.text;
    setCrawlLayout(setFreeTextStyle(spot, edited.color, edited.fontSize), edited.boxWidthPct, edited.boxHeightPct, edited.scrollSpeed, edited.crawlMode, edited.crawlDirection, edited.continuous);
  } else if(isNoteSpot(spot)){
    showNotePopup(null, spot, true);
    return;
  } else if(isPhotoSpot(spot)){
    pushSpotUndo(p);
    const list=state.photos.map((ph,i)=>`${i+1}) ${ph.title || ph.name}`).join('\n');
    const currentIndex=state.photos.findIndex(ph=>ph.id===spot.targetPhotoId)+1;
    const answer=prompt(`${t('chooseLinkedPhotoFromList')}\n${list}`, currentIndex>0 ? String(currentIndex) : '');
    if(answer !== null && answer !== ''){
      const n=Number(answer);
      if(Number.isInteger(n) && n>=1 && n<=state.photos.length) spot.targetPhotoId=state.photos[n-1].id;
      else alert(t('invalidPhotoNumber'));
    }
  }
  setDirty(); renderAll();
}
function pasteSpotAt(photo, pt){
  if(!state.spotClipboard) return false;
  pushSpotUndo(photo);
  const pasted=cloneSpot(state.spotClipboard.spot);
  pasted.id=uid(); pasted.x=pt.x; pasted.y=pt.y;
  photo.spots.push(pasted);
  const wasCut = state.spotClipboard.mode === 'cut';
  state.spotClipboard = wasCut ? null : state.spotClipboard;
  setSelectedSpot(photo.id, pasted.id);
  setDirty(); renderAll();
  return true;
}

function isMoveTarget(photoId, spotId){
  return !!(state.moveSpot && state.moveSpot.photoId === photoId && state.moveSpot.spotId === spotId);
}
function startSpotDrag(ev, photo, spot, layer, dragElements){
  if(!photo || !spot || !layer || layer.id !== 'pinLayer') return;
  if(state.interactionMode !== 'edit' || isAlbumLocked()) return;
  if(!isMoveTarget(photo.id, spot.id)) return;
  if(ev.pointerType === 'mouse' && ev.button !== 0) return;
  ev.preventDefault();
  ev.stopPropagation();
  state.suppressSpotClickUntil = Date.now() + 600;
  closeSpotMenu();
  closeNotePopup();
  const els = (Array.isArray(dragElements) ? dragElements : [dragElements]).filter(Boolean);
  els.forEach(el=>el.classList.add('dragging'));
  let undoSaved=false;
  let moved=false;
  const updatePosition = (clientX, clientY) => {
    const pt = pointFromMouse({clientX, clientY});
    if(!pt) return;
    if(!undoSaved){ pushSpotUndo(photo); undoSaved=true; }
    moved=true;
    spot.x=pt.x;
    spot.y=pt.y;
    els.forEach(el=>{
      el.dataset.x=String(spot.x);
      el.dataset.y=String(spot.y);
    });
    positionPins(layer);
  };
  const onMove = e => {
    e.preventDefault();
    updatePosition(e.clientX, e.clientY);
  };
  const finish = e => {
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', finish);
    document.removeEventListener('pointercancel', finish);
    els.forEach(el=>el.classList.remove('dragging'));
    if(moved){
      state.suppressSpotClickUntil = Date.now() + 600;
      state.moveSpot=null;
      setDirty();
      renderAll();
      $('editorHint').textContent=t('pointMoved');
    }else{
      $('editorHint').textContent=t('moveMode');
    }
  };
  try{ ev.currentTarget.setPointerCapture(ev.pointerId); }catch(_e){}
  document.addEventListener('pointermove', onMove, {passive:false});
  document.addEventListener('pointerup', finish);
  document.addEventListener('pointercancel', finish);
}
function startCrawlBoxResize(ev, photo, spot, layer, boxEl){
  if(!photo || !spot || !layer || layer.id !== 'pinLayer' || !boxEl) return;
  if(state.interactionMode !== 'edit' || isAlbumLocked()) return;
  if(ev.pointerType === 'mouse' && ev.button !== 0) return;
  ev.preventDefault();
  ev.stopPropagation();
  state.suppressSpotClickUntil = Date.now() + 600;
  closeSpotMenu();
  closeNotePopup();
  const img=$('mainImage');
  if(!img || !img.src) return;
  const imgRect=img.getBoundingClientRect();
  if(!imgRect.width || !imgRect.height) return;
  const layerRect=layer.getBoundingClientRect();
  const mode=getCrawlMode(spot);
  pushSpotUndo(photo);
  let resized=false;
  const updateSize=(clientX, clientY)=>{
    const centerX=imgRect.left + imgRect.width * (Number(spot.x)||50) / 100;
    const centerY=imgRect.top + imgRect.height * (Number(spot.y)||50) / 100;
    const widthRef=imgRect.width;
    const widthPct=cleanCrawlBoxWidthPct((Math.abs(clientX-centerX)*2 / widthRef) * 100);
    const heightPct=cleanCrawlBoxHeightPct((Math.abs(clientY-centerY)*2 / imgRect.height) * 100);
    setCrawlLayout(spot, widthPct, heightPct, getCrawlSpeed(spot), getCrawlMode(spot), getCrawlDirection(spot));
    boxEl.dataset.boxw=String(widthPct);
    boxEl.dataset.boxh=String(heightPct);
    resized=true;
    positionPins(layer);
  };
  const onMove=e=>{ e.preventDefault(); updateSize(e.clientX, e.clientY); };
  const finish=()=>{
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', finish);
    document.removeEventListener('pointercancel', finish);
    if(resized){
      setDirty();
      renderAll();
      $('editorHint').textContent=t('pointMoved');
    }
  };
  try{ ev.currentTarget.setPointerCapture(ev.pointerId); }catch(_e){}
  document.addEventListener('pointermove', onMove, {passive:false});
  document.addEventListener('pointerup', finish);
  document.addEventListener('pointercancel', finish);
}

function moveSelectedSpotTo(pt){
  const move=state.moveSpot; if(!move) return false;
  const photo=findPhotoById(move.photoId); if(!photo) { state.moveSpot=null; return false; }
  const spot=(photo.spots||[]).find(s=>s.id===move.spotId); if(!spot){ state.moveSpot=null; return false; }
  pushSpotUndo(photo);
  spot.x=pt.x; spot.y=pt.y;
  state.moveSpot=null;
  setDirty(); renderAll();
  $('editorHint').textContent=t('pointMoved');
  return true;
}

function renderCurrentPhoto(){
  const p=currentPhoto(); const stage=$('imageStage'); const img=$('mainImage');
  $('photoTitle').value = p ? (p.title || '') : ''; $('photoDescription').value = p ? (p.description || '') : '';
  updateSelectedPhotoPanelVisibility();
  updatePathDiagnosticBox(p);
  if(!p){ stage.classList.add('empty'); img.removeAttribute('src'); $('pinLayer').innerHTML=''; updateButtons(); return; }
  stage.classList.remove('empty'); img.src = p.url; renderPins($('pinLayer'), p); updateButtons();
  drawEditorMap();
}
function updatePathDiagnosticBox(photo){
  let box=document.getElementById('pathDiagnosticBox');
  const desc=document.getElementById('photoDescription');
  if(!box && desc){
    box=document.createElement('div');
    box.id='pathDiagnosticBox';
    box.className='path-diagnostic-box hidden';
    desc.insertAdjacentElement('afterend', box);
  }
  if(!box) return;
  const details=photo && state.pathProblemDetails ? (state.pathProblemDetails.get(photo.id) || []) : [];
  if(!photo || !details.length){
    box.classList.add('hidden');
    box.innerHTML='';
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML='';
  const title=document.createElement('strong');
  title.textContent='Verifica Percorso';
  box.appendChild(title);
  details.forEach(text=>{
    box.appendChild(document.createElement('br'));
    box.appendChild(document.createTextNode('• '+text));
  });
}
function renderPins(layer, photo){
  layer.innerHTML=''; if(!photo) return;
  photo.spots.forEach((rawSpot,idx)=>{
    const s=normalizeFreeTextSpot(rawSpot);
    if(isCrawlSpot(s)){
      s.type='crawl';
      if(layer.id !== 'pinLayer') return;
      const crawlEl=document.createElement('div');
      crawlEl.className='crawl-static-overlay';
      if(isSelectedSpot(photo.id, s.id)) crawlEl.classList.add('selected');
      if(isMoveTarget(photo.id, s.id)) crawlEl.classList.add('move-active');
      crawlEl.textContent=isCrawlStopMarker(s) ? 'stop' : (getCrawlText(s) || t('titolatorDefault'));
      crawlEl.style.color=getFreeTextColor(s);
      crawlEl.style.fontSize=getFreeTextSize(s)+'px';
      crawlEl.style.whiteSpace=getCrawlMode(s)==='horizontal' ? 'nowrap' : 'pre-wrap';
      crawlEl.style.width=getCrawlBoxWidthPct(s)+'%';
      crawlEl.style.height=getCrawlBoxHeightPct(s)+'%';
      crawlEl.style.overflow='hidden';
      crawlEl.dataset.x=s.x; crawlEl.dataset.y=s.y; crawlEl.dataset.index=idx; crawlEl.dataset.boxw=getCrawlBoxWidthPct(s); crawlEl.dataset.boxh=getCrawlBoxHeightPct(s); crawlEl.dataset.mode=getCrawlMode(s);
      crawlEl.addEventListener('pointerdown', ev=>startSpotDrag(ev, photo, s, layer, [crawlEl]));
      crawlEl.addEventListener('click', ev=>{
        ev.stopPropagation();
        if(layer.id === 'pinLayer'){
          if(state.suppressSpotClickUntil && Date.now() < state.suppressSpotClickUntil) return;
          if(isMoveTarget(photo.id, s.id)) return;
          setSelectedSpot(photo.id, s.id);
          renderSpotList();
          renderPins($('pinLayer'), photo);
        }
      });
      crawlEl.addEventListener('contextmenu', ev=>{
        ev.preventDefault(); ev.stopPropagation();
        if(layer.id !== 'pinLayer') return;
        if(state.interactionMode !== 'edit' || isAlbumLocked()) return;
        setSelectedSpot(photo.id, s.id);
        renderSpotList();
        renderPins($('pinLayer'), photo);
        showSpotMenu(ev, s, idx);
      });
      if(layer.id==='pinLayer' && state.interactionMode === 'edit' && !isAlbumLocked() && isSelectedSpot(photo.id, s.id)){
        const resizeHandle=document.createElement('span');
        resizeHandle.className='crawl-resize-handle';
        resizeHandle.title='Ridimensiona riquadro';
        resizeHandle.addEventListener('pointerdown', ev=>startCrawlBoxResize(ev, photo, s, layer, crawlEl));
        crawlEl.appendChild(resizeHandle);
      }
      layer.appendChild(crawlEl);
      return;
    }
    if(isTextSpot(s)){
      const textEl=document.createElement('div');
      textEl.className='free-text-overlay';
      if(isSelectedSpot(photo.id, s.id)) textEl.classList.add('selected');
      if(isMoveTarget(photo.id, s.id)) textEl.classList.add('move-active');
      textEl.textContent=s.text || t('freeTextDefault');
      textEl.style.color=getFreeTextColor(s);
      textEl.style.fontSize=getFreeTextSize(s)+'px';
      textEl.dataset.x=s.x; textEl.dataset.y=s.y; textEl.dataset.index=idx;
      textEl.addEventListener('pointerdown', ev=>startSpotDrag(ev, photo, s, layer, [textEl]));
      textEl.addEventListener('click', ev=>{
        ev.stopPropagation();
        if(layer.id === 'pinLayer'){
          if(state.suppressSpotClickUntil && Date.now() < state.suppressSpotClickUntil) return;
          if(isMoveTarget(photo.id, s.id)) return;
          setSelectedSpot(photo.id, s.id);
          renderSpotList();
          renderPins($('pinLayer'), photo);
        }
      });
      textEl.addEventListener('contextmenu', ev=>{
        ev.preventDefault(); ev.stopPropagation();
        if(layer.id !== 'pinLayer') return;
        if(state.interactionMode !== 'edit' || isAlbumLocked()) return;
        setSelectedSpot(photo.id, s.id);
        renderSpotList();
        renderPins($('pinLayer'), photo);
        showSpotMenu(ev, s, idx);
      });
      layer.appendChild(textEl);
      return;
    }
    const pin=document.createElement('div');
    pin.className='pin ' + (isPhotoSpot(s) ? 'photo' : 'note');
    if(isSelectedSpot(photo.id, s.id)) pin.classList.add('selected');
    if(isMoveTarget(photo.id, s.id)) pin.classList.add('move-active');
    pin.textContent=idx+1; pin.dataset.x=s.x; pin.dataset.y=s.y; pin.dataset.index=idx;
    const tip=document.createElement('div'); tip.className='tooltip hidden'; tip.dataset.x=s.x; tip.dataset.y=s.y;
    tip.textContent = spotLabel(s);
    pin.addEventListener('pointerdown', ev=>startSpotDrag(ev, photo, s, layer, [pin, tip]));
    pin.addEventListener('click',ev=>{
      ev.stopPropagation();
      if(layer.id === 'pinLayer'){
        if(state.suppressSpotClickUntil && Date.now() < state.suppressSpotClickUntil) return;
        if(isMoveTarget(photo.id, s.id)) return;
        setSelectedSpot(photo.id, s.id);
        renderSpotList();
        // Click sinistro su nota → mostra popup nota
        if(isNoteSpot(s)){
          showNotePopup(ev, s, state.interactionMode === 'edit' && !isAlbumLocked());
          return;
        }
        // Click sinistro su punto foto → naviga alla foto collegata (sia edita che naviga)
        if(isPhotoSpot(s) && s.targetPhotoId){ goToPhotoId(s.targetPhotoId, false); return; }
        return;
      }
      if(layer.id === 'slidePinLayer'){
        if(isPhotoSpot(s) && s.targetPhotoId){ goToPhotoId(s.targetPhotoId, true); return; }
        if(state.slideshowRunning){
          state.slideshowRunning=false;
          clearTimeout(state.slideTimer);
          state.slideTimer=null;
          $('slideStage').classList.remove('playing');
          $('slidePlayBtn').textContent=t('startPresentation');
        }
      }
      document.querySelectorAll('.tooltip').forEach(x=>x.classList.add('hidden')); tip.classList.toggle('hidden');
    });
    // Tasto destro su pin nella foto → menu del punto (solo in edita)
    pin.addEventListener('contextmenu', pinEv => {
      pinEv.preventDefault();
      pinEv.stopPropagation();
      if(layer.id !== 'pinLayer') return;
      if(state.interactionMode !== 'edit' || isAlbumLocked()) return;
      setSelectedSpot(photo.id, s.id);
      renderSpotList();
      renderPins($('pinLayer'), photo);
      showSpotMenu(pinEv, s, idx);
    });
    layer.appendChild(pin); layer.appendChild(tip);
  });
  positionPins(layer);
}
function linkedPhotoLabel(targetPhotoId){
  const idx = state.photos.findIndex(ph => ph.id === targetPhotoId);
  const target = idx >= 0 ? state.photos[idx] : null;
  if(!target) return '';
  const n = String(idx + 1).padStart(2, '0');
  return `${t('photoRef')}: ${n} - ${target.title || target.name}`;
}
function spotLabel(s){
  if(isCrawlSpot(s)) return [t('titolatorPoint'), s.text || ''].filter(Boolean).join('\n');
  if(isTextSpot(s)) return [t('freeTextPoint'), s.text || ''].filter(Boolean).join('\n');
  const base = isPhotoSpot(s) ? t('photoPoint') : t('notePoint');
  if(isPhotoSpot(s)) return [base, linkedPhotoLabel(s.targetPhotoId)].filter(Boolean).join('\n');
  return [base, s.text || ''].filter(Boolean).join('\n');
}
function positionPins(layer){
  if(!layer || !layer.children.length) return;
  const img = layer.id === 'slidePinLayer' ? $('slideImage') : $('mainImage');
  if(!img || !img.src) return;
  const layerRect = layer.getBoundingClientRect();
  const imgRect = img.getBoundingClientRect();
  [...layer.children].forEach(el=>{
    const x=Number(el.dataset.x), y=Number(el.dataset.y);
    if(!Number.isFinite(x)||!Number.isFinite(y)) return;
    el.style.left = (imgRect.left - layerRect.left + imgRect.width * x / 100) + 'px';
    el.style.top = (imgRect.top - layerRect.top + imgRect.height * y / 100) + 'px';
    const bw=Number(el.dataset.boxw), bh=Number(el.dataset.boxh);
    const mode=(el.dataset.mode||'').toLowerCase();
    const widthRef=imgRect.width;
    if(Number.isFinite(bw)) el.style.width = Math.max(80, widthRef * bw / 100) + 'px';
    if(Number.isFinite(bh)) el.style.height = Math.max(24, imgRect.height * bh / 100) + 'px';
  });
}
function pointFromMouse(e){
  const img=$('mainImage'); if(!img.src) return null; const rect=img.getBoundingClientRect();
  if(e.clientX<rect.left || e.clientX>rect.right || e.clientY<rect.top || e.clientY>rect.bottom) return null;
  const x=((e.clientX-rect.left)/rect.width)*100; const y=((e.clientY-rect.top)/rect.height)*100;
  return {x:+x.toFixed(2), y:+y.toFixed(2)};
}
function chooseNewPointType(){
  return new Promise(resolve=>{
    const old=document.getElementById('pointChoiceOverlay'); if(old) old.remove();
    const overlay=document.createElement('div'); overlay.id='pointChoiceOverlay'; overlay.className='point-choice-overlay';
    const box=document.createElement('div'); box.className='point-choice-box';
    const title=document.createElement('div'); title.className='point-choice-title'; title.textContent=t('choosePointKind');
    const actions=document.createElement('div'); actions.className='point-choice-actions';
    const makeBtn=(label,value,cls='')=>{
      const b=document.createElement('button'); b.type='button'; b.textContent=label; if(cls) b.className=cls;
      b.addEventListener('click',()=>{ overlay.remove(); resolve(value); });
      actions.appendChild(b);
    };
    makeBtn(t('photoPoint'), 'photo', 'primary');
    makeBtn(t('notePoint'), 'note');
    makeBtn(t('freeTextPoint'), 'text');
    makeBtn(t('titolatorPoint'), 'crawl');
    makeBtn(t('cancel'), null);
    box.append(title, actions); overlay.appendChild(box); document.body.appendChild(overlay);
    overlay.addEventListener('click', ev=>{ if(ev.target===overlay){ overlay.remove(); resolve(null); } });
  });
}
function beginExistingPhotoSelection(originPhoto, pt){
  if(!originPhoto || !pt) return;
  state.pendingPhotoLink={originPhotoId:originPhoto.id, x:pt.x, y:pt.y, targetPhotoId:null};
  $('editorHint').textContent=t('selectExistingPhotoForPoint');
  renderAll();
}
function renderLinkPhotoSelection(){
  const bar=$('linkPhotoConfirmBar'); if(!bar) return;
  const pending=state.pendingPhotoLink;
  if(!pending || isAlbumLocked()){
    bar.classList.add('hidden');
    return;
  }
  const origin=findPhotoById(pending.originPhotoId);
  const target=findPhotoById(pending.targetPhotoId);
  const text=$('linkPhotoConfirmText');
  if(text){
    text.textContent=target ? `${t('selectedLinkedPhotoPreview')} ${target.title || target.name}` : t('selectExistingPhotoForPoint');
  }
  const confirmBtn=$('confirmLinkPhotoBtn');
  if(confirmBtn) confirmBtn.disabled=!origin || !target || origin.id===target.id;
  bar.classList.remove('hidden');
}
function confirmPendingPhotoLink(){
  const pending=state.pendingPhotoLink; if(!pending || isAlbumLocked()) return;
  const origin=findPhotoById(pending.originPhotoId);
  const target=findPhotoById(pending.targetPhotoId);
  if(!origin || !target || origin.id===target.id) return;
  pushSpotUndo(origin);
  origin.spots.push({id:uid(), type:'photo', targetPhotoId:target.id, x:pending.x, y:pending.y, text:target.title || target.name || t('photoPoint')});
  const originIndex=state.photos.findIndex(ph=>ph.id===origin.id);
  state.pendingPhotoLink=null;
  if(originIndex>=0) state.currentIndex=originIndex;
  setDirty();
  $('editorHint').textContent=t('editorHint');
  renderAll();
}
function cancelPendingPhotoLink(){
  const pending=state.pendingPhotoLink;
  if(pending){
    const originIndex=state.photos.findIndex(ph=>ph.id===pending.originPhotoId);
    state.pendingPhotoLink=null;
    if(originIndex>=0) state.currentIndex=originIndex;
  }
  renderAll();
}

function previousPhotoInEditor(){
  if(!state.photos.length) return;
  closeSpotMenu(); closeNotePopup();
  if(goBackThroughPhotoHistory()) return;
  state.currentIndex=(state.currentIndex-1+state.photos.length)%state.photos.length;
  state.selectedSpot=null;
  renderAll();
}
function goToParentPhotoInEditorFromEmptyClick(e){
  if(e && (e.target.closest('.pin') || e.target.closest('.tooltip') || e.target.closest('.free-text-overlay') || e.target.closest('.crawl-static-overlay'))) return false;
  if(state.interactionMode !== 'edit' || isAlbumLocked() || state.pendingPhotoLink) return false;
  const p=currentPhoto(); if(!p) return false;
  closeSpotMenu(); closeNotePopup();
  return goToMainContinuationFromPhoto(p.id);
}
function askFreeTextSpot(existing={}){
  return new Promise(resolve=>{
    const old=document.getElementById('freeTextOverlay'); if(old) old.remove();
    const overlay=document.createElement('div'); overlay.id='freeTextOverlay'; overlay.className='point-choice-overlay';
    const box=document.createElement('div'); box.className='point-choice-box free-text-box';
    const title=document.createElement('div'); title.className='point-choice-title'; title.textContent=t('freeTextTitle');
    const textLabel=document.createElement('label'); textLabel.className='field-label'; textLabel.textContent=t('freeTextPoint');
    const input=document.createElement('input'); input.type='text'; input.maxLength=120; input.value=existing.text || ''; input.placeholder=t('freeTextPlaceholder');
    const grid=document.createElement('div'); grid.className='free-text-grid';
    const colorWrap=document.createElement('div');
    const colorLabel=document.createElement('label'); colorLabel.className='field-label'; colorLabel.textContent=t('freeTextColor');
    const color=document.createElement('input'); color.type='color'; color.value=getFreeTextColor(existing);
    colorWrap.append(colorLabel, color);
    const sizeWrap=document.createElement('div');
    const sizeLabel=document.createElement('label'); sizeLabel.className='field-label'; sizeLabel.textContent=t('freeTextSize');
    const size=document.createElement('input'); size.type='number'; size.min='12'; size.max='96'; size.step='1'; size.value=String(getFreeTextSize(existing));
    sizeWrap.append(sizeLabel, size);
    grid.append(colorWrap, sizeWrap);
    const preview=document.createElement('div'); preview.className='free-text-preview';
    const updatePreview=()=>{
      preview.textContent=input.value || t('freeTextDefault');
      preview.style.color=cleanFreeTextColor(color.value);
      preview.style.fontSize=cleanFreeTextSize(size.value)+'px';
    };
    input.addEventListener('input', updatePreview);
    color.addEventListener('input', updatePreview);
    size.addEventListener('input', updatePreview);
    updatePreview();
    const actions=document.createElement('div'); actions.className='point-choice-actions';
    const cancel=document.createElement('button'); cancel.type='button'; cancel.textContent=t('cancel');
    const ok=document.createElement('button'); ok.type='button'; ok.className='primary'; ok.textContent=t('saveFreeText');
    cancel.addEventListener('click',()=>{ overlay.remove(); resolve(null); });
    ok.addEventListener('click',()=>{
      const text=String(input.value || '').trim();
      if(!text){ input.focus(); return; }
      overlay.remove(); resolve({text, color:cleanFreeTextColor(color.value), fontSize:cleanFreeTextSize(size.value)});
    });
    actions.append(cancel, ok);
    box.append(title, textLabel, input, grid, preview, actions);
    overlay.appendChild(box); document.body.appendChild(overlay);
    setTimeout(()=>input.focus(),0);
    overlay.addEventListener('click', ev=>{ if(ev.target===overlay){ overlay.remove(); resolve(null); } });
    input.addEventListener('keydown', ev=>{ if(ev.key==='Enter'){ ev.preventDefault(); ok.click(); } });
  });
}

function askCrawlSpot(existing={}){
  return new Promise(resolve=>{
    const old=document.getElementById('crawlOverlay'); if(old) old.remove();
    const overlay=document.createElement('div'); overlay.id='crawlOverlay'; overlay.className='point-choice-overlay';
    const box=document.createElement('div'); box.className='point-choice-box free-text-box';
    const title=document.createElement('div'); title.className='point-choice-title'; title.textContent=t('titolatorTitle');
    const textLabel=document.createElement('label'); textLabel.className='field-label'; textLabel.textContent=t('titolatorPoint');
    const input=document.createElement('textarea'); input.rows=7; input.maxLength=1200; input.value=existing.text || ''; input.placeholder=t('titolatorPlaceholder'); input.style.width='100%'; input.style.resize='vertical';
    const grid=document.createElement('div'); grid.className='free-text-grid titolator-grid';
    const colorWrap=document.createElement('div');
    const colorLabel=document.createElement('label'); colorLabel.className='field-label'; colorLabel.textContent=t('freeTextColor');
    const color=document.createElement('input'); color.type='color'; color.value=getFreeTextColor(existing);
    colorWrap.append(colorLabel, color);
    const sizeWrap=document.createElement('div');
    const sizeLabel=document.createElement('label'); sizeLabel.className='field-label'; sizeLabel.textContent=t('freeTextSize');
    const size=document.createElement('input'); size.type='number'; size.min='12'; size.max='96'; size.step='1'; size.value=String(getFreeTextSize(existing));
    sizeWrap.append(sizeLabel, size);
    const widthWrap=document.createElement('div');
    const widthLabel=document.createElement('label'); widthLabel.className='field-label'; widthLabel.textContent=t('titolatorWidth');
    const width=document.createElement('input'); width.type='number'; width.min='20'; width.max='100'; width.step='1'; width.value=String(getCrawlBoxWidthPct(existing));
    widthWrap.append(widthLabel, width);
    const heightWrap=document.createElement('div');
    const heightLabel=document.createElement('label'); heightLabel.className='field-label'; heightLabel.textContent=t('titolatorHeight');
    const height=document.createElement('input'); height.type='number'; height.min='8'; height.max='100'; height.step='1'; height.value=String(getCrawlBoxHeightPct(existing));
    heightWrap.append(heightLabel, height);
    const speedWrap=document.createElement('div');
    const speedLabel=document.createElement('label'); speedLabel.className='field-label'; speedLabel.textContent=t('titolatorSpeed');
    const speed=document.createElement('input'); speed.type='number'; speed.min='0.25'; speed.max='3'; speed.step='0.05'; speed.value=String(getCrawlSpeed(existing));
    speedWrap.append(speedLabel, speed);
    const modeWrap=document.createElement('div');
    const modeLabel=document.createElement('label'); modeLabel.className='field-label'; modeLabel.textContent=t('titolatorMode');
    const mode=document.createElement('select');
    [['vertical',t('titolatorModeVertical')],['horizontal',t('titolatorModeHorizontal')]].forEach(([v,label])=>{ const opt=document.createElement('option'); opt.value=v; opt.textContent=label; mode.appendChild(opt); });
    mode.value=getCrawlMode(existing);
    modeWrap.append(modeLabel, mode);
    const dirWrap=document.createElement('div');
    const dirLabel=document.createElement('label'); dirLabel.className='field-label'; dirLabel.textContent=t('titolatorDirection');
    const direction=document.createElement('select');
    [['rtl',t('titolatorDirRightLeft')],['ltr',t('titolatorDirLeftRight')]].forEach(([v,label])=>{ const opt=document.createElement('option'); opt.value=v; opt.textContent=label; direction.appendChild(opt); });
    direction.value=getCrawlDirection(existing);
    dirWrap.append(dirLabel, direction);
    const continuousWrap=document.createElement('label');
    continuousWrap.className='field-label';
    continuousWrap.style.display='flex';
    continuousWrap.style.alignItems='center';
    continuousWrap.style.gap='8px';
    continuousWrap.style.marginTop='4px';
    const continuous=document.createElement('input'); continuous.type='checkbox'; continuous.checked=getCrawlContinuous(existing);
    const continuousText=document.createElement('span'); continuousText.textContent=t('titolatorContinuous');
    continuousWrap.append(continuous, continuousText);
    const updateDirectionVisibility=()=>{ dirWrap.style.display = mode.value==='horizontal' ? '' : 'none'; };
    mode.addEventListener('change', updateDirectionVisibility); updateDirectionVisibility();
    grid.append(colorWrap, sizeWrap, widthWrap, heightWrap, speedWrap, modeWrap, dirWrap);
    const actions=document.createElement('div'); actions.className='point-choice-actions';
    const cancel=document.createElement('button'); cancel.type='button'; cancel.textContent=t('cancel');
    const ok=document.createElement('button'); ok.type='button'; ok.className='primary'; ok.textContent=t('saveTitolator');
    cancel.addEventListener('click',()=>{ overlay.remove(); resolve(null); });
    ok.addEventListener('click',()=>{
      const text=String(input.value || '').replace(/\r/g,'').trim();
      if(!text && !continuous.checked){ input.focus(); return; }
      overlay.remove();
      resolve({
        text,
        color:cleanFreeTextColor(color.value),
        fontSize:cleanFreeTextSize(size.value),
        boxWidthPct:cleanCrawlBoxWidthPct(width.value),
        boxHeightPct:cleanCrawlBoxHeightPct(height.value),
        scrollSpeed:cleanCrawlSpeed(speed.value),
        crawlMode:cleanCrawlMode(mode.value),
        crawlDirection:cleanCrawlDirection(direction.value),
        continuous:!!continuous.checked
      });
    });
    actions.append(cancel, ok);
    box.append(title, textLabel, input, grid, continuousWrap, actions);
    overlay.appendChild(box); document.body.appendChild(overlay);
    setTimeout(()=>input.focus(),0);
    overlay.addEventListener('click', ev=>{ if(ev.target===overlay){ overlay.remove(); resolve(null); } });
  });
}


async function addSpotFromClick(e){
  const p=currentPhoto();
  const isMoving=!!state.moveSpot;
  if(!p || state.interactionMode !== 'edit' || isAlbumLocked() || state.pendingPhotoLink) return;
  if(!isMoving && (e.target.closest('.pin') || e.target.closest('.tooltip') || e.target.closest('.free-text-overlay') || e.target.closest('.crawl-static-overlay'))) return;
  closeSpotMenu(); closeNotePopup();
  const pt=pointFromMouse(e); if(!pt) return;
  if(moveSelectedSpotTo(pt)) return;
  if(state.spotClipboard){
    if(confirm(t('pasteAsk'))){ pasteSpotAt(p, pt); return; }
  }
  const pointType = await chooseNewPointType();
  if(!pointType) return;
  if(pointType === 'photo'){
    beginExistingPhotoSelection(p, pt);
    return;
  }else if(pointType === 'text'){
    const data=await askFreeTextSpot({});
    if(!data) return;
    pushSpotUndo(p);
    const spot=setFreeTextStyle({id:uid(), type:'text', x:pt.x, y:pt.y, text:data.text}, data.color, data.fontSize);
    p.spots.push(spot);
  }else if(pointType === 'crawl' || pointType === 'titolator' || pointType === 'titolatore'){
    const data=await askCrawlSpot({});
    if(!data) return;
    pushSpotUndo(p);
    const spot=setCrawlLayout(setFreeTextStyle({id:uid(), type:'crawl', x:pt.x, y:pt.y, text:data.text}, data.color, data.fontSize), data.boxWidthPct, data.boxHeightPct, data.scrollSpeed, data.crawlMode, data.crawlDirection, data.continuous);
    spot.type='crawl';
    p.spots.push(spot);
  }else if(pointType === 'note'){
    pushSpotUndo(p);
    const text=prompt(t('notePlaceholder')) || '';
    p.spots.push({id:uid(), type:'note', x:pt.x, y:pt.y, text});
  }else{
    return;
  }
  setDirty(); renderAll();
}
function beginMovePin(e, spot, layer, pin, tip){
  e.preventDefault(); e.stopPropagation();
  const move = ev => {
    const pt=pointFromMouse(ev); if(!pt) return;
    spot.x=pt.x; spot.y=pt.y;
    pin.dataset.x=String(spot.x); pin.dataset.y=String(spot.y);
    tip.dataset.x=String(spot.x); tip.dataset.y=String(spot.y);
    positionPins(layer);
  };
  const up = ev => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); setDirty(); renderAll(); };
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', up);
}
function pickOneFile(accept){
  return new Promise(resolve=>{
    const input=document.createElement('input'); input.type='file'; input.accept=accept || '*/*';
    input.onchange=()=>resolve(input.files && input.files[0] ? input.files[0] : null);
    input.click();
  });
}
function findPhotoById(id){ return state.photos.find(p=>p.id===id) || null; }
function findPhotoCallers(targetPhotoId){
  const callers=[];
  state.photos.forEach((photo, photoIndex)=>{
    (photo.spots || []).forEach((spot, spotIndex)=>{
      if(spot && spot.type === 'photo' && spot.targetPhotoId === targetPhotoId){
        callers.push({photo, photoIndex, spot, spotIndex});
      }
    });
  });
  return callers;
}

function photoContinuationDepth(photoId, visited=new Set()){
  if(!photoId || visited.has(photoId)) return 0;
  visited.add(photoId);
  const photo=findPhotoById(photoId);
  if(!photo) return 0;
  let best=0;
  (photo.spots || []).forEach(spot=>{
    if(!spot || spot.type !== 'photo' || !spot.targetPhotoId) return;
    if(!findPhotoById(spot.targetPhotoId)) return;
    const depth=1 + photoContinuationDepth(spot.targetPhotoId, new Set(visited));
    if(depth > best) best=depth;
  });
  return best;
}
function findMainContinuationFromPhoto(photo){
  if(!photo) return null;
  const candidates=[];
  (photo.spots || []).forEach((spot, spotIndex)=>{
    if(!spot || spot.type !== 'photo' || !spot.targetPhotoId) return;
    const targetIndex=state.photos.findIndex(p=>p && p.id===spot.targetPhotoId);
    if(targetIndex < 0) return;
    const target=state.photos[targetIndex];
    const depth=photoContinuationDepth(target.id);
    candidates.push({spot, spotIndex, target, targetIndex, depth});
  });
  if(!candidates.length) return null;
  candidates.sort((a,b)=>{
    if(b.depth !== a.depth) return b.depth - a.depth;
    return a.spotIndex - b.spotIndex;
  });
  return candidates[0];
}
function goToMainContinuationFromPhoto(photoId){
  if(state.interactionMode !== 'edit' || isAlbumLocked() || state.pendingPhotoLink) return false;
  const photo=findPhotoById(photoId);
  const next=findMainContinuationFromPhoto(photo);
  if(!next) return false;
  goToPhotoId(next.target.id, false, true);
  const hint=$('editorHint');
  if(hint){
    hint.textContent=`Aperta la foto ${next.targetIndex+1} dal punto ${next.spotIndex+1}: prosecuzione principale del percorso.`;
  }
  return true;
}
function goToCallerOfPhoto(targetPhotoId){
  if(state.interactionMode !== 'edit' || isAlbumLocked() || state.pendingPhotoLink) return false;
  const callers=findPhotoCallers(targetPhotoId);
  if(!callers.length) return false;
  const current=currentPhoto();
  let caller=callers[0];
  if(current){
    const next=callers.find(c=>c.photo.id !== current.id);
    if(next) caller=next;
  }
  closeSpotMenu();
  closeNotePopup();
  clearPhotoHistory();
  state.currentIndex=caller.photoIndex;
  setSelectedSpot(caller.photo.id, caller.spot.id);
  renderAll();
  const hint=$('editorHint');
  if(hint){
    hint.textContent=`Aperta la foto ${caller.photoIndex+1}, punto ${caller.spotIndex+1}, che richiama la foto selezionata.`;
  }
  return true;
}
function goToPhotoId(id, inSlide, keepHistory=true){
  const idx=state.photos.findIndex(p=>p.id===id); if(idx<0) return;
  if(inSlide){ state.slideIndex=idx; renderSlide(); }
  else {
    if(keepHistory) pushCurrentPhotoToHistory(id);
    state.currentIndex=idx; state.selectedSpot=null; renderAll();
  }
}
function renderSpotList(){
  const box=$('spotList'); box.innerHTML=''; const p=currentPhoto();
  if(!p){ box.textContent=t('choosePhoto'); return; }
  if(!p.spots.length){ box.textContent=t('noSpots'); return; }
  const hint=document.createElement('div'); hint.className='hint'; hint.textContent=t('listHint'); box.appendChild(hint);
  p.spots.forEach((s,i)=>{
    const item=document.createElement('div'); item.className='spot-item' + (isSelectedSpot(p.id, s.id) ? ' selected' : '');
    const typeLabel = isPhotoSpot(s) ? t('photoPoint') : (isCrawlSpot(s) ? t('titolatorPoint') : (isTextSpot(s) ? t('freeTextPoint') : t('notePoint')));
    const title=document.createElement('div'); title.className='spot-item-title'; title.textContent=`${t('point')} ${i+1} - ${typeLabel}`;
    const sub=document.createElement('div'); sub.className='spot-item-sub';
    const linked = isPhotoSpot(s) ? linkedPhotoLabel(s.targetPhotoId) : '';
    sub.textContent = isPhotoSpot(s) ? linked : (s.text || '');
    item.append(title, sub);
    // ── Anteprima: miniatura foto con mini-pin o testo nota ──
    if(isPhotoSpot(s) && s.targetPhotoId){
      const target = state.photos.find(ph => ph.id === s.targetPhotoId);
      if(target && target.url){
        const thumbWrap = document.createElement('div');
        thumbWrap.className = 'spot-preview-wrap';
        const thumb = document.createElement('img');
        thumb.className = 'spot-preview-img';
        thumb.src = target.url;
        thumb.alt = target.title || target.name || '';
        thumbWrap.appendChild(thumb);
        // Mini-pin sovrapposti alla miniatura
        (target.spots || []).forEach((ts, ti) => appendSpotMiniPreview(thumbWrap, ts, ti));
        item.appendChild(thumbWrap);
        // Conteggio punti della foto collegata
        const counts = countSpotKinds(target);
        if(counts.photos > 0 || counts.notes > 0 || counts.texts > 0){
          const info = document.createElement('div');
          info.className = 'spot-preview-counts';
          info.textContent = spotCountText(target);
          item.appendChild(info);
        }
      }
    } else if(isCrawlSpot(s) && s.text){
      const textBox = document.createElement('div');
      textBox.className = 'spot-preview-free-text';
      textBox.textContent = s.text;
      textBox.style.whiteSpace='pre-wrap';
      textBox.style.color = cleanFreeTextColor(s.color);
      textBox.style.fontSize = Math.max(14, Math.min(28, cleanFreeTextSize(s.fontSize))) + 'px';
      item.appendChild(textBox);
    } else if(isTextSpot(s) && s.text){
      const textBox = document.createElement('div');
      textBox.className = 'spot-preview-free-text';
      textBox.textContent = s.text;
      textBox.style.color = cleanFreeTextColor(s.color);
      textBox.style.fontSize = Math.max(14, Math.min(28, cleanFreeTextSize(s.fontSize))) + 'px';
      item.appendChild(textBox);
    } else if(isNoteSpot(s) && s.text){
      const noteBox = document.createElement('div');
      noteBox.className = 'spot-preview-note';
      noteBox.textContent = s.text;
      item.appendChild(noteBox);
    }
    item.addEventListener('click', ev=>{
      ev.stopPropagation();
      closeSpotMenu();
      setSelectedSpot(p.id, s.id);
      renderSpotList();
      renderPins($('pinLayer'), p);
    });
    // Tasto destro su punto nella lista → apre menu del punto
    item.addEventListener('contextmenu', ev=>{
      ev.preventDefault();
      ev.stopPropagation();
      if(state.interactionMode !== 'edit' || isAlbumLocked()) return;
      const cx = ev.clientX, cy = ev.clientY;
      setSelectedSpot(p.id, s.id);
      renderSpotList();
      renderPins($('pinLayer'), p);
      showSpotMenu({preventDefault(){}, stopPropagation(){}, clientX:cx, clientY:cy}, s, i);
    });
    // Doppio clic su punto foto → naviga alla foto collegata
    if(isPhotoSpot(s) && s.targetPhotoId){
      item.addEventListener('dblclick', ev => {
        ev.stopPropagation();
        goToPhotoId(s.targetPhotoId, false);
      });
    }
    box.appendChild(item);
    if(isSelectedSpot(p.id, s.id)) setTimeout(()=> item.scrollIntoView({behavior:'smooth', block:'nearest'}), 50);
  });
}
function deleteCurrentPhoto(){
  if(isAlbumLocked()) return;
  const p=currentPhoto(); if(!p || !confirm(t('confirmDeletePhoto'))) return;
  URL.revokeObjectURL(p.url); state.photos.splice(state.currentIndex,1);
  if(state.currentIndex >= state.photos.length) state.currentIndex = state.photos.length-1;
  if(state.selectedSpot && state.selectedSpot.photoId===p.id) state.selectedSpot=null;
  closeSpotMenu();
  setDirty(); renderAll();
}
function movePhoto(dir){
  if(isAlbumLocked()) return;
  const i=state.currentIndex; const j=i+dir; if(i<0 || j<0 || j>=state.photos.length) return;
  const tmp=state.photos[i]; state.photos[i]=state.photos[j]; state.photos[j]=tmp; state.currentIndex=j; setDirty(); renderAll();
}
function revokeAllUrls(){ state.photos.forEach(p=>p.url && URL.revokeObjectURL(p.url)); state.musicTracks.forEach(m=>m.url && URL.revokeObjectURL(m.url)); }
async function newProject(){
  if(state.dirty && !confirm(t('confirmNew'))) return;
  closeSlideshow(false); revokeAllUrls();
  state.albumName=t('albumDefault'); state.photos=[]; state.currentIndex=-1; state.musicTracks=[]; state.activeMusicIndex=0; state.settings={slideSeconds:3.75,showCaption:true,imageQuality:'medium',albumImageQuality:clampAlbumImageQuality(state.settings.albumImageQuality),allowedPathRepeats:0}; state.dirty=false; state.slideIndex=0; state.slideBranch=null; state.spotClipboard=null; state.moveSpot=null; state.undoStack=[]; state.selectedSpot=null; state.pendingPhotoLink=null; state.interactionMode='navigate'; state.editPhotoMetaVisible=false; state.webMusicIndex=0; state.sourceFileName=''; state.albumMeta={id:Date.now(),createdAt:Date.now(),signature:null,isReadOnly:false,latitude:null,longitude:null,address:''}; state.albumLocked=false; state.albumRecoveryCode=''; state.photoHistory=[]; state.pathWarningIds=new Set(); state.pathProblemDetails=new Map(); state.presentationPath=[]; state.presentationPathPos=0; state.slideNoteMode=false; state.slideCrawlId=null; state.slideContinuousCrawl=null; state.slideNoteMode=false;
  await ensureAlbumPassword();
  $('albumName').value=state.albumName; applyI18n(); renderAll(); updateMusicName();
}


function clampAllowedPathRepeats(v){
  const n=Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.min(5, Math.round(n))) : 1;
}
function getPhotoChildPhotoIndexesFromList(photos, photo){
  const indexes=[]; const seen=new Set();
  (photo && photo.spots ? photo.spots : []).forEach(spot=>{
    if(!spot || spot.type !== 'photo' || !spot.targetPhotoId) return;
    const idx=photos.findIndex(p=>p.id===spot.targetPhotoId);
    if(idx>=0 && !seen.has(spot.targetPhotoId)){ seen.add(spot.targetPhotoId); indexes.push(idx); }
  });
  return indexes;
}
function isSingleDetailPhotoFromList(photos, photo){ return !getPhotoChildPhotoIndexesFromList(photos, photo).length; }
function getAutoDetailChildIndexesFromList(photos, photo){
  return getAutoDetailChildRefsFromList(photos, photo).map(ref=>ref.index);
}
function getAutoDetailChildRefsFromList(photos, photo){
  const refs=[]; const seen=new Set();
  (photo && photo.spots ? photo.spots : []).forEach((spot, spotIndex)=>{
    if(!spot || spot.type !== 'photo' || !spot.targetPhotoId) return;
    const idx=photos.findIndex(p=>p.id===spot.targetPhotoId);
    if(idx>=0 && !seen.has(spot.targetPhotoId)){
      seen.add(spot.targetPhotoId);
      refs.push({index:idx, spotIndex, spotNumber:spotIndex+1, spot});
    }
  });
  if(!refs.length) return [];
  return refs.every(ref => isSingleDetailPhotoFromList(photos, photos[ref.index])) ? refs : [];
}
function buildUnifiedPresentationPath(photos, startIndex=0, allowedRepeats=1){
  const list=Array.isArray(photos) ? photos : [];
  const n=list.length;
  const allowed=clampAllowedPathRepeats(allowedRepeats);
  const maxOccurrences=allowed + 1;
  const path=[];
  const warnings=new Set();
  const missing=new Set();
  const counts=new Map();
  const attemptedCounts=new Map();
  const problemDetails=new Map();
  function photoLabel(idx){
    const p=list[idx];
    return p ? `Foto ${idx+1} - ${p.title || p.name || p.id}` : `Foto ${idx+1}`;
  }
  function addProblem(targetId, text){
    if(!targetId || !text) return;
    if(!problemDetails.has(targetId)) problemDetails.set(targetId, []);
    const arr=problemDetails.get(targetId);
    if(!arr.includes(text)) arr.push(text);
  }
  if(!n) return {indexes:path, ids:[], warningIds:warnings, missingIds:missing, occurrenceCounts:counts, attemptedCounts, problemDetails, allowedRepeats:allowed};
  const start=Math.max(0, Math.min(n-1, Number.isFinite(Number(startIndex)) ? Math.round(Number(startIndex)) : 0));

  /*
    Regola unica usata da Verifica Percorso, Presentazione ed Export Web:
    il percorso viene costruito partendo dalla foto iniziale e seguendo SOLO i punti foto raggiungibili.
    Le foto presenti nella lista ma non raggiungibili restano nell'album, ma non entrano nella presentazione/export.
  */
  function addIndex(idx, via=null, options={}){
    if(idx<0 || idx>=n || !list[idx]) return false;
    const id=list[idx].id;
    const warnOnLimit=!!options.warnOnLimit;
    attemptedCounts.set(id, (attemptedCounts.get(id) || 0) + 1);

    if(via && via.sourceIndex >= 0 && via.pointNumber){
      addProblem(id, `richiamata da ${photoLabel(via.sourceIndex)}, punto ${via.pointNumber}`);
    }

    const count=counts.get(id) || 0;
    if(count >= maxOccurrences){
      if(warnOnLimit){
        warnings.add(id);
        if(via && via.sourceIndex >= 0 && via.pointNumber){
          addProblem(id, `SUPERATO LIMITE: ${photoLabel(via.sourceIndex)}, punto ${via.pointNumber}`);
        } else {
          addProblem(id, `SUPERATO LIMITE: ripetizione automatica evitata`);
        }
      }
      return false;
    }

    counts.set(id, count + 1);
    path.push(idx);
    return true;
  }

  function noteMissingLinks(source, sourceIndex=-1){
    (source && source.spots ? source.spots : []).forEach((spot, spotIndex)=>{
      if(!spot || spot.type !== 'photo' || !spot.targetPhotoId) return;
      if(!list.some(p=>p.id===spot.targetPhotoId)){
        if(source.id){
          warnings.add(source.id);
          addProblem(source.id, `collegamento non valido da ${photoLabel(sourceIndex)}, punto ${spotIndex+1}`);
        }
        missing.add(spot.targetPhotoId);
      }
    });
  }

  function walk(idx, via=null){
    if(idx<0 || idx>=n || !list[idx]) return;
    const added = addIndex(idx, via, {warnOnLimit: !!via});
    if(!added) return;
    const parent=list[idx];
    noteMissingLinks(parent, idx);
    (parent.spots || []).forEach((spot, spotIndex)=>{
      if(!spot || spot.type !== 'photo' || !spot.targetPhotoId) return;
      const childIndex=list.findIndex(p=>p.id===spot.targetPhotoId);
      if(childIndex<0) return;
      walk(childIndex, {sourceIndex:idx, pointNumber:spotIndex+1});
    });
  }

  walk(start, null);

  if(!path.length) path.push(start);
  return {indexes:path, ids:path.map(idx=>list[idx] && list[idx].id).filter(Boolean), warningIds:warnings, missingIds:missing, occurrenceCounts:counts, attemptedCounts, problemDetails, allowedRepeats:allowed};
}
function buildCurrentPresentationPath(startIndex=Math.max(0,state.currentIndex), allowedRepeats=state.settings.allowedPathRepeats){
  if(state.cinematicMode) return buildCinematicPresentationPath(state.photos, startIndex, allowedRepeats);
  return buildUnifiedPresentationPath(state.photos, startIndex, allowedRepeats);
}

/**
 * Variante Cinema di buildUnifiedPresentationPath.
 * Stessa logica di avanzamento, ma quando dopo un ramo ci sono fratelli
 * ancora da visitare, inserisce i frame di ritorno a ritroso fino al bivio.
 *
 * Struttura dati HTML: lista piatta di foto con spots tipo 'photo' → targetPhotoId.
 * "Bivio" = la foto che ha il punto che porta al ramo appena visitato.
 */
function buildCinematicPresentationPath(photos, startIndex=0, allowedRepeats=1){
  const list = Array.isArray(photos) ? photos : [];
  const n = list.length;
  const allowed = clampAllowedPathRepeats(allowedRepeats);
  const maxOccurrences = allowed + 1;
  const path = [];           // indici nel percorso finale
  const counts = new Map();  // photoId → quante volte inserita

  if(!n) return {indexes:[], ids:[], warningIds:new Set(), missingIds:new Set(), occurrenceCounts:counts, attemptedCounts:new Map(), problemDetails:new Map(), allowedRepeats:allowed};

  const start = Math.max(0, Math.min(n-1, Number.isFinite(Number(startIndex)) ? Math.round(Number(startIndex)) : 0));

  function canAdd(idx){
    const photo = list[idx];
    if(!photo || !photo.id) return false;
    return (counts.get(photo.id) || 0) < maxOccurrences;
  }
  function doAdd(idx){
    const photo = list[idx];
    const c = counts.get(photo.id) || 0;
    counts.set(photo.id, c + 1);
    path.push(idx);
  }

  // Raccoglie i figli diretti (targetPhotoId) di una foto, come indici nella lista
  function childIndexes(idx){
    const photo = list[idx];
    if(!photo) return [];
    const seen = new Set();
    const result = [];
    (photo.spots || []).forEach(s => {
      if(!s || s.type !== 'photo' || !s.targetPhotoId) return;
      const ci = list.findIndex(p => p && p.id === s.targetPhotoId);
      if(ci >= 0 && !seen.has(s.targetPhotoId)){
        seen.add(s.targetPhotoId);
        result.push(ci);
      }
    });
    return result;
  }

  // Cammino dalla root (start) a idx: serve per calcolare il ritorno al bivio.
  // Restituisce l'array di indici dal root fino a idx (incluso), o null se non raggiungibile.
  // Usiamo il path già costruito come "cronologia" per trovare il percorso.
  function pathToCurrentBifurcation(bifurcationIdx){
    // Il bivio è un indice già nel path; inseriamo i frame a ritroso
    // dall'ultimo elemento del path fino al bivio (escluso il bivio stesso,
    // che verrà aggiunto esplicitamente dopo).
    const lastIdx = path[path.length - 1];
    if(lastIdx === bifurcationIdx) return; // già lì
    // Risali il path trovando il percorso inverso
    // In una struttura piatta, "risalire" significa trovare la catena
    // parent → child già percorsa e inserirla al contrario.
    // Strategia: percorri il path a ritroso finché non trovi bifurcationIdx,
    // raccogliendo gli step intermedi univoci.
    const returnFrames = [];
    for(let k = path.length - 2; k >= 0; k--){
      const idx = path[k];
      if(idx === bifurcationIdx) break;
      // Aggiungi solo se è un "antenato" del lastIdx (ovvero era un nodo
      // attraversato per arrivare all'ultimo step). Per semplicità
      // inseriamo ogni idx intermedio una volta sola.
      if(!returnFrames.includes(idx)) returnFrames.push(idx);
    }
    returnFrames.forEach(idx => path.push(idx));
  }

  function walk(idx, parentIdx){
    if(!canAdd(idx)) return;
    doAdd(idx);

    const children = childIndexes(idx).filter(ci => canAdd(ci));
    children.forEach((ci, pos) => {
      walk(ci, idx);
      // Se ci sono fratelli ancora visitabili dopo questo, torna al bivio (idx)
      const remaining = children.slice(pos + 1).filter(si => canAdd(si));
      if(remaining.length > 0){
        pathToCurrentBifurcation(idx);
        // Frame del bivio
        path.push(idx);
      }
    });
  }

  walk(start, -1);

  if(!path.length) path.push(start);
  return {
    indexes: path,
    ids: path.map(i => list[i] && list[i].id).filter(Boolean),
    warningIds: new Set(),
    missingIds: new Set(),
    occurrenceCounts: counts,
    attemptedCounts: new Map(),
    problemDetails: new Map(),
    allowedRepeats: allowed
  };
}


function getPhotoChildPhotoIndexes(photo){ return getPhotoChildPhotoIndexesFromList(state.photos, photo); }
function isSingleDetailPhoto(photo){ return isSingleDetailPhotoFromList(state.photos, photo); }
function getAutoDetailChildIndexes(photo){ return getAutoDetailChildIndexesFromList(state.photos, photo); }
function isCurrentSlideAutoDetail(){
  const branch=state.slideBranch;
  return !!(branch && branch.stage === 'children' && branch.childIndexes[branch.childPos] === state.slideIndex);
}
const NOTE_SLIDE_SECONDS = 5;
const FINAL_SLIDE_FADE_MS = 900;
const FINAL_BLACK_HOLD_MS = 2000;
function getNoteTexts(photo){
  return (photo && photo.spots ? photo.spots : [])
    .filter(spot => isNoteSpot(spot))
    .map(spot => String(spot.text || '').trim())
    .filter(Boolean);
}
function hasSlideNotes(photo){ return getNoteTexts(photo).length > 0; }
function currentSlideCrawlSpot(){
  const current=state.photos[state.slideIndex];
  if(!current || !state.slideCrawlId) return null;
  return getSlideCrawlSpots(current).find(s=>s.id===state.slideCrawlId) || null;
}
function isLastPresentationSegment(){
  if(!Array.isArray(state.presentationPath) || !state.presentationPath.length) return false;
  if(state.presentationPathPos !== state.presentationPath.length - 1) return false;
  const current=state.photos[state.slideIndex];
  if(!current) return false;
  if(!state.slideNoteMode && hasSlideNotes(current)) return false;
  const crawls=getSlideCrawlSpots(current);
  if(crawls.length){
    if(!state.slideCrawlId) return false;
    if(crawls[crawls.length-1].id !== state.slideCrawlId) return false;
  }
  return true;
}
function renderSlideCrawlOverlay(photo){
  const layer=$('slidePinLayer');
  if(!layer) return;
  layer.querySelectorAll('.crawl-scroll-host').forEach(el=>el.remove());
  const spot=currentSlideCrawlSpot();
  if(!spot || !photo) return;
  renderScrollingTextOverlay(layer, $('slideImage'), spot, false);
}
function getContinuousCrawlSpots(photo){ return getCrawlSpots(photo).filter(getCrawlContinuous); }
function getSlideCrawlSpots(photo){ return getCrawlSpots(photo).filter(spot=>!getCrawlContinuous(spot)); }
function findNextContinuousPresentationPathPos(startPos){
  if(!Array.isArray(state.presentationPath) || !state.presentationPath.length) return -1;
  for(let pos=Math.max(0,startPos+1); pos<state.presentationPath.length; pos++){
    const photo=state.photos[state.presentationPath[pos]];
    if(getContinuousCrawlSpots(photo).length) return pos;
  }
  return -1;
}
function estimatePresentationDurationRangeMs(fromPos, toPosExclusive){
  if(!Array.isArray(state.presentationPath) || !state.presentationPath.length) return 0;
  let total=0;
  const start=Math.max(0, fromPos);
  const end=Math.min(state.presentationPath.length, toPosExclusive == null ? state.presentationPath.length : toPosExclusive);
  for(let pos=start; pos<end; pos++){
    const photo=state.photos[state.presentationPath[pos]];
    if(!photo) continue;
    total += Math.round(Number(state.settings.slideSeconds || 3.75) * 1000);
    if(hasSlideNotes(photo)) total += NOTE_SLIDE_SECONDS * 1000;
    getCrawlSpots(photo).filter(c=>!getCrawlContinuous(c)).forEach(c=>{ total += estimateCrawlDurationMs(c); });
  }
  return total;
}
function activateSlideContinuousCrawl(photo){
  const spots=getContinuousCrawlSpots(photo);
  if(!spots.length) return;
  const starter=spots.find(spot=>!isCrawlStopMarker(spot));
  if(!starter) return;
  const spot=normalizeFreeTextSpot(cloneSpot(starter));
  if(state.slideContinuousCrawl && state.slideContinuousCrawl.spotId===spot.id) return;
  const nextPos=findNextContinuousPresentationPathPos(state.presentationPathPos);
  const img=$('slideImage');
  const imgH=img && img.clientHeight ? img.clientHeight : 720;
  state.slideContinuousCrawl={
    spotId:spot.id,
    photoId:photo.id,
    startedAt:performance.now(),
    totalMs:Math.max(800, estimateCrawlDurationMs(spot, imgH, null)),
    fixedGeom:null,
    spot
  };
}
function maybeActivateSlideContinuousCrawl(photo){
  if(!photo) return;
  const spots=getContinuousCrawlSpots(photo);
  if(!spots.length) return;
  if(spots.some(isCrawlStopMarker)){ clearSlideContinuousCrawl(); return; }
  activateSlideContinuousCrawl(photo);
}

function getSlideContinuousRenderData(){
  const info=state.slideContinuousCrawl;
  if(!info || !info.spot) return null;
  const img=$('slideImage');
  const layer=$('slidePinLayer');
  const imgH=img && img.clientHeight ? img.clientHeight : 720;
  if(!info.fixedGeom && img && layer){
    const geom=computeCrawlOverlayGeometry(layer, img, info.spot);
    if(geom) info.fixedGeom=geom;
  }
  const duration=Math.max(800, estimateCrawlDurationMs(info.spot, imgH, info.fixedGeom && info.fixedGeom.boxW ? info.fixedGeom.boxW : null));
  const elapsed=Math.max(0, performance.now() - (Number(info.startedAt) || 0));
  const progress=((elapsed % duration) / duration);
  return {spot:info.spot, progress, durationMs:duration, fixedGeom:info.fixedGeom};
}
function clearSlideContinuousCrawl(){ state.slideContinuousCrawl=null; }
function refreshSlideContinuousCrawlOnBackward(){ clearSlideContinuousCrawl(); }
function renderSlideContinuousCrawlOverlay(photo){
  if(currentSlideCrawlSpot()) return;
  const layer=$('slidePinLayer');
  if(!layer || !photo) return;
  const data=getSlideContinuousRenderData();
  if(!data || !data.spot) return;
  renderScrollingTextOverlay(layer, $('slideImage'), data.spot, false, {progress:data.progress, durationMs:data.durationMs, fixedBoxWidthPx:data.fixedGeom && data.fixedGeom.boxW, fixedBoxHeightPx:data.fixedGeom && data.fixedGeom.boxH, fixedCenterXPx:data.fixedGeom && data.fixedGeom.centerX, fixedCenterYPx:data.fixedGeom && data.fixedGeom.centerY});
}
function ensureSlideFadeOverlay(){
  const stage=$('slideStage');
  if(!stage) return null;
  let overlay=$('slideFadeOverlay');
  if(!overlay){
    overlay=document.createElement('div');
    overlay.id='slideFadeOverlay';
    overlay.className='stage-fade-overlay';
    stage.appendChild(overlay);
  }
  return overlay;
}
function resetSlideFade(){
  const overlay=ensureSlideFadeOverlay();
  if(!overlay) return;
  overlay.style.transition='none';
  overlay.style.opacity='0';
  void overlay.offsetWidth;
  overlay.style.transition='';
}
function startSlideFadeOut(durationMs=FINAL_SLIDE_FADE_MS){
  const overlay=ensureSlideFadeOverlay();
  if(!overlay) return;
  overlay.style.transition=`opacity ${Math.max(120, durationMs)}ms linear`;
  overlay.style.opacity='1';
}
function clearSlideTimers(resetFade=true){
  clearTimeout(state.slideTimer);
  state.slideTimer=null;
  clearTimeout(state.slideFadeTimer);
  state.slideFadeTimer=null;
  if(resetFade) resetSlideFade();
}
function finishSlideshowAtBlack(){
  clearSlideTimers(false);
  state.slideshowRunning=false;
  state.musicPlaying=false;
  state.slideContinuousCrawl=null;
  const audio=$('audioPlayer');
  if(audio){ try{ audio.pause(); }catch(e){} }
  const playBtn=$('slidePlayBtn'); if(playBtn) playBtn.textContent=t('startPresentation');
  const musicBtn=$('musicBtn'); if(musicBtn) musicBtn.textContent=t('music');
  const changeBtn=$('changeMusicBtn'); if(changeBtn) changeBtn.classList.add('hidden');
  setMusicButtonState();
}
function currentSlideDurationMs(){
  let ms;
  const crawl=currentSlideCrawlSpot();
  if(crawl) ms=estimateCrawlDurationMs(crawl, $('slideImage') && $('slideImage').clientHeight ? $('slideImage').clientHeight : 720, $('slideImage') && $('slideImage').clientWidth ? $('slideImage').clientWidth : null);
  else ms=Math.round((state.slideNoteMode ? NOTE_SLIDE_SECONDS : Number(state.settings.slideSeconds || 3.75)) * 1000);
  if(isLastPresentationSegment()) ms=(ms*2)+FINAL_BLACK_HOLD_MS;
  return ms;
}
function scheduleSlideTimer(){
  if(!state.slideshowRunning) return;
  clearTimeout(state.slideTimer);
  clearTimeout(state.slideFadeTimer);
  state.slideFadeTimer=null;
  resetSlideFade();
  const total=currentSlideDurationMs();
  if(isLastPresentationSegment()){
    const fadeDelay=Math.max(0, total - FINAL_BLACK_HOLD_MS - FINAL_SLIDE_FADE_MS);
    state.slideFadeTimer=setTimeout(()=>{
      if(state.slideshowRunning && isLastPresentationSegment()) startSlideFadeOut(FINAL_SLIDE_FADE_MS);
    }, fadeDelay);
  }
  state.slideTimer=setTimeout(nextSlide, total);
}
function showNextAutoDetailBranch(){
  const current=state.photos[state.slideIndex];
  const childIndexes=getAutoDetailChildIndexes(current);
  if(!childIndexes.length) return false;
  state.slideBranch={ parentIndex: state.slideIndex, childIndexes, childPos: 0, stage: 'children' };
  state.slideIndex=childIndexes[0];
  return true;
}
function advanceSlideBranch(){
  const branch=state.slideBranch;
  if(!branch) return false;
  if(branch.stage === 'children'){
    if(branch.childPos < branch.childIndexes.length - 1){
      branch.childPos += 1;
      state.slideIndex = branch.childIndexes[branch.childPos];
      return true;
    }
    branch.stage='return';
    state.slideIndex=branch.parentIndex;
    return true;
  }
  if(branch.stage === 'return'){
    const nextIndex=(branch.parentIndex + 1) % Math.max(1, state.photos.length);
    state.slideBranch=null;
    state.slideIndex=nextIndex;
    return true;
  }
  return false;
}
function stepBackSlideBranch(){
  const branch=state.slideBranch;
  if(!branch) return false;
  if(branch.stage === 'return'){
    branch.stage='children';
    branch.childPos=Math.max(0, branch.childIndexes.length - 1);
    state.slideIndex=branch.childIndexes[branch.childPos];
    return true;
  }
  if(branch.stage === 'children'){
    if(branch.childPos > 0){
      branch.childPos -= 1;
      state.slideIndex=branch.childIndexes[branch.childPos];
      return true;
    }
    state.slideBranch=null;
    state.slideIndex=branch.parentIndex;
    return true;
  }
  return false;
}

function toggleCinematicMode(){
  state.cinematicMode = !state.cinematicMode;
  // Ricalcola il percorso se la presentazione è aperta
  if(!$('slideshow').classList.contains('hidden')){
    const built = buildCurrentPresentationPath(Math.max(0, state.slideIndex), state.settings.allowedPathRepeats);
    state.presentationPath = built.indexes;
    // Riposiziona nel percorso sul frame corrente
    const pos = state.presentationPath.indexOf(state.slideIndex);
    state.presentationPathPos = pos >= 0 ? pos : 0;
  }
  applyI18n();
  if($('appVersion')) $('appVersion').textContent = APP_VERSION;
}

// ═══════════════════════════════════════════════════════
// MAPPA PERCORSO PRESENTAZIONE (ported from Android)
// ═══════════════════════════════════════════════════════

let _mapVisible = true;
let _mapAnimFrame = null;
let _mapPulseStart = null;

function buildMapTree(photos) {
  // Ogni nodo = { id: photoId, children: [] }
  // Root = nodi senza parent (non puntati da altri)
  // I figli vengono ordinati per posizione X del pin sulla foto padre,
  // così la mappa rispetta l'orientamento sinistra/destra della foto.
  const allIds = new Set(photos.map(p => p.id));
  const hasParent = new Set();
  photos.forEach(p => {
    (p.spots || []).forEach(s => {
      if (s && s.type === 'photo' && s.targetPhotoId && allIds.has(s.targetPhotoId))
        hasParent.add(s.targetPhotoId);
    });
  });
  const roots = photos.filter(p => !hasParent.has(p.id));
  function buildNode(photo, visited = new Set()) {
    if (!photo || visited.has(photo.id)) return null;
    visited.add(photo.id);
    // Raccogli figli con la posizione X del pin che li collega
    const childrenWithX = [];
    (photo.spots || []).forEach(s => {
      if (!s || s.type !== 'photo' || !s.targetPhotoId) return;
      const child = photos.find(p => p.id === s.targetPhotoId);
      const node = buildNode(child, visited);
      if (node) childrenWithX.push({ node, x: s.x || 50 });
    });
    // Ordina da sinistra a destra in base alla posizione X del pin
    childrenWithX.sort((a, b) => a.x - b.x);
    return { id: photo.id, children: childrenWithX.map(c => c.node) };
  }
  const rootNodes = roots.map(p => buildNode(p, new Set())).filter(Boolean);
  return { id: null, children: rootNodes }; // virtual root
}

function mapLeafCount(node) {
  if (!node.children || !node.children.length) return 1;
  return node.children.reduce((s, c) => s + mapLeafCount(c), 0);
}

function mapDepth(node) {
  if (!node.children || !node.children.length) return 0;
  return 1 + Math.max(...node.children.map(mapDepth));
}

function layoutMapTree(root, w, h, minPadH, minPadV) {
  const result = [];
  const pH = Math.max(minPadH, w * 0.05);
  const pV = Math.max(minPadV, h * 0.05);
  const useW = Math.max(w - pH * 2, 1);
  const useH = Math.max(h - pV * 2, 1);
  const totalLeaves = Math.max(mapLeafCount(root), 1);
  const maxDep = Math.max(mapDepth(root), 1);

  // Distanza minima tra centri dei nodi (px)
  const MIN_DIST = 10;

  function place(node, level, leafOffset, leaves) {
    const cx = pH + useW * (leafOffset + leaves / 2) / totalLeaves;
    const cy = (h - pV) - useH * level / maxDep;
    result.push({ id: node.id, x: cx, y: cy, level });
    let offset = leafOffset;
    (node.children || []).forEach(child => {
      const lc = mapLeafCount(child);
      place(child, level + 1, offset, lc);
      offset += lc;
    });
  }
  place(root, 0, 0, totalLeaves);

  // Separa nodi per livello garantendo distanza minima orizzontale
  const byLevel = {};
  result.forEach(n => {
    if (n.id === null) return;
    const k = n.level;
    if (!byLevel[k]) byLevel[k] = [];
    byLevel[k].push(n);
  });
  Object.values(byLevel).forEach(nodes => {
    nodes.sort((a, b) => a.x - b.x);
    // Passata avanti: spingi a destra se troppo vicino al precedente
    for (let i = 1; i < nodes.length; i++) {
      if (nodes[i].x - nodes[i - 1].x < MIN_DIST)
        nodes[i].x = nodes[i - 1].x + MIN_DIST;
    }
    // Passata indietro: rientra dal bordo destro e redistribuisci
    const maxX = w - pH;
    for (let i = nodes.length - 1; i >= 0; i--) {
      if (nodes[i].x > maxX) nodes[i].x = maxX;
      if (i > 0 && nodes[i].x - nodes[i - 1].x < MIN_DIST)
        nodes[i - 1].x = nodes[i].x - MIN_DIST;
    }
    // Clamp bordo sinistro
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].x < pH) nodes[i].x = pH;
    }
  });

  return result.filter(n => n.id !== null);
}

function _findParentInResult(result, childNode, treeRoot) {
  function search(node) {
    for (const c of (node.children || [])) {
      if (c.id === childNode.id) return result.find(r => r.id === node.id) || null;
      const found = search(c);
      if (found) return found;
    }
    return null;
  }
  return search(treeRoot);
}

function _buildParentMap(node, map = {}) {
  (node.children || []).forEach(c => {
    map[c.id] = node.id;
    _buildParentMap(c, map);
  });
  return map;
}

// ═══════════════════════════════════════════════════════
// FUNZIONE MAPPA UNIFICATA — usata da editor, presentazione e viewer
// ═══════════════════════════════════════════════════════
function drawMap(opts) {
  // opts: { canvasId, photos, currentId, visitedIds, activePrefixIds, pulse, returnNodes }
  const canvas = $(opts.canvasId);
  if (!canvas || !canvas.getContext) return null;
  const photos = opts.photos || [];
  if (!photos.length) { canvas.style.display = 'none'; return null; }
  canvas.style.display = 'block';
  const W = canvas.offsetWidth, H = canvas.offsetHeight;
  if (W < 10 || H < 10) return null;
  const dpr = window.devicePixelRatio || 1;
  if (canvas.width !== Math.round(W * dpr) || canvas.height !== Math.round(H * dpr)) {
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);

  // Sfondo
  function rr(x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
  }
  rr(0,0,W,H,14); ctx.fillStyle='rgba(0,0,0,0.34)'; ctx.fill();
  rr(0.75,0.75,W-1.5,H-1.5,14); ctx.strokeStyle='rgba(255,255,255,0.16)'; ctx.lineWidth=1; ctx.stroke();

  const tree = buildMapTree(photos);
  const positioned = layoutMapTree(tree, W, H, 8, 6);
  const byId = {}; positioned.forEach(n => { byId[n.id] = n; });

  const currentId = opts.currentId || null;
  const visitedIds = opts.visitedIds || new Set();
  const parentMap = _buildParentMap(tree, {});

  // Calcola catena ancestor per evidenziare il ramo attivo
  const activePrefixIds = opts.activePrefixIds || new Set();
  if (!opts.activePrefixIds) {
    let cur = currentId;
    while (cur !== undefined && cur !== null) { activePrefixIds.add(cur); cur = parentMap[cur]; }
  }

  const pulse = opts.pulse || 0;

  // Linee
  function drawLines(node, parentPos) {
    if (parentPos && node.id !== null) {
      const pos = byId[node.id];
      if (pos) {
        const isActive = activePrefixIds.has(node.id);
        const isVisited = visitedIds.has(node.id);
        const color = isActive ? 'rgba(255,255,255,0.82)' : isVisited ? 'rgba(245,158,11,0.58)' : 'rgba(255,255,255,0.23)';
        const lw = isActive ? 2.4 : isVisited ? 1.9 : 1.2;
        const midY = (parentPos.y + pos.y) / 2;
        ctx.beginPath(); ctx.moveTo(parentPos.x, parentPos.y);
        ctx.bezierCurveTo(parentPos.x, midY, pos.x, midY, pos.x, pos.y);
        ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke();
      }
    }
    (node.children || []).forEach(child => drawLines(child, node.id !== null ? byId[node.id] : null));
  }
  drawLines(tree, null);

  // Nodi
  positioned.forEach(n => {
    const isCurrent = n.id === currentId;
    const isVisited = visitedIds.has(n.id);
    const isRoot = !(n.id in parentMap);
    const radius = isCurrent ? 6.8 : isRoot ? 5.6 : 4.3;
    if (isCurrent) {
      ctx.beginPath(); ctx.arc(n.x, n.y, radius + 12 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${(1 - pulse) * 0.42})`; ctx.fill();
    }
    ctx.beginPath(); ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = isCurrent ? '#ffffff' : (isRoot || isVisited) ? '#fbbf24' : 'rgba(203,213,225,0.70)'; ctx.fill();
    ctx.beginPath(); ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0,0,0,${isCurrent ? 0.5 : 0.32})`; ctx.lineWidth = isCurrent ? 1.5 : 0.8; ctx.stroke();
  });

  return opts.returnNodes ? positioned.map(n => ({ id: n.id, x: n.x, y: n.y })) : null;
}

// ── Wrapper presentazione ──
function drawPresentationMap(pulse) {
  const photos = state.photos;
  const currentPhoto = photos[state.slideIndex];
  const currentId = currentPhoto ? currentPhoto.id : null;
  const visitedIds = new Set();
  state.presentationPath.slice(0, state.presentationPathPos + 1)
    .forEach(idx => { if (photos[idx]) visitedIds.add(photos[idx].id); });
  drawMap({ canvasId: 'presentationMap', photos, currentId, visitedIds, pulse });
}

// ── Wrapper editor ──
let _editorMapNodes = [];
function drawEditorMap() {
  const currentId = state.photos[state.currentIndex] ? state.photos[state.currentIndex].id : null;
  const nodes = drawMap({ canvasId: 'editorMap', photos: state.photos, currentId, returnNodes: true });
  _editorMapNodes = nodes || [];
}

function _mapAnimLoop(ts) {
  if (!_mapVisible) return;
  if (!_mapPulseStart) _mapPulseStart = ts;
  const elapsed = (ts - _mapPulseStart) % 1150;
  const pulse = elapsed / 1150;
  drawPresentationMap(pulse);
  _mapAnimFrame = requestAnimationFrame(_mapAnimLoop);
}

function startMapAnim() {
  if (_mapAnimFrame) cancelAnimationFrame(_mapAnimFrame);
  _mapPulseStart = null;
  _mapAnimFrame = requestAnimationFrame(_mapAnimLoop);
}

function stopMapAnim() {
  if (_mapAnimFrame) { cancelAnimationFrame(_mapAnimFrame); _mapAnimFrame = null; }
}

function setMapVisible(v) {
  _mapVisible = v;
  const canvas = $('presentationMap');
  const btn = $('presentationMapBtn');
  if (!canvas || !btn) return;
  if (v) {
    canvas.style.display = 'block';
    btn.classList.add('hidden');
    startMapAnim();
  } else {
    canvas.style.display = 'none';
    btn.classList.remove('hidden');
    stopMapAnim();
  }
}



// ═══════════════════════════════════════════════════════
// EXPORT VIDEO MP4/WEBM — usa lo stesso percorso della presentazione
// ═══════════════════════════════════════════════════════

function videoSleep(ms){ return new Promise(resolve=>setTimeout(resolve, ms)); }
function videoMimeChoice(withAudio=false){
  if(typeof MediaRecorder === 'undefined') return null;
  // L'utente preme "Genera video MP4": quindi proviamo SEMPRE prima MP4.
  // Solo se il browser non espone MediaRecorder MP4 si ripiega su WebM.
  const mp4Candidates=withAudio ? [
    'video/mp4;codecs="avc1.42E01E,mp4a.40.2"',
    'video/mp4;codecs="avc1.640029,mp4a.40.2"',
    'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
    'video/mp4;codecs=avc1.640029,mp4a.40.2',
    'video/mp4'
  ] : [
    'video/mp4;codecs="avc1.42E01E"',
    'video/mp4;codecs="avc1.640029"',
    'video/mp4;codecs=avc1.42E01E',
    'video/mp4;codecs=avc1.640029',
    'video/mp4'
  ];
  const webmCandidates=withAudio ? [
    'video/webm;codecs=vp9,opus',
    'video/webm;codecs=vp8,opus',
    'video/webm'
  ] : [
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm'
  ];
  const candidates=mp4Candidates.concat(webmCandidates);
  for(const mime of candidates){
    try{
      if(!MediaRecorder.isTypeSupported || MediaRecorder.isTypeSupported(mime)){
        return {mime, ext:mime.includes('mp4')?'mp4':'webm'};
      }
    }catch(e){}
  }
  return null;
}
function videoRootIndex(){
  return state.photos.length ? 0 : -1;
}
function buildVideoSegments(){
  const root=videoRootIndex();
  if(root < 0) return [];
  const built=buildCurrentPresentationPath(root, state.settings.allowedPathRepeats);
  const path=(built.indexes && built.indexes.length) ? built.indexes : [root];
  const nextContinuousPosMap=new Map();
  for(let pos=0; pos<path.length; pos++){
    let found=-1;
    for(let j=pos+1; j<path.length; j++){
      const futurePhoto=state.photos[path[j]];
      if(getContinuousCrawlSpots(futurePhoto).length){ found=j; break; }
    }
    nextContinuousPosMap.set(pos, found);
  }
  function durationUntilNextContinuous(startPos){
    const nextPos=nextContinuousPosMap.get(startPos);
    return Math.max(800, estimatePresentationDurationRangeMs(startPos, nextPos>=0 ? nextPos : path.length));
  }
  const segments=[];
  let activeContinuous=null;
  let elapsed=0;
  path.forEach((idx,pos)=>{
    const p=state.photos[idx];
    if(!p) return;
    const conts=getContinuousCrawlSpots(p);
    if(conts.length){
      if(conts.some(isCrawlStopMarker)){
        activeContinuous=null;
      } else {
        const starter=conts.find(spot=>!isCrawlStopMarker(spot));
        if(starter){
          const spot=normalizeFreeTextSpot(cloneSpot(starter));
          activeContinuous={
            spot,
            totalMs:Math.max(800, estimateCrawlDurationMs(spot)),
            startedAtMs:elapsed
          };
        }
      }
    }
    const pushSegment=(segment)=>{
      if(activeContinuous && !segment.crawlSpotId){
        const segElapsed=Math.max(0, elapsed - activeContinuous.startedAtMs);
        const progress=((segElapsed % Math.max(1, activeContinuous.totalMs)) / Math.max(1, activeContinuous.totalMs));
        segment.continuousCrawl=activeContinuous;
        segment.continuousProgressStart=progress;
      }
      segments.push(segment);
      elapsed += segment.durationMs;
    };
    pushSegment({idx, noteMode:false, durationMs:Math.round(Number(state.settings.slideSeconds || 3.75)*1000)});
    if(hasSlideNotes(p)) pushSegment({idx, noteMode:true, durationMs:NOTE_SLIDE_SECONDS*1000});
    getCrawlSpots(p).filter(c=>!getCrawlContinuous(c)).forEach(crawl=>pushSegment({idx, noteMode:false, crawlSpotId:crawl.id, durationMs:estimateCrawlDurationMs(crawl)}));
  });
  return segments;
}
const _videoImageCache=new Map();
function clearVideoImageCache(){ try{ _videoImageCache.clear(); }catch(e){} }
function loadImageForVideo(url){
  if(_videoImageCache.has(url)) return Promise.resolve(_videoImageCache.get(url));
  return new Promise((resolve,reject)=>{
    const img=new Image();
    img.decoding='async';
    img.onload=async()=>{
      try{ if(typeof img.decode==='function') await img.decode(); }catch(_e){}
      _videoImageCache.set(url,img);
      resolve(img);
    };
    img.onerror=()=>reject(new Error('Image load error'));
    img.src=url;
  });
}
async function preloadVideoImages(segments, cancelToken, progress){
  const urls=[];
  const seen=new Set();
  (segments||[]).forEach(seg=>{
    const photo=state.photos[seg.idx];
    if(photo && photo.url && !seen.has(photo.url)){ seen.add(photo.url); urls.push(photo.url); }
  });
  if(!urls.length) return;
  for(let i=0;i<urls.length;i++){
    throwIfVideoCancelled(cancelToken);
    if(progress && typeof progress.message==='function') progress.message(`${t('videoPreparing')} ${i+1}/${urls.length}`, Math.round((i/Math.max(1,urls.length))*100));
    await loadImageForVideo(urls[i]);
    await videoSleep(0);
  }
  if(progress && typeof progress.message==='function') progress.message(t('videoPreparing'), 0);
}
function roundedVideoRect(ctx,x,y,w,h,r){
  const rr=Math.min(r,w/2,h/2);
  ctx.beginPath();
  ctx.moveTo(x+rr,y);
  ctx.arcTo(x+w,y,x+w,y+h,rr);
  ctx.arcTo(x+w,y+h,x,y+h,rr);
  ctx.arcTo(x,y+h,x,y,rr);
  ctx.arcTo(x,y,x+w,y,rr);
  ctx.closePath();
}
function wrapVideoText(ctx,text,maxWidth){
  const clean=String(text||'').replace(/\r/g,'');
  const paragraphs=clean.split('\n');
  const lines=[];
  paragraphs.forEach((paragraph,pi)=>{
    const words=paragraph.trim().split(/\s+/).filter(Boolean);
    if(!words.length){ if(pi<paragraphs.length-1) lines.push(''); return; }
    let line='';
    words.forEach(word=>{
      const test=line ? line+' '+word : word;
      if(ctx.measureText(test).width > maxWidth && line){ lines.push(line); line=word; }
      else line=test;
    });
    if(line) lines.push(line);
    if(pi<paragraphs.length-1) lines.push('');
  });
  return lines;
}
function drawVideoTextBox(ctx,text,opts){
  const canvas=ctx.canvas;
  const maxWidth=opts.maxWidth || Math.round(canvas.width*0.82);
  const fontSize=opts.fontSize || 34;
  const lineHeight=opts.lineHeight || Math.round(fontSize*1.28);
  const paddingX=opts.paddingX || 34;
  const paddingY=opts.paddingY || 24;
  const maxLines=opts.maxLines || 8;
  ctx.font=`600 ${fontSize}px system-ui, -apple-system, Segoe UI, sans-serif`;
  ctx.textAlign='center';
  ctx.textBaseline='top';
  const lines=wrapVideoText(ctx,text,maxWidth).slice(0,maxLines);
  if(!lines.length) return;
  if(wrapVideoText(ctx,text,maxWidth).length > maxLines){
    lines[lines.length-1]=lines[lines.length-1].replace(/\s*…?$/,'')+'…';
  }
  const boxW=Math.min(canvas.width-80, maxWidth + paddingX*2);
  const boxH=lines.length*lineHeight + paddingY*2;
  const x=(canvas.width-boxW)/2;
  const y=opts.center ? (canvas.height-boxH)/2 : (canvas.height-boxH-42);
  ctx.save();
  ctx.fillStyle='rgba(0,0,0,0.68)';
  roundedVideoRect(ctx,x,y,boxW,boxH,24);
  ctx.fill();
  ctx.fillStyle='#fff';
  lines.forEach((line,i)=>ctx.fillText(line, canvas.width/2, y+paddingY+i*lineHeight));
  ctx.restore();
}
function drawFreeTextsOnVideo(ctx, photo, dx, dy, dw, dh){
  const texts=(photo && photo.spots ? photo.spots : []).filter(isTextSpot);
  if(!texts.length || !dw || !dh) return;
  ctx.save();
  texts.forEach(raw=>{
    const spot=normalizeFreeTextSpot(raw);
    const text=String(spot.text || '').trim();
    if(!text) return;
    const x=dx + dw * (Number(spot.x) || 50) / 100;
    const y=dy + dh * (Number(spot.y) || 50) / 100;
    const size=Math.max(14, Math.round(cleanFreeTextSize(spot.fontSize) * Math.max(1, dw / 900)));
    ctx.font=`800 ${size}px system-ui, -apple-system, Segoe UI, sans-serif`;
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    const metrics=ctx.measureText(text);
    const padX=Math.max(8, size*0.38), padY=Math.max(5, size*0.22);
    const boxW=metrics.width + padX*2;
    const boxH=size*1.25 + padY*2;
    ctx.fillStyle='rgba(0,0,0,0.24)';
    roundedVideoRect(ctx,x-boxW/2,y-boxH/2,boxW,boxH,Math.max(8,size*0.35));
    ctx.fill();
    ctx.lineWidth=Math.max(2, size*0.08);
    ctx.strokeStyle='rgba(0,0,0,0.58)';
    ctx.strokeText(text,x,y);
    ctx.fillStyle=cleanFreeTextColor(spot.color);
    ctx.fillText(text,x,y);
  });
  ctx.restore();
}

const _videoCrawlTextCache=new Map();
function clearVideoCrawlTextCache(){
  try{ _videoCrawlTextCache.clear(); }catch(e){}
}
function getVideoCrawlTextCanvas(crawlSpot, fontSize, text){
  const color=getFreeTextColor(crawlSpot);
  const font=`800 ${fontSize}px system-ui, -apple-system, Segoe UI, sans-serif`;
  const key=[text,color,fontSize].join('\u0001');
  const cached=_videoCrawlTextCache.get(key);
  if(cached) return cached;
  const measure=document.createElement('canvas').getContext('2d');
  measure.font=font;
  const metrics=measure.measureText(text);
  const padX=Math.max(24, Math.round(fontSize*0.9));
  const padY=Math.max(14, Math.round(fontSize*0.55));
  const w=Math.max(1, Math.ceil(metrics.width + padX*2 + fontSize));
  const h=Math.max(1, Math.ceil(fontSize*1.45 + padY*2));
  const canvas=document.createElement('canvas');
  canvas.width=w;
  canvas.height=h;
  const cctx=canvas.getContext('2d');
  cctx.font=font;
  cctx.textAlign='left';
  cctx.textBaseline='middle';
  cctx.lineWidth=Math.max(2, fontSize*0.08);
  cctx.strokeStyle='rgba(0,0,0,0.58)';
  cctx.fillStyle=color;
  cctx.shadowColor='rgba(0,0,0,0.55)';
  cctx.shadowBlur=Math.max(4, Math.round(fontSize*0.22));
  cctx.strokeText(text,padX,h/2);
  cctx.fillText(text,padX,h/2);
  const item={canvas,width:w,height:h};
  if(_videoCrawlTextCache.size>24) _videoCrawlTextCache.clear();
  _videoCrawlTextCache.set(key,item);
  return item;
}

function drawVideoCrawl(ctx, crawlSpot, dx, dy, dw, dh, progress, fixedGeom=null){
  if(!crawlSpot || !dw || !dh) return;
  const rawText=String(crawlSpot.text || '').replace(/\r/g,'').trim();
  if(!rawText) return;
  const mode=getCrawlMode(crawlSpot);
  const dir=getCrawlDirection(crawlSpot);
  const boxW=(fixedGeom && Number.isFinite(fixedGeom.boxW)) ? fixedGeom.boxW : Math.max(160, Math.min(dw, dw * getCrawlBoxWidthPct(crawlSpot) / 100));
  const boxH=(fixedGeom && Number.isFinite(fixedGeom.boxH)) ? fixedGeom.boxH : Math.max(36, Math.min(dh, dh * getCrawlBoxHeightPct(crawlSpot) / 100));
  const cx=(fixedGeom && Number.isFinite(fixedGeom.cx)) ? fixedGeom.cx : (dx + dw * (Number(crawlSpot.x) || 50) / 100);
  const cy=(fixedGeom && Number.isFinite(fixedGeom.cy)) ? fixedGeom.cy : (dy + dh * (Number(crawlSpot.y) || 50) / 100);
  const boxX=cx - boxW/2;
  const boxY=cy - boxH/2;
  const fontSize=Math.max(18, Math.round(cleanFreeTextSize(crawlSpot.fontSize) * Math.max(1, dw / 900)));
  const lineHeight=Math.round(fontSize*1.28);
  ctx.save();
  ctx.beginPath();
  ctx.rect(boxX, boxY, boxW, boxH);
  ctx.clip();
  ctx.font=`800 ${fontSize}px system-ui, -apple-system, Segoe UI, sans-serif`;
  ctx.lineWidth=Math.max(2, fontSize*0.08);
  ctx.strokeStyle='rgba(0,0,0,0.58)';
  ctx.fillStyle=getFreeTextColor(crawlSpot);
  if(mode==='horizontal'){
    const text=rawText.replace(/\s*\n\s*/g,'   ');
    const ticker=getVideoCrawlTextCanvas(crawlSpot,fontSize,text);
    const textWidth=ticker.width;
    const startX=dir==='ltr' ? boxX - textWidth - 24 : boxX + boxW + 18;
    const endX=dir==='ltr' ? boxX + boxW + 18 : boxX - textWidth - 24;
    const x=startX + (endX-startX) * Math.max(0, Math.min(1, progress || 0));
    const y=boxY + (boxH - ticker.height)/2;
    ctx.drawImage(ticker.canvas,x,y);
    ctx.restore();
    return;
  }
  ctx.textAlign='center';
  ctx.textBaseline='top';
  const lines=wrapVideoText(ctx,rawText,Math.max(120, boxW - 24));
  const textHeight=Math.max(lineHeight, lines.length*lineHeight);
  const startY=boxY + boxH + 18;
  const endY=boxY - textHeight - 24;
  const y=startY + (endY-startY) * Math.max(0, Math.min(1, progress || 0));
  lines.forEach((line,i)=>{ const yy=y + i*lineHeight; ctx.strokeText(line,cx,yy); ctx.fillText(line,cx,yy); });
  ctx.restore();
}


const VIDEO_WATERMARK_TEXT='Fotopin by Sp.';
function drawVideoWatermark(ctx){
  const canvas=ctx.canvas;
  const text=VIDEO_WATERMARK_TEXT;
  const size=Math.max(16, Math.min(28, Math.round(canvas.width*0.018)));
  const padX=Math.max(10, Math.round(size*0.48));
  const padY=Math.max(6, Math.round(size*0.28));
  ctx.save();
  ctx.font=`700 ${size}px system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif`;
  ctx.textAlign='left';
  ctx.textBaseline='middle';
  const metrics=ctx.measureText(text);
  const boxW=Math.ceil(metrics.width + padX*2);
  const boxH=Math.ceil(size*1.05 + padY*2);
  const margin=Math.max(14, Math.round(size*0.8));
  const x=canvas.width-boxW-margin;
  const y=canvas.height-boxH-margin;
  roundedVideoRect(ctx,x,y,boxW,boxH,Math.max(10, Math.round(size*0.6)));
  ctx.fillStyle='rgba(0,0,0,0.34)';
  ctx.fill();
  ctx.fillStyle='rgba(255,255,255,0.96)';
  ctx.shadowColor='rgba(0,0,0,0.55)';
  ctx.shadowBlur=Math.max(4, Math.round(size*0.22));
  ctx.fillText(text,x+padX,y+boxH/2);
  ctx.restore();
}

function drawVideoFrame(ctx,img,photo,noteMode,showWatermark,crawlSpot=null,crawlProgress=0,continuousCrawl=null,continuousProgress=0){
  const canvas=ctx.canvas;
  ctx.save();
  ctx.fillStyle='#000';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  const iw=img.naturalWidth || img.width;
  const ih=img.naturalHeight || img.height;
  let dx=0, dy=0, dw=canvas.width, dh=canvas.height;
  if(iw && ih){
    const scale=Math.min(canvas.width/iw, canvas.height/ih);
    dw=iw*scale; dh=ih*scale;
    dx=(canvas.width-dw)/2; dy=(canvas.height-dh)/2;
    ctx.drawImage(img,dx,dy,dw,dh);
  }
  drawFreeTextsOnVideo(ctx, photo, dx, dy, dw, dh);
  const notes=getNoteTexts(photo);
  if(crawlSpot){
    drawVideoCrawl(ctx, crawlSpot, dx, dy, dw, dh, crawlProgress);
  } else {
    if(noteMode && notes.length){
      ctx.fillStyle='rgba(0,0,0,0.45)';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      const text=notes.join('\n\n');
      const long=text.length>180;
      drawVideoTextBox(ctx,text,{center:true,maxWidth:Math.round(canvas.width*0.78),fontSize:long?38:48,lineHeight:long?50:62,maxLines:9,paddingX:42,paddingY:32});
    } else if(photo && photo.description){
      drawVideoTextBox(ctx,photo.description,{center:false,maxWidth:Math.round(canvas.width*0.76),fontSize:30,lineHeight:40,maxLines:4,paddingX:30,paddingY:18});
    }
    if(continuousCrawl){
      if(!continuousCrawl.fixedGeom){
        continuousCrawl.fixedGeom={
          boxW:Math.max(160, Math.min(dw, dw * getCrawlBoxWidthPct(continuousCrawl) / 100)),
          boxH:Math.max(36, Math.min(dh, dh * getCrawlBoxHeightPct(continuousCrawl) / 100)),
          cx:dx + dw * (Number(continuousCrawl.x) || 50) / 100,
          cy:dy + dh * (Number(continuousCrawl.y) || 50) / 100
        };
      }
      drawVideoCrawl(ctx, continuousCrawl, dx, dy, dw, dh, continuousProgress, continuousCrawl.fixedGeom);
    }
  }
  if(showWatermark) drawVideoWatermark(ctx);
  ctx.restore();
}

const VIDEO_QUALITY_PRESETS={
  medium:{key:'medium', width:854, height:480, fps:24, bitrate:1500000, labelKey:'videoQualityMedium'},
  good:{key:'good', width:960, height:540, fps:25, bitrate:2500000, labelKey:'videoQualityGood'},
  high:{key:'high', width:1280, height:720, fps:30, bitrate:3250000, labelKey:'videoQualityHigh'},
  maximum:{key:'maximum', width:1920, height:1080, fps:30, bitrate:4000000, labelKey:'videoQualityMaximum'}
};
function escapeHtml(s){ return String(s||'').replace(/[&<>"']/g, ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
function videoQualityOptionsHtml(selected){
  return Object.values(VIDEO_QUALITY_PRESETS).map(q=>`<option value="${q.key}" ${q.key===selected?'selected':''}>${t(q.labelKey)}</option>`).join('');
}

function videoMusicOptionsHtml(){
  const opts=[];
  const hasAlbumMusic=state.musicTracks.length>0;
  opts.push(`<option value="none" ${hasAlbumMusic?'':'selected'}>${t('videoMusicNone')}</option>`);
  opts.push(`<option value="file">${t('videoMusicChooseFile')}</option>`);
  if(hasAlbumMusic){
    opts.push(`<option value="random" selected>${t('videoMusicRandom')}</option>`);
    state.musicTracks.forEach((m,i)=>{
      opts.push(`<option value="album:${i}">🎵 ${escapeHtml(m.name || ('MP3 '+(i+1)))}</option>`);
    });
  }
  DEFAULT_WEB_MUSIC_URLS.forEach((url,i)=>{
    opts.push(`<option value="web:${i}">🌐 ${escapeHtml(videoWebMusicName(i))}</option>`);
  });
  return opts.join('');
}
function videoWebMusicName(index){
  const url=DEFAULT_WEB_MUSIC_URLS[index] || '';
  const raw=(url.split('/').pop() || ('music_'+(index+1)+'.mp3')).split('?')[0];
  try{ return decodeURIComponent(raw); }catch(e){ return raw; }
}
function getVideoWebMusicEntry(index){
  if(!videoWebMusicCache[index]){
    videoWebMusicCache[index]={index,name:videoWebMusicName(index),status:'idle',progress:0,loadedBytes:0,totalBytes:0,blobUrl:null,audioBuffer:null,error:'',promise:null};
  }
  return videoWebMusicCache[index];
}
function formatVideoBytes(bytes){
  const n=Number(bytes||0);
  if(!n) return '0 B';
  if(n>=1024*1024) return (n/(1024*1024)).toFixed(1)+' MB';
  if(n>=1024) return Math.round(n/1024)+' KB';
  return n+' B';
}
function videoWebMusicStatusText(entry){
  if(!entry) return t('videoWebMusicIdle');
  if(entry.status==='ready') return `${t('videoWebMusicReady')} · ${formatVideoBytes(entry.totalBytes || entry.loadedBytes)}`;
  if(entry.status==='loading'){
    const pct=entry.progress||0;
    if(entry.totalBytes){
      return `${t('videoWebMusicDownloading')} ${pct}% · ${formatVideoBytes(entry.loadedBytes)} / ${formatVideoBytes(entry.totalBytes)}`;
    }
    return `${t('videoWebMusicDownloading')} ${pct}%`;
  }
  if(entry.status==='error') return `${t('videoWebMusicError')}${entry.error ? ': '+entry.error : ''}`;
  return t('videoWebMusicIdle');
}
function videoWebMusicRowStyle(entry, selected){
  const base='padding:10px 12px;border-radius:12px;border:1px solid #d1d5db;margin-bottom:8px;';
  if(entry && entry.status==='ready') return base + `background:${selected?'#dcfce7':'#f0fdf4'};border-color:${selected?'#22c55e':'#86efac'};`;
  if(entry && entry.status==='error') return base + `background:${selected?'#fee2e2':'#fef2f2'};border-color:${selected?'#ef4444':'#fca5a5'};`;
  if(entry && entry.status==='loading') return base + `background:${selected?'#dbeafe':'#eff6ff'};border-color:${selected?'#3b82f6':'#93c5fd'};`;
  return base + `background:${selected?'#eef2ff':'#fff'};border-color:${selected?'#6366f1':'#d1d5db'};`;
}
function updateVideoDialogInfo(){
  const info=$('videoExternalMusicName');
  const select=$('videoMusicSelect');
  if(!info || !select) return;
  const value=select.value || 'none';
  if(value==='file'){
    const input=$('videoExternalMusicInput');
    const file=(input && input.files && input.files[0]) || null;
    info.textContent=file ? `${t('videoMusicSelectedFile')}: ${file.name}` : t('videoMusicWarning');
    return;
  }
  if(value.startsWith('web:')){
    const idx=Number(value.split(':')[1]);
    const entry=getVideoWebMusicEntry(idx);
    info.textContent=`${t('videoMusicSelectedWeb')}: ${entry.name} — ${videoWebMusicStatusText(entry)}`;
    return;
  }
  if(value==='none'){
    info.textContent=t('videoMusicWarning');
    return;
  }
  const label=select.options[select.selectedIndex] ? select.options[select.selectedIndex].textContent.trim() : value;
  info.textContent=`${t('videoMusicSelectedSource')}: ${label}`;
}
function renderVideoWebMusicList(){
  const list=$('videoWebMusicList');
  const select=$('videoMusicSelect');
  if(!list || !select) return;
  const selected=select.value || 'none';
  list.innerHTML='';
  DEFAULT_WEB_MUSIC_URLS.forEach((url,i)=>{
    const entry=getVideoWebMusicEntry(i);
    const row=document.createElement('div');
    row.setAttribute('style', videoWebMusicRowStyle(entry, selected===`web:${i}`));
    const title=document.createElement('div');
    title.style.fontWeight='600';
    title.textContent=`🎵 ${entry.name}`;
    const status=document.createElement('div');
    status.style.fontSize='12px';
    status.style.margin='4px 0 6px 0';
    status.style.color=entry.status==='ready' ? '#166534' : entry.status==='error' ? '#991b1b' : entry.status==='loading' ? '#1d4ed8' : '#6b7280';
    status.textContent=videoWebMusicStatusText(entry);
    const progWrap=document.createElement('div');
    progWrap.style.height='8px';
    progWrap.style.borderRadius='999px';
    progWrap.style.background='#e5e7eb';
    progWrap.style.overflow='hidden';
    progWrap.style.marginBottom='8px';
    const prog=document.createElement('div');
    prog.style.height='100%';
    prog.style.width=(entry.status==='ready' ? 100 : Math.max(0, Math.min(100, entry.progress || 0)))+'%';
    prog.style.background=entry.status==='ready' ? '#22c55e' : entry.status==='error' ? '#ef4444' : '#2563eb';
    progWrap.appendChild(prog);
    const actions=document.createElement('div');
    actions.style.display='flex';
    actions.style.gap='8px';
    actions.style.flexWrap='wrap';
    actions.style.alignItems='center';
    const dlBtn=document.createElement('button');
    dlBtn.type='button';
    dlBtn.textContent=entry.status==='error' ? t('videoWebMusicRetry') : t('videoWebMusicDownload');
    dlBtn.disabled=entry.status==='loading';
    dlBtn.addEventListener('click', async ()=>{
      try{
        select.value=`web:${i}`;
        updateVideoDialogInfo();
        renderVideoWebMusicList();
        await ensureVideoWebMusicDownloaded(i);
        select.value=`web:${i}`;
      }catch(err){
        console.warn('Web music download failed:', err);
      }
      updateVideoDialogInfo();
      renderVideoWebMusicList();
    });
    const useBtn=document.createElement('button');
    useBtn.type='button';
    useBtn.textContent=t('videoWebMusicUse');
    useBtn.disabled=entry.status==='loading';
    useBtn.addEventListener('click', async ()=>{
      select.value=`web:${i}`;
      renderVideoWebMusicList();
      updateVideoDialogInfo();
      if(entry.status!=='ready' || !entry.audioBuffer){
        try{ await ensureVideoWebMusicDownloaded(i); }catch(err){ console.warn('Web music select failed:', err); }
      }
      select.value=`web:${i}`;
      renderVideoWebMusicList();
      updateVideoDialogInfo();
    });
    actions.append(dlBtn,useBtn);
    // Se il download è fallito, mostriamo un link diretto per scaricare il file manualmente
    if(entry.status==='error'){
      const saveLink=document.createElement('a');
      saveLink.href=url;
      saveLink.target='_blank';
      saveLink.rel='noopener';
      saveLink.textContent=state.language==='it' ? '⬇ Scarica MP3' : '⬇ Download MP3';
      saveLink.style.cssText='font-size:12px;color:#2563eb;text-decoration:underline;cursor:pointer;margin-left:4px';
      saveLink.title=state.language==='it'
        ? 'Apri il link, salva il file MP3, poi caricalo con "Scegli MP3 esterno" qui sopra'
        : 'Open the link, save the MP3 file, then load it with "Choose external MP3" above';
      actions.appendChild(saveLink);
    }
    actions.append(dlBtn,useBtn);
    row.append(title,status,progWrap,actions);
    list.appendChild(row);
  });
}
async function ensureVideoWebMusicDownloaded(index){
  const entry=getVideoWebMusicEntry(index);
  if(entry.status==='ready' && entry.blobUrl && entry.audioBuffer) return entry;
  if(entry.status==='ready' && !entry.audioBuffer) entry.status='idle';
  if(entry.promise) return entry.promise;
  const url=DEFAULT_WEB_MUSIC_URLS[index];
  if(!url) throw new Error('Missing URL');
  entry.status='loading';
  entry.progress=10;
  entry.loadedBytes=0;
  entry.totalBytes=0;
  entry.error='';
  updateVideoDialogInfo();
  renderVideoWebMusicList();
  entry.promise=(async()=>{
    let tick=null;
    try{
      tick=setInterval(()=>{
        if(entry.status==='loading'){
          entry.progress=Math.min(92, (entry.progress||10)+4);
          updateVideoDialogInfo();
          renderVideoWebMusicList();
        }
      },400);

      let audioArrayBuffer=null;

      // Strategia 1: fetch diretto
      if(!audioArrayBuffer){
        try{
          const resp=await fetch(url);
          if(resp.ok){
            audioArrayBuffer=await resp.arrayBuffer();
            console.log('[WebMusicDL] fetch OK, bytes:', audioArrayBuffer.byteLength);
          }
        }catch(e){ console.warn('[WebMusicDL] fetch failed:', e.message); }
      }

      // Strategia 2: XHR
      if(!audioArrayBuffer){
        try{
          audioArrayBuffer=await new Promise((resolve,reject)=>{
            const xhr=new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType='arraybuffer';
            xhr.timeout=30000;
            xhr.onprogress=(ev)=>{
              if(ev.lengthComputable){
                entry.totalBytes=ev.total;
                entry.loadedBytes=ev.loaded;
                entry.progress=Math.round((ev.loaded/ev.total)*90)+5;
                updateVideoDialogInfo();
                renderVideoWebMusicList();
              }
            };
            xhr.onload=()=>{
              if(xhr.status>=200 && xhr.status<300 && xhr.response && xhr.response.byteLength>0){
                resolve(xhr.response);
              } else { reject(new Error('XHR status '+xhr.status)); }
            };
            xhr.onerror=()=>reject(new Error('XHR network error'));
            xhr.ontimeout=()=>reject(new Error('XHR timeout'));
            xhr.send();
          });
          console.log('[WebMusicDL] XHR OK, bytes:', audioArrayBuffer.byteLength);
        }catch(e){ console.warn('[WebMusicDL] XHR failed:', e.message); }
      }

      if(!audioArrayBuffer || audioArrayBuffer.byteLength < 500){
        // Il download diretto non è possibile — per restrizioni CORS del browser
        // il file è riproducibile ma non scaricabile via JavaScript.
        // Apriamo il link in una nuova tab perché il browser lo scaricherà direttamente.
        const fileName=decodeURIComponent(url.split('/').pop()||'music.mp3').split('?')[0];
        throw new Error(
          state.language==='it'
            ? `Non riesco a scaricare "${fileName}" per restrizioni del browser.\n\nSoluzione:\n1. Apri questo link in una nuova scheda per scaricare il file:\n${url}\n\n2. Poi scegli "Scegli MP3 esterno" e seleziona il file scaricato.`
            : `Cannot download "${fileName}" due to browser restrictions.\n\nSolution:\n1. Open this link in a new tab to download the file:\n${url}\n\n2. Then choose "Choose external MP3" and select the downloaded file.`
        );
      }

      // Verifica che il buffer sia decodificabile
      const AudioCtx=window.AudioContext || window.webkitAudioContext;
      if(AudioCtx){
        try{
          const ctx=new AudioCtx();
          const decoded=await ctx.decodeAudioData(audioArrayBuffer.slice(0));
          console.log('[WebMusicDL] Decode OK — duration:', decoded.duration.toFixed(1)+'s');
          ctx.close();
        }catch(decErr){
          throw new Error('Audio scaricato ma non decodificabile: ' + decErr.message);
        }
      }

      const blob=new Blob([audioArrayBuffer], {type:'audio/mpeg'});
      const blobUrl=URL.createObjectURL(blob);
      entry.blobUrl=blobUrl;
      entry.audioBuffer=audioArrayBuffer;
      entry.status='ready';
      entry.progress=100;
      entry.totalBytes=audioArrayBuffer.byteLength;
      entry.loadedBytes=audioArrayBuffer.byteLength;
      entry.error='';
      return entry;
    }catch(err){
      entry.status='error';
      entry.progress=0;
      entry.error=(err && err.message) ? err.message : 'Download fallito';
      throw err;
    }finally{
      if(tick) clearInterval(tick);
      entry.promise=null;
      updateVideoDialogInfo();
      renderVideoWebMusicList();
    }
  })();
  return entry.promise;
}
function showVideoOptionsDialog(){
  return new Promise(resolve=>{
    const overlay=document.createElement('div');
    overlay.className='guide-overlay';
    overlay.id='videoOptionsOverlay';
    overlay.innerHTML=`
      <div class="guide-box settings-box" style="max-width:620px">
        <div class="guide-header"><h2>${t('videoOptionsTitle')}</h2></div>
        <div class="guide-body">
          <p class="hint">${t('videoStartFromRoot')}</p>
          <label class="field-label" for="videoMusicSelect">${t('videoMusicLabel')}</label>
          <select id="videoMusicSelect" style="width:100%;margin-bottom:8px">${videoMusicOptionsHtml()}</select>
          <input id="videoExternalMusicInput" type="file" accept="audio/mpeg,audio/mp3,audio/*" style="width:100%;margin-bottom:6px" />
          <button id="videoPreviewMusicBtn" type="button" style="margin:0 0 8px 0">${t('videoPreviewMusic')}</button>
          <div id="videoExternalMusicName" class="hint" style="margin-bottom:12px">${t('videoMusicWarning')}</div>
          <label class="field-label" style="margin-top:6px">${t('videoWebMusicTitle')}</label>
          <div id="videoWebMusicList" style="max-height:240px;overflow:auto;margin-bottom:12px"></div>
          <label class="field-label" for="videoQualitySelect" style="margin-top:14px">${t('videoQualityLabel')}</label>
          <select id="videoQualitySelect" style="width:100%;margin-bottom:10px">${videoQualityOptionsHtml(localStorage.getItem('photopin_video_quality') || 'high')}</select>
          <label style="display:flex;align-items:flex-start;gap:8px;margin:6px 0 2px 0;cursor:pointer"><input id="videoWatermarkCheck" type="checkbox" ${localStorage.getItem('photopin_video_watermark')==='1' ? 'checked' : ''} /><span>${t('watermarkOption')}</span></label>
        </div>
        <div class="settings-actions">
          <button id="videoCancelBtn" type="button">${t('cancel')}</button>
          <button id="videoOkBtn" type="button" class="primary">${t('videoContinue')}</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    let externalFile=null;
    let previewAudio=null;
    let previewUrlToRevoke=null;
    function stopPreview(){
      if(previewAudio){
        try{ previewAudio.pause(); previewAudio.src=''; previewAudio.load(); }catch(e){}
        previewAudio=null;
      }
      if(previewUrlToRevoke){ try{ URL.revokeObjectURL(previewUrlToRevoke); }catch(e){} previewUrlToRevoke=null; }
      const btn=$('videoPreviewMusicBtn');
      if(btn) btn.textContent=t('videoPreviewMusic');
    }
    const close=(value)=>{ stopPreview(); overlay.remove(); resolve(value); };
    $('videoExternalMusicInput').addEventListener('change', async ev=>{
      externalFile=(ev.target.files && ev.target.files[0]) || null;
      if(externalFile){
        $('videoMusicSelect').value='file';
      }
      stopPreview();
      updateVideoDialogInfo();
      renderVideoWebMusicList();
    });
    $('videoMusicSelect').addEventListener('change', async ev=>{
      stopPreview();
      const value=ev.target.value || 'none';
      if(value !== 'file' && externalFile){
        // manteniamo il file scelto ma non lo usiamo se la selezione è diversa
      }
      if(value.startsWith('web:')){
        const idx=Number(value.split(':')[1]);
        if(Number.isInteger(idx)){
          try{ await ensureVideoWebMusicDownloaded(idx); }catch(err){ console.warn('Web music auto-download failed:', err); }
        }
      }
      updateVideoDialogInfo();
      renderVideoWebMusicList();
    });
    $('videoPreviewMusicBtn').addEventListener('click', async ()=>{
      if(previewAudio){ stopPreview(); return; }
      const currentValue=$('videoMusicSelect').value || 'none';
      if(currentValue.startsWith('web:')){
        const idx=Number(currentValue.split(':')[1]);
        const entry=getVideoWebMusicEntry(idx);
        if(entry.status==='loading') return alert(t('videoMusicDownloadingNow'));
        if(entry.status!=='ready'){
          try{ await ensureVideoWebMusicDownloaded(idx); }catch(err){ return alert(t('videoPreviewError')); }
        }
      }
      const source=chooseVideoMusicSource({musicValue:currentValue, externalFile});
      if(!source || !source.url) return alert(currentValue.startsWith('web:') ? t('videoMusicNotReady') : t('videoPreviewNoMusic'));
      try{
        previewAudio=new Audio();
        previewAudio.loop=true;
        previewAudio.preload='auto';
        previewAudio.src=source.url;
        if(source.revoke) previewUrlToRevoke=source.url;
        await previewAudio.play();
        $('videoPreviewMusicBtn').textContent=t('videoStopPreview');
      }catch(err){
        console.warn('Video preview audio failed:', err);
        stopPreview();
        alert(t('videoPreviewError'));
      }
    });
    $('videoCancelBtn').addEventListener('click',()=>close(null));
    $('videoOkBtn').addEventListener('click',()=>{
      const qualityKey=$('videoQualitySelect').value || 'high';
      const watermark=!!($('videoWatermarkCheck') && $('videoWatermarkCheck').checked);
      localStorage.setItem('photopin_video_quality', qualityKey);
      localStorage.setItem('photopin_video_watermark', watermark ? '1' : '0');
      close({
        quality: VIDEO_QUALITY_PRESETS[qualityKey] || VIDEO_QUALITY_PRESETS.high,
        musicValue: $('videoMusicSelect').value || 'none',
        externalFile,
        watermark
      });
    });
    updateVideoDialogInfo();
    renderVideoWebMusicList();
  });
}
function chooseVideoMusicSource(options){
  if(!options) return null;
  const value=options.musicValue || 'none';
  if(value==='none') return null;
  if(value==='file' && options.externalFile){
    const url=URL.createObjectURL(options.externalFile);
    return {name:options.externalFile.name, url, revoke:true, file:options.externalFile, type:options.externalFile.type || 'audio/mpeg'};
  }
  if(value==='random'){
    if(state.musicTracks.length){
      const i=Math.floor(Math.random()*state.musicTracks.length);
      const m=state.musicTracks[i];
      return {name:m.name, url:m.url, revoke:false, buffer:m.buffer, type:m.type || 'audio/mpeg'};
    }
    const readyIndexes=Object.keys(videoWebMusicCache).map(Number).filter(i=>getVideoWebMusicEntry(i).status==='ready' && getVideoWebMusicEntry(i).blobUrl);
    if(readyIndexes.length){
      const idx=readyIndexes[Math.floor(Math.random()*readyIndexes.length)];
      const entry=getVideoWebMusicEntry(idx);
      return {name:entry.name, url:entry.blobUrl, revoke:false, buffer:entry.audioBuffer || null, type:'audio/mpeg'};
    }
    return null;
  }
  const [kind,idxText]=value.split(':');
  const idx=Number(idxText);
  if(kind==='album' && Number.isInteger(idx) && state.musicTracks[idx]){
    const m=state.musicTracks[idx];
    return {name:m.name, url:m.url, revoke:false, buffer:m.buffer, type:m.type || 'audio/mpeg'};
  }
  if(kind==='web' && Number.isInteger(idx) && DEFAULT_WEB_MUSIC_URLS[idx]){
    const entry=getVideoWebMusicEntry(idx);
    if(entry.status==='ready' && entry.blobUrl){
      return {name:entry.name, url:entry.blobUrl, revoke:false, buffer:entry.audioBuffer || null, type:'audio/mpeg'};
    }
    return null;
  }
  return null;
}
function waitAudioReady(audio, timeoutMs=8000){
  return new Promise((resolve,reject)=>{
    if(audio.readyState >= 2) return resolve();
    let done=false;
    const finish=(ok,err)=>{
      if(done) return;
      done=true;
      clearTimeout(timer);
      audio.removeEventListener('canplay', onOk);
      audio.removeEventListener('loadeddata', onOk);
      audio.removeEventListener('loadedmetadata', onOk);
      audio.removeEventListener('error', onErr);
      ok ? resolve() : reject(err || new Error('Audio non caricabile'));
    };
    const onOk=()=>finish(true);
    const onErr=()=>finish(false, new Error('Audio non caricabile'));
    const timer=setTimeout(()=>finish(false, new Error('Timeout caricamento audio')), timeoutMs);
    audio.addEventListener('canplay', onOk, {once:true});
    audio.addEventListener('loadeddata', onOk, {once:true});
    audio.addEventListener('loadedmetadata', onOk, {once:true});
    audio.addEventListener('error', onErr, {once:true});
    try{ audio.load(); }catch(e){}
  });
}
async function prepareVideoAudioTrack(options){
  const source=chooseVideoMusicSource(options);
  console.log('[AudioPrep] source:', source ? {name:source.name, hasFile:!!source.file, hasBuffer:!!source.buffer, url:source.url?.substring(0,60)} : null);
  if(!source || !source.url) return null;
  const AudioCtx=window.AudioContext || window.webkitAudioContext;

  // Funzione helper: decodifica dati audio grezzi via AudioContext e produce un
  // MediaStream da collegare al MediaRecorder. È il percorso più affidabile.
  async function decodeAndStream(rawArrayBuffer){
    if(!AudioCtx) throw new Error('AudioContext non disponibile');
    const audioCtx=new AudioCtx();
    let bufferSource=null;
    try{
      const audioBuffer = await audioCtx.decodeAudioData(rawArrayBuffer);
      const dest=audioCtx.createMediaStreamDestination();
      const gain=audioCtx.createGain();
      // Partiamo con volume 0: il bufferSource viene avviato subito per garantire che
      // il MediaStreamDestination produca frame audio reali sin dall'inizio.
      gain.gain.value=0;
      bufferSource=audioCtx.createBufferSource();
      bufferSource.buffer=audioBuffer;
      bufferSource.loop=true;
      bufferSource.connect(gain);
      gain.connect(dest);
      if(audioCtx.state==='suspended') await audioCtx.resume();
      bufferSource.start(0);
      if(!dest.stream.getAudioTracks().length) throw new Error('Nessuna traccia audio generata');
      console.log('[AudioPrep] decodeAndStream OK — duration:', audioBuffer.duration.toFixed(1)+'s',
        'sampleRate:', audioBuffer.sampleRate, 'channels:', audioBuffer.numberOfChannels);
      return {
        stream:dest.stream,
        start(){
          try{
            if(audioCtx.state==='suspended') audioCtx.resume();
            gain.gain.setValueAtTime(0.92, audioCtx.currentTime);
          }catch(e){ console.warn('Audio unmute failed:', e); }
        },
        stop(){
          try{ bufferSource.stop(); }catch(e){}
          try{ bufferSource.disconnect(); gain.disconnect(); }catch(e){}
          try{ audioCtx.close(); }catch(e){}
          if(source.revoke) URL.revokeObjectURL(source.url);
        }
      };
    }catch(err){
      try{ if(bufferSource) bufferSource.stop(); }catch(e){}
      try{ audioCtx.close(); }catch(e){}
      throw err;
    }
  }

  // Caso 1: abbiamo i dati audio come file o buffer (musica album, MP3 esterno,
  // o musica web già scaricata da ensureVideoWebMusicDownloaded).
  if(AudioCtx && (source.file || source.buffer)){
    console.log('[AudioPrep] Caso 1: decodifica da', source.file ? 'file' : 'buffer',
      source.buffer ? '('+source.buffer.byteLength+' bytes)' : '');
    try{
      const raw = source.file ? await source.file.arrayBuffer() : source.buffer.slice(0);
      return await decodeAndStream(raw);
    }catch(err){
      console.warn('[AudioPrep] Caso 1 fallito:', err.message);
      if(source.revoke) URL.revokeObjectURL(source.url);
      throw err;
    }
  }

  // Caso 2: URL senza buffer — tentativo fetch diretto come ultimo resort
  if(AudioCtx && source.url){
    console.log('[AudioPrep] Caso 2: tentativo fetch diretto');
    try{
      const resp=await fetch(source.url);
      if(resp.ok){
        const raw=await resp.arrayBuffer();
        if(raw && raw.byteLength > 0) return await decodeAndStream(raw);
      }
    }catch(e){ console.warn('[AudioPrep] Caso 2 fallito:', e.message); }
  }

  console.warn('[AudioPrep] Nessun metodo audio ha funzionato');
  if(source.revoke) URL.revokeObjectURL(source.url);
  return null;
}

function throwIfVideoCancelled(token){
  if(token && token.cancelled){ const err=new Error('VIDEO_CANCELLED'); err.code='VIDEO_CANCELLED'; throw err; }
}
function isVideoCancelledError(err){ return !!(err && (err.code==='VIDEO_CANCELLED' || err.message==='VIDEO_CANCELLED')); }

async function drawVideoSegmentForDuration(ctx,img,photo,noteMode,durationMs,fps,videoTrack,showWatermark,options={}){
  const frameMs=Math.max(33, Math.round(1000/Math.max(1, fps || 25)));
  const cancelToken=options.cancelToken || null;
  throwIfVideoCancelled(cancelToken);
  const fadeOut=!!options.fadeOut;
  const blackHoldMs=Math.max(0, Number(options.blackHoldMs) || 0);
  const fadeDuration=Math.max(frameMs, Math.min(Math.max(frameMs, durationMs - blackHoldMs), Number(options.fadeDurationMs) || FINAL_SLIDE_FADE_MS));
  const fadeStart=Math.max(0, durationMs - blackHoldMs - fadeDuration);
  const holdStart=Math.max(fadeStart + fadeDuration, durationMs - blackHoldMs);
  const start=performance.now();
  while(performance.now()-start < durationMs){
    throwIfVideoCancelled(cancelToken);
    const elapsed=performance.now()-start;
    const effDuration=Math.max(frameMs, durationMs - blackHoldMs);
    const crawlProgress=(options.crawlSpot ? Math.max(0, Math.min(1, elapsed / effDuration)) : 0);
    const continuousProgress=(options.continuousCrawl ? (((Number(options.continuousProgressStart)||0) + (elapsed / Math.max(frameMs, Number(options.continuousCrawl.totalMs)||effDuration))) % 1) : 0);
    drawVideoFrame(ctx,img,photo,noteMode,showWatermark,options.crawlSpot || null,crawlProgress,options.continuousCrawl ? options.continuousCrawl.spot : null,continuousProgress);
    if(fadeOut && elapsed >= fadeStart){
      let alpha=1;
      if(elapsed < holdStart){
        alpha=Math.max(0, Math.min(1, (elapsed - fadeStart) / fadeDuration));
      }
      ctx.save();
      ctx.globalAlpha=alpha;
      ctx.fillStyle='#000';
      ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
      ctx.restore();
    }
    // Piccola variazione invisibile: forza alcuni browser a produrre nuovi frame.
    ctx.save();
    ctx.globalAlpha=0.01;
    ctx.fillStyle='#000';
    ctx.fillRect(0,0,1,1);
    ctx.restore();
    if(videoTrack && typeof videoTrack.requestFrame==='function'){
      try{ videoTrack.requestFrame(); }catch(e){}
    }
    await videoSleep(frameMs);
  }
}

function showVideoDownloadDialog(blob, name){
  const old=document.getElementById('videoDownloadOverlay'); if(old) old.remove();
  const url=URL.createObjectURL(blob);
  const overlay=document.createElement('div');
  overlay.id='videoDownloadOverlay';
  overlay.className='guide-overlay';
  const box=document.createElement('div');
  box.className='guide-box settings-box';
  box.style.maxWidth='520px';
  const header=document.createElement('div'); header.className='guide-header';
  const title=document.createElement('h2'); title.textContent=t('videoReady');
  const close=document.createElement('button'); close.type='button'; close.textContent='×';
  header.append(title, close);
  const body=document.createElement('div'); body.className='guide-body';
  const p=document.createElement('p');
  p.textContent=name;
  const hint=document.createElement('p');
  hint.className='hint';
  hint.textContent=t('saveDownloadHint');
  body.append(p,hint);
  const actions=document.createElement('div'); actions.className='settings-actions';
  const dl=document.createElement('a');
  dl.href=url;
  dl.download=name;
  dl.textContent=state.language==='it' ? 'Scarica di nuovo il video' : 'Download video again';
  dl.className='primary';
  dl.style.cssText='display:inline-block;text-decoration:none;border-radius:11px;padding:8px 12px;background:#2563eb;color:white';
  const ok=document.createElement('button'); ok.type='button'; ok.textContent=t('close');
  function cleanup(){ try{ URL.revokeObjectURL(url); }catch(e){} overlay.remove(); }
  close.addEventListener('click', cleanup);
  ok.addEventListener('click', cleanup);
  actions.append(dl,ok);
  box.append(header,body,actions);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
}

function showVideoProgressOverlay(total, onCancel){
  const overlay=document.createElement('div');
  overlay.className='guide-overlay';
  overlay.id='videoProgressOverlay';
  overlay.innerHTML=`<div class="guide-box settings-box" style="max-width:520px"><div class="guide-header"><h2>${t('videoGenerating')}</h2></div><div class="guide-body"><p id="videoProgressText">${t('videoPreparing')}</p><div style="height:12px;background:#e5e7eb;border-radius:999px;overflow:hidden"><div id="videoProgressBar" style="height:100%;width:0%;background:#2563eb"></div></div><div class="settings-actions" style="justify-content:flex-end;margin-top:14px"><button id="videoCancelBtn" type="button">${t('cancel')}</button></div></div></div>`;
  document.body.appendChild(overlay);
  let cancelled=false;
  const cancelBtn=overlay.querySelector('#videoCancelBtn');
  if(cancelBtn){
    cancelBtn.addEventListener('click', ()=>{
      if(cancelled) return;
      cancelled=true;
      cancelBtn.disabled=true;
      const text=overlay.querySelector('#videoProgressText');
      if(text) text.textContent=t('videoCancelled');
      if(typeof onCancel === 'function') onCancel();
    });
  }
  return {
    update(done){
      const pct=total ? Math.round((done/total)*100) : 0;
      const text=overlay.querySelector('#videoProgressText');
      const bar=overlay.querySelector('#videoProgressBar');
      if(text && !cancelled) text.textContent=`${t('videoGenerating')} ${done}/${total} (${pct}%)`;
      if(bar) bar.style.width=pct+'%';
    },
    message(message, pct=null){
      const text=overlay.querySelector('#videoProgressText');
      const bar=overlay.querySelector('#videoProgressBar');
      if(text && !cancelled) text.textContent=message;
      if(bar && pct!==null) bar.style.width=Math.max(0, Math.min(100, Math.round(pct)))+'%';
    },
    isCancelled(){ return cancelled; },
    close(){ overlay.remove(); }
  };
}
async function exportPresentationVideo(){
  if(!state.photos.length) return alert(t('choosePhoto'));
  if(typeof MediaRecorder === 'undefined' || !HTMLCanvasElement.prototype.captureStream){
    return alert(t('videoNoSupport'));
  }
  const options=await showVideoOptionsDialog();
  if(!options) return;
  if((options.musicValue||'').startsWith('web:')){
    const idx=Number(String(options.musicValue).split(':')[1]);
    const entry=getVideoWebMusicEntry(idx);
    if(!entry || entry.status!=='ready' || !entry.audioBuffer){
      try{ await ensureVideoWebMusicDownloaded(idx); }
      catch(err){ return alert(err && err.message ? err.message : t('videoMusicNotReady')); }
    }
  }
  const quality=options.quality || VIDEO_QUALITY_PRESETS.high;
  const segments=buildVideoSegments();
  if(!segments.length) return alert(t('choosePhoto'));
  const canvas=document.createElement('canvas');
  canvas.width=quality.width;
  canvas.height=quality.height;
  const ctx=canvas.getContext('2d');
  const fps=quality.fps || 30;
  let canvasStream=canvas.captureStream(0);
  let videoTrack=(canvasStream.getVideoTracks && canvasStream.getVideoTracks()[0]) || null;
  if(!videoTrack || typeof videoTrack.requestFrame !== 'function'){
    try{ canvasStream.getTracks().forEach(track=>track.stop()); }catch(_e){}
    canvasStream=canvas.captureStream(fps);
    videoTrack=(canvasStream.getVideoTracks && canvasStream.getVideoTracks()[0]) || null;
  }
  let audioKit=null;
  clearVideoCrawlTextCache();
  clearVideoImageCache();
  const chunks=[];
  let recorder;
  const cancelToken={cancelled:false};
  const progress=showVideoProgressOverlay(segments.length, ()=>{ cancelToken.cancelled=true; });
  let audioWarning='';
  try{
    await preloadVideoImages(segments, cancelToken, progress);
    try{
      throwIfVideoCancelled(cancelToken);
      audioKit=await prepareVideoAudioTrack(options);
      console.log('[VideoExport] audioKit:', audioKit ? 'OK' : 'null',
        audioKit ? 'tracks:'+audioKit.stream.getAudioTracks().length : '',
        audioKit ? 'trackState:'+audioKit.stream.getAudioTracks().map(t=>t.readyState).join(',') : '');
    }catch(audioErr){
      console.warn('Video audio disabled:', audioErr);
      audioKit=null;
      audioWarning=t('videoAudioSkipped');
    }
    throwIfVideoCancelled(cancelToken);
    const choice=videoMimeChoice(!!audioKit);
    console.log('[VideoExport] MIME choice:', choice, 'hasAudio:', !!audioKit);
    if(!choice) throw new Error(t('videoNoSupport'));
    const stream=new MediaStream();
    canvasStream.getVideoTracks().forEach(track=>stream.addTrack(track));
    if(audioKit && audioKit.stream){ audioKit.stream.getAudioTracks().forEach(track=>stream.addTrack(track)); }
    console.log('[VideoExport] Combined stream tracks — video:', stream.getVideoTracks().length, 'audio:', stream.getAudioTracks().length,
      'audioStates:', stream.getAudioTracks().map(t=>t.readyState+'/'+t.enabled).join(','));
    try{
      recorder=new MediaRecorder(stream, choice.mime ? {mimeType:choice.mime, videoBitsPerSecond:quality.bitrate, audioBitsPerSecond:128000} : {videoBitsPerSecond:quality.bitrate, audioBitsPerSecond:128000});
    }catch(e){
      try{ recorder=new MediaRecorder(stream, {videoBitsPerSecond:quality.bitrate, audioBitsPerSecond:128000}); }
      catch(err){ stream.getTracks().forEach(track=>track.stop()); throw new Error(t('videoNoSupport')); }
    }
    const actualMime=recorder.mimeType || choice.mime || 'video/webm';
    console.log('[VideoExport] Recorder created — actualMime:', actualMime, 'requested:', choice.mime);
    const ext=actualMime.includes('mp4') ? 'mp4' : 'webm';
    const finished=new Promise((resolve,reject)=>{
      recorder.ondataavailable=ev=>{ if(ev.data && ev.data.size) chunks.push(ev.data); };
      recorder.onerror=ev=>reject((ev && ev.error) || new Error('Recorder error'));
      recorder.onstop=()=>resolve();
    });
    // Disegniamo il primo frame PRIMA di avviare MediaRecorder: evita video neri
    // su alcuni browser quando il canvas parte vuoto.
    const firstSeg=segments[0];
    const firstPhoto=state.photos[firstSeg.idx];
    throwIfVideoCancelled(cancelToken);
    const firstImg=await loadImageForVideo(firstPhoto.url);
    drawVideoFrame(ctx,firstImg,firstPhoto,firstSeg.noteMode,!!options.watermark, firstSeg.crawlSpotId ? getCrawlSpots(firstPhoto).find(x=>x.id===firstSeg.crawlSpotId) : null, 0, firstSeg.continuousCrawl ? firstSeg.continuousCrawl.spot : null, firstSeg.continuousProgressStart || 0);
    if(videoTrack && typeof videoTrack.requestFrame==='function'){ try{ videoTrack.requestFrame(); }catch(e){} }
    await videoSleep(100);
    throwIfVideoCancelled(cancelToken);
    // CRITICO: avviare l'audio PRIMA del recorder. Se l'audio inizia dopo
    // recorder.start(), il muxer potrebbe scrivere l'header senza traccia audio,
    // producendo un file muto anche se la traccia audio è nel MediaStream.
    if(audioKit && typeof audioKit.start === 'function') audioKit.start();
    console.log('[VideoExport] Audio started, waiting before recorder.start()');
    await videoSleep(50);
    throwIfVideoCancelled(cancelToken);
    recorder.start();
    console.log('[VideoExport] Recorder started, state:', recorder.state);
    await videoSleep(80);
    throwIfVideoCancelled(cancelToken);
    const firstIsLast = segments.length===1;
    await drawVideoSegmentForDuration(ctx,firstImg,firstPhoto,firstSeg.noteMode,Math.max(250, (firstSeg.durationMs * (firstIsLast ? 2 : 1)) + (firstIsLast ? FINAL_BLACK_HOLD_MS : 0)),fps,videoTrack,!!options.watermark,{fadeOut:firstIsLast, fadeDurationMs:FINAL_SLIDE_FADE_MS, blackHoldMs:firstIsLast ? FINAL_BLACK_HOLD_MS : 0, cancelToken, crawlSpot:firstSeg.crawlSpotId ? getCrawlSpots(firstPhoto).find(x=>x.id===firstSeg.crawlSpotId) : null, continuousCrawl:firstSeg.continuousCrawl || null, continuousProgressStart:firstSeg.continuousProgressStart || 0});
    progress.update(1);
    for(let i=1;i<segments.length;i++){
      const seg=segments[i];
      const photo=state.photos[seg.idx];
      throwIfVideoCancelled(cancelToken);
      const img=await loadImageForVideo(photo.url);
      const isLast = i===segments.length-1;
      await drawVideoSegmentForDuration(ctx,img,photo,seg.noteMode,Math.max(250, (seg.durationMs * (isLast ? 2 : 1)) + (isLast ? FINAL_BLACK_HOLD_MS : 0)),fps,videoTrack,!!options.watermark,{fadeOut:isLast, fadeDurationMs:FINAL_SLIDE_FADE_MS, blackHoldMs:isLast ? FINAL_BLACK_HOLD_MS : 0, cancelToken, crawlSpot:seg.crawlSpotId ? getCrawlSpots(photo).find(x=>x.id===seg.crawlSpotId) : null, continuousCrawl:seg.continuousCrawl || null, continuousProgressStart:seg.continuousProgressStart || 0});
      progress.update(i+1);
    }
    recorder.stop();
    await finished;
    stream.getTracks().forEach(track=>track.stop());
    progress.close();
    if(audioKit){ audioKit.stop(); audioKit=null; }
    const blob=new Blob(chunks,{type:actualMime});
    clearVideoCrawlTextCache();
    clearVideoImageCache();
    if(!blob.size) throw new Error('Empty video');
    const name=safeName(state.albumName || t('exportedName')) + '_video.' + ext;
    downloadBlob(blob,name);
    showVideoDownloadDialog(blob, name);
    const audioMsg=audioWarning ? `\n\n${audioWarning}` : '';
    const webmMsg=(ext==='mp4') ? '' : (audioKit ? `\n\n${t('videoAudioWebm')}` : `\n\n${t('videoFallbackWebm')}`);
    if(webmMsg || audioMsg) alert(`${t('videoReady')}: ${name}` + webmMsg + audioMsg);
  }catch(err){
    try{ if(recorder && recorder.state !== 'inactive') recorder.stop(); }catch(e){}
    try{ canvasStream.getTracks().forEach(track=>track.stop()); }catch(e){}
    if(audioKit){ try{ audioKit.stop(); }catch(e){} }
    clearVideoCrawlTextCache();
    clearVideoImageCache();
    clearVideoCrawlTextCache();
    progress.close();
    if(isVideoCancelledError(err) || progress.isCancelled()){
      console.log('Video export cancelled');
      return alert(t('videoCancelled'));
    }
    console.error(err);
    alert(t('videoError')+' '+(err && err.message ? err.message : ''));
  }
}

function openSlideshow(){
  if(!state.photos.length) return alert(t('choosePhoto'));
  const built=buildCurrentPresentationPath(Math.max(0,state.currentIndex), state.settings.allowedPathRepeats);
  state.presentationPath=built.indexes;
  state.presentationPathPos=0;
  state.slideIndex=state.presentationPath[0] ?? Math.max(0,state.currentIndex);
  state.slideBranch=null; state.slideNoteMode=false; state.slideCrawlId=null; state.slideContinuousCrawl=null; $('slideshow').classList.remove('hidden'); state.slideshowRunning=false; state.musicPlaying=false; loadActiveMusic(); ensureSlideFadeOverlay(); resetSlideFade();
  _mapVisible = true;
  renderSlide();
  setMapVisible(true);
  toggleSlideshow();
}
function loadActiveMusic(){ const m=activeMusic(); const audio=$('audioPlayer'); audio.src=m?m.url:''; audio.loop=state.musicTracks.length<=1; setMusicButtonState(); }
function renderSlide(){
  if($('slideshow').classList.contains('hidden')) return;
  const p=state.photos[state.slideIndex]; if(!p) return;
  $('slideImage').src=p.url; $('slideCaption').textContent=''; $('slideCaption').style.display='none';
  const noteTexts=getNoteTexts(p);
  const showSlideNotes=noteTexts.length > 0;
  maybeActivateSlideContinuousCrawl(p);
  const crawlSpot=currentSlideCrawlSpot();
  const continuousData=!crawlSpot ? getSlideContinuousRenderData() : null;
  const descEl=$('slideDescription');
  let descText='';
  if(crawlSpot || continuousData){
    descText='';
  } else if(state.slideNoteMode && showSlideNotes){
    descText=noteTexts.join('\n\n');
  } else {
    const descParts=[];
    if(p.description) descParts.push(p.description);
    descText=descParts.join('\n\n');
  }
  descEl.textContent=descText;
  descEl.classList.toggle('visible', !!descText);
  descEl.classList.toggle('detail-notes', state.slideNoteMode && showSlideNotes);
  descEl.classList.toggle('long-note', state.slideNoteMode && showSlideNotes && descText.length > 180);
  descEl.classList.toggle('zoom-note', state.slideNoteMode && showSlideNotes);
  $('slideStage').classList.toggle('note-mode', state.slideNoteMode && showSlideNotes && !crawlSpot && !continuousData);
  ensureSlideFadeOverlay();
  resetSlideFade();
  renderPins($('slidePinLayer'),p);
  renderSlideCrawlOverlay(p);
  renderSlideContinuousCrawlOverlay(p); $('slideStage').classList.toggle('playing',state.slideshowRunning);
  $('slidePlayBtn').textContent=state.slideshowRunning?t('pausePresentation'):t('startPresentation'); $('musicBtn').textContent=state.musicPlaying?t('pauseMusic'):t('music'); const changeBtn=$('changeMusicBtn'); if(changeBtn){ changeBtn.textContent=t('changeMusic'); changeBtn.classList.toggle('hidden', !(state.musicPlaying && !!activeMusic())); } setMusicButtonState();
  if($('slideCinematicBtn')){ $('slideCinematicBtn').textContent=state.cinematicMode?t('cinematicOn'):t('cinematicOff'); $('slideCinematicBtn').title=t('cinematicLabel'); $('slideCinematicBtn').classList.toggle('cinematic-active',!!state.cinematicMode); }
  // Ridisegna mappa (anche se animazione è attiva, aggiorna posizione corrente)
  if(_mapVisible) drawPresentationMap(_mapPulseStart ? ((performance.now() - _mapPulseStart) % 1150) / 1150 : 0);
}
function toggleSlideshow(){
  if(state.slideshowRunning){ state.slideshowRunning=false; clearSlideTimers(); renderSlide(); return; }
  state.slideshowRunning=true; renderSlide(); scheduleSlideTimer();
}
function restartTimerIfNeeded(){ scheduleSlideTimer(); }
function nextSlide(){
  if(!state.photos.length) return;
  const current=state.photos[state.slideIndex];
  const crawls=getSlideCrawlSpots(current);
  if(!state.slideNoteMode && hasSlideNotes(current)){
    state.slideNoteMode=true;
    state.slideCrawlId=null;
    renderSlide();
    scheduleSlideTimer();
    return;
  }
  if(crawls.length){
    if(!state.slideCrawlId){
      state.slideCrawlId=crawls[0].id;
      renderSlide();
      scheduleSlideTimer();
      return;
    }
    const idx=crawls.findIndex(s=>s.id===state.slideCrawlId);
    if(idx>=0 && idx<crawls.length-1){
      state.slideCrawlId=crawls[idx+1].id;
      renderSlide();
      scheduleSlideTimer();
      return;
    }
  }
  if(state.slideshowRunning && isLastPresentationSegment()){
    finishSlideshowAtBlack();
    return;
  }
  state.slideNoteMode=false;
  state.slideCrawlId=null;
  if(!Array.isArray(state.presentationPath) || !state.presentationPath.length){
    const built=buildCurrentPresentationPath(Math.max(0,state.slideIndex), state.settings.allowedPathRepeats);
    state.presentationPath=built.indexes; state.presentationPathPos=0;
  }
  state.presentationPathPos=(state.presentationPathPos+1)%state.presentationPath.length;
  state.slideIndex=state.presentationPath[state.presentationPathPos];
  renderSlide();
  scheduleSlideTimer();
}
function prevSlide(){
  if(!state.photos.length) return;
  const current=state.photos[state.slideIndex];
  const crawls=getSlideCrawlSpots(current);
  if(state.slideCrawlId){
    const idx=crawls.findIndex(s=>s.id===state.slideCrawlId);
    if(idx>0){ state.slideCrawlId=crawls[idx-1].id; renderSlide(); scheduleSlideTimer(); return; }
    state.slideCrawlId=null;
    renderSlide(); scheduleSlideTimer(); return;
  }
  if(state.slideNoteMode){
    state.slideNoteMode=false;
    renderSlide();
    scheduleSlideTimer();
    return;
  }
  if(!Array.isArray(state.presentationPath) || !state.presentationPath.length){
    const built=buildCurrentPresentationPath(Math.max(0,state.slideIndex), state.settings.allowedPathRepeats);
    state.presentationPath=built.indexes; state.presentationPathPos=0;
  }
  state.presentationPathPos=(state.presentationPathPos-1+state.presentationPath.length)%state.presentationPath.length;
  state.slideIndex=state.presentationPath[state.presentationPathPos];
  refreshSlideContinuousCrawlOnBackward();
  state.slideNoteMode=false;
  const prevPhoto=state.photos[state.slideIndex];
  const prevCrawls=getSlideCrawlSpots(prevPhoto);
  state.slideCrawlId=prevCrawls.length ? prevCrawls[prevCrawls.length-1].id : null;
  if(state.slideCrawlId) state.slideNoteMode=hasSlideNotes(prevPhoto);
  renderSlide();
  scheduleSlideTimer();
}
function toggleMusic(){
  const audio=$('audioPlayer'); if(!activeMusic()){ setMusicButtonState(); return; }
  if(state.musicPlaying){ audio.pause(); state.musicPlaying=false; } else { audio.play(); state.musicPlaying=true; }
  renderSlide();
}
function playNextMusic(){
  if(state.musicTracks.length){
    state.activeMusicIndex=(state.activeMusicIndex+1)%state.musicTracks.length;
  } else if(DEFAULT_WEB_MUSIC_URLS.length){
    setWebMusicByIndex(state.webMusicIndex + 1);
  } else {
    return;
  }
  loadActiveMusic();
  if(state.musicPlaying) $('audioPlayer').play();
  updateMusicName(); renderMusicList(); renderSlide();
}
function closeSlideshow(updateIndex=true){
  clearSlideTimers(); state.slideshowRunning=false; state.musicPlaying=false; state.slideBranch=null; state.presentationPath=[]; state.presentationPathPos=0; state.slideNoteMode=false; state.slideCrawlId=null; state.slideContinuousCrawl=null;
  stopMapAnim();
  const audio=$('audioPlayer'); audio.pause(); audio.currentTime=0;
  if(updateIndex) state.currentIndex=state.slideIndex;
  $('slideshow').classList.add('hidden'); renderAll(); applyI18n();
}
function updateCaption(){ renderSlide(); }
function handleKeys(e){
  if($('slideshow').classList.contains('hidden')) return;
  if(e.key==='Escape'){ closeSlideshow(); }
  if(e.key===' '){ e.preventDefault(); toggleSlideshow(); }
  if(e.key==='ArrowRight'){ nextSlide(); }
  if(e.key==='ArrowLeft'){ prevSlide(); }
}

function normalizeSpotForStorage(raw){
  const spot=cloneSpot(raw || {});
  if(isCrawlSpot(spot)) return setCrawlLayout(setFreeTextStyle(spot, getFreeTextColor(spot), getFreeTextSize(spot)), getCrawlBoxWidthPct(spot), getCrawlBoxHeightPct(spot), getCrawlSpeed(spot), getCrawlMode(spot), getCrawlDirection(spot), getCrawlContinuous(spot));
  if(isTextSpot(spot)){ spot.type='text'; return setFreeTextStyle(spot, getFreeTextColor(spot), getFreeTextSize(spot)); }
  if(isPhotoSpot(spot)){ spot.type='photo'; return spot; }
  spot.type='note';
  return spot;
}

function buildManifest(){
  const albumName=$('albumName').value || t('albumDefault');
  const startIndex=0; // Sempre la prima foto come radice del percorso
  const pathInfo=buildUnifiedPresentationPath(state.photos, startIndex, state.settings.allowedPathRepeats);
  const startPhoto=state.photos[startIndex] || state.photos[0] || null;
  return {
    app:'FotoPin', version:2, language:state.language, albumName, settings:{...state.settings, allowedPathRepeats:clampAllowedPathRepeats(state.settings.allowedPathRepeats)}, activeMusicIndex:state.activeMusicIndex,
    presentationStartPhotoId:startPhoto ? startPhoto.id : null,
    presentationPathIds:pathInfo.ids,
    music: state.musicTracks.map((m,i)=>({id:m.id,name:m.name,type:m.type,path:`music/${String(i+1).padStart(3,'0')}_${m.name}`})),
    photos: state.photos.map((p,i)=>({id:p.id,name:p.name,title:p.title,description:p.description||'',type:p.type,path:`photos/${String(i+1).padStart(3,'0')}_${p.name}`,spots:(p.spots||[]).map(normalizeSpotForStorage)}))
  };
}
function buildProjectFiles(){
  const manifest=buildManifest(); const settings={language:manifest.language, albumName:manifest.albumName, settings:manifest.settings, activeMusicIndex:manifest.activeMusicIndex};
  const files={'album.json':strToU8(JSON.stringify(manifest,null,2)),'settings.json':strToU8(JSON.stringify(settings,null,2))};
  state.photos.forEach((p,i)=>{ files[manifest.photos[i].path]=new Uint8Array(p.buffer); });
  state.musicTracks.forEach((m,i)=>{ files[manifest.music[i].path]=new Uint8Array(m.buffer); });
  return {manifest,files};
}



function showExportMenuDialog(){
  if(isAlbumLocked()) return alert(t('lockedSaveBlocked'));
  const old=document.getElementById('exportMenuOverlay');
  if(old) old.remove();
  const overlay=document.createElement('div');
  overlay.id='exportMenuOverlay';
  overlay.className='guide-overlay';
  const box=document.createElement('div');
  box.className='guide-box settings-box';
  box.style.maxWidth='440px';
  const header=document.createElement('div');
  header.className='guide-header';
  const title=document.createElement('h2');
  title.textContent=t('exportMenuTitle');
  const close=document.createElement('button');
  close.type='button';
  close.textContent='×';
  close.addEventListener('click',()=>overlay.remove());
  header.append(title, close);
  const body=document.createElement('div');
  body.className='guide-body';
  const hint=document.createElement('p');
  hint.className='hint';
  hint.textContent=t('exportMenuHelp');
  const actions=document.createElement('div');
  actions.className='settings-actions';
  actions.style.justifyContent='flex-start';
  actions.style.flexWrap='wrap';
  const makeBtn=(label, fn, primary=false)=>{
    const btn=document.createElement('button');
    btn.type='button';
    btn.textContent=label;
    if(primary) btn.className='primary';
    btn.disabled=!state.photos.length;
    btn.addEventListener('click',()=>{
      overlay.remove();
      fn();
    });
    return btn;
  };
  actions.appendChild(makeBtn(t('exportEmbedPublic'), exportEmbedPublicZip, true));
  actions.appendChild(makeBtn(t('exportEmbedProtected'), exportEmbedProtectedZip));
  actions.appendChild(makeBtn(t('exportVideoOption') || t('generateVideo'), exportPresentationVideo));
  const cancel=document.createElement('button');
  cancel.type='button';
  cancel.textContent=t('close');
  cancel.addEventListener('click',()=>overlay.remove());
  actions.appendChild(cancel);
  body.append(hint, actions);
  box.append(header, body);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
  overlay.addEventListener('click', ev=>{ if(ev.target===overlay) overlay.remove(); });
}

function installPathTransferUi(){
  // I comandi percorso/punti non devono essere visibili nella schermata normale.
  // Manteniamo solo l'input file nascosto, usato dal dialog segreto.
  if($('pathPointsImportInput')) return;
  const input=document.createElement('input');
  input.id='pathPointsImportInput';
  input.type='file';
  input.accept='.json,application/json';
  input.className='hidden';
  input.addEventListener('change', importPathPointsFile);
  document.body.appendChild(input);
}

function updatePathTransferUi(){
  // Nessun pulsante visibile qui: export/import stanno solo nel dialog nascosto.
}


function showHiddenPathToolsDialog(){
  const old=document.getElementById('hiddenPathToolsOverlay');
  if(old) old.remove();
  const overlay=document.createElement('div');
  overlay.id='hiddenPathToolsOverlay';
  overlay.className='guide-overlay';
  const box=document.createElement('div');
  box.className='guide-box settings-box';
  box.style.maxWidth='420px';
  const header=document.createElement('div');
  header.className='guide-header';
  const title=document.createElement('h2');
  title.textContent=t('hiddenPathToolsTitle');
  const close=document.createElement('button');
  close.type='button';
  close.textContent='×';
  close.addEventListener('click',()=>overlay.remove());
  header.append(title, close);
  const body=document.createElement('div');
  body.className='guide-body';
  const hint=document.createElement('p');
  hint.className='hint';
  hint.textContent=t('hiddenPathToolsHint');
  const actions=document.createElement('div');
  actions.className='settings-actions';
  actions.style.justifyContent='flex-start';
  actions.style.flexWrap='wrap';

  const exportBtn=document.createElement('button');
  exportBtn.type='button';
  exportBtn.className='primary';
  exportBtn.textContent=t('exportPathPoints');
  exportBtn.disabled=!state.photos.length;
  exportBtn.addEventListener('click',()=>{ overlay.remove(); exportPathPointsFile(); });
  actions.appendChild(exportBtn);

  // Importa compare quando l'album corrente è sbloccato.
  // Se l'album protetto è stato sbloccato con password, l'utente può importare anche lì.
  if(!isAlbumLocked()){
    const importBtn=document.createElement('button');
    importBtn.type='button';
    importBtn.textContent=t('importPathPoints');
    importBtn.disabled=!state.photos.length;
    importBtn.addEventListener('click',()=>{
      const input=$('pathPointsImportInput');
      if(input){ overlay.remove(); input.click(); }
    });
    actions.appendChild(importBtn);
  }

  if(!isAlbumLocked()){
    const exportClearBtn=document.createElement('button');
    exportClearBtn.type='button';
    exportClearBtn.textContent=t('exportClearPhotos');
    exportClearBtn.disabled=!state.photos.length;
    exportClearBtn.addEventListener('click',()=>{ overlay.remove(); exportClearPhotosZip(); });
    actions.appendChild(exportClearBtn);

    const reimportClearBtn=document.createElement('button');
    reimportClearBtn.type='button';
    reimportClearBtn.textContent=t('reimportClearPhotos');
    reimportClearBtn.disabled=!state.photos.length;
    reimportClearBtn.addEventListener('click',()=>{
      const input=$('clearPhotosImportInput');
      if(input){ overlay.remove(); input.click(); }
    });
    actions.appendChild(reimportClearBtn);
  }

  const cancel=document.createElement('button');
  cancel.type='button';
  cancel.textContent=t('close');
  cancel.addEventListener('click',()=>overlay.remove());
  actions.appendChild(cancel);
  body.append(hint, actions);
  box.append(header, body);
  overlay.appendChild(box);
  document.body.appendChild(overlay);
  overlay.addEventListener('click', ev=>{ if(ev.target===overlay) overlay.remove(); });
}


function installHiddenPathToolsTrigger(){
  const brand=document.querySelector('.brand');
  if(!brand || brand.dataset.hiddenPathToolsTrigger==='1') return;
  brand.dataset.hiddenPathToolsTrigger='1';
  brand.title='FotoPin';
  let rightClickCount=0;
  let firstRightClickAt=0;
  brand.addEventListener('contextmenu', ev=>{
    ev.preventDefault();
    ev.stopPropagation();
    const now=Date.now();
    if(!firstRightClickAt || now-firstRightClickAt>1200){
      firstRightClickAt=now;
      rightClickCount=1;
      return;
    }
    rightClickCount++;
    if(rightClickCount>=3){
      rightClickCount=0;
      firstRightClickAt=0;
      showHiddenPathToolsDialog();
    }
  });
}

function baseFileNameForMatch(value){
  return String(value||'').split(/[\\/]/).pop().trim();
}
function stripExtForMatch(value){
  return baseFileNameForMatch(value).replace(/\.[^.]+$/,'').trim();
}
function normPhotoMatchKey(value){
  let v=stripExtForMatch(value).toLowerCase();
  v=v.normalize ? v.normalize('NFD').replace(/[\u0300-\u036f]/g,'') : v;
  v=v.replace(/^\d{1,5}[\s_.-]+/,'');
  v=v.replace(/[_\s.-]+/g,' ').trim();
  return v;
}
function photoMatchKeys(photo, index){
  const keys=[];
  [photo && photo.name, photo && photo.title, photo && photo.path, photo && photo.fileName].forEach(v=>{
    const k=normPhotoMatchKey(v);
    if(k && !keys.includes(k)) keys.push(k);
  });
  const ord='@index:' + index;
  if(!keys.includes(ord)) keys.push(ord);
  return keys;
}
function exportedPathSpot(spot, sourcePhotos){
  const isPhoto=isPhotoSpot(spot);
  const isText=isTextSpot(spot);
  const isCrawl=isCrawlSpot(spot);
  const out={
    type:isPhoto?'photo':(isCrawl?'crawl':(isText?'text':'note')),
    x:num(spot && spot.x),
    y:num(spot && spot.y),
    text:String((spot && spot.text) || '')
  };
  if(isPhoto){
    const targetIndex=sourcePhotos.findIndex(p=>p && p.id === spot.targetPhotoId);
    out.targetPhotoId=spot.targetPhotoId || '';
    out.targetIndex=targetIndex;
    if(targetIndex>=0){
      out.targetName=sourcePhotos[targetIndex].name || '';
      out.targetTitle=sourcePhotos[targetIndex].title || '';
    }
  } else if(isText || isCrawl){
    const c=getFreeTextColor(spot);
    const fs=getFreeTextSize(spot);
    out.color=c; out.textColor=c; out.freeTextColor=c;
    out.fontSize=fs; out.size=fs; out.textSize=fs;
    if(isCrawl){
      out.boxWidthPct=getCrawlBoxWidthPct(spot); out.crawlBoxWidthPct=out.boxWidthPct;
      out.boxHeightPct=getCrawlBoxHeightPct(spot); out.crawlBoxHeightPct=out.boxHeightPct;
      out.scrollSpeed=getCrawlSpeed(spot); out.crawlSpeed=out.scrollSpeed;
      out.crawlMode=getCrawlMode(spot); out.orientation=out.crawlMode;
      out.crawlDirection=getCrawlDirection(spot); out.tickerDirection=out.crawlDirection;
      out.crawlContinuous=getCrawlContinuous(spot); out.continuous=out.crawlContinuous; out.continuousCrawl=out.crawlContinuous;
    }
  }
  return out;
}

function buildPathPointsPayload(){
  const manifest=buildManifest();
  return {
    app:'PhotoPin percorso/punti',
    format:'photopin-path-points',
    version:1,
    exportedAt:new Date().toISOString(),
    albumName:manifest.albumName,
    language:state.language,
    settings:{
      slideSeconds:state.settings.slideSeconds,
      showCaption:!!state.settings.showCaption,
      allowedPathRepeats:clampAllowedPathRepeats(state.settings.allowedPathRepeats)
    },
    presentationStartPhotoId:manifest.presentationStartPhotoId || null,
    presentationPathIds:manifest.presentationPathIds || [],
    photos:state.photos.map((p,i)=>({
      sourceIndex:i,
      sourceId:p.id,
      name:p.name || '',
      title:p.title || '',
      description:p.description || '',
      spots:(p.spots||[]).map(s=>exportedPathSpot(normalizeFreeTextSpot(s), state.photos))
    }))
  };
}
function exportPathPointsFile(){
  if(!state.photos.length) return alert(t('choosePhoto'));
  const payload=buildPathPointsPayload();
  const name=safeName((payload.albumName || t('exportedName')) + '_percorso_punti') + '.json';
  downloadBlob(new Blob([JSON.stringify(payload,null,2)], {type:'application/json'}), name);
  alert(t('pathPointsExported') + ': ' + name);
}
function buildPathImportMapping(sourcePhotos, destPhotos){
  const usedDest=new Set();
  const keyToDest=new Map();
  destPhotos.forEach((p,i)=>{
    photoMatchKeys(p,i).forEach(k=>{ if(k && !keyToDest.has(k)) keyToDest.set(k,i); });
  });
  const mapping={};
  sourcePhotos.forEach((sp,si)=>{
    const keys=photoMatchKeys(sp, Number.isFinite(Number(sp.sourceIndex)) ? Number(sp.sourceIndex) : si);
    let found=-1;
    for(const k of keys){
      const di=keyToDest.get(k);
      if(di!==undefined && !usedDest.has(di)){ found=di; break; }
    }
    if(found<0 && si<destPhotos.length && !usedDest.has(si)) found=si;
    if(found>=0){ mapping[si]=found; usedDest.add(found); }
  });
  return mapping;
}
function copiedPathSpot(importedSpot, mapping, sourcePhotos){
  const type=String(importedSpot && importedSpot.type || '').toLowerCase();
  const x=num(importedSpot && importedSpot.x);
  const y=num(importedSpot && importedSpot.y);
  const text=String((importedSpot && importedSpot.text) || '');
  if(type==='photo'){
    let targetSrcIndex=Number(importedSpot.targetIndex);
    if(!Number.isFinite(targetSrcIndex) || targetSrcIndex<0){
      targetSrcIndex=sourcePhotos.findIndex(p=>p && p.sourceId && p.sourceId===importedSpot.targetPhotoId);
    }
    const destTargetIndex=mapping[targetSrcIndex];
    if(destTargetIndex===undefined || !state.photos[destTargetIndex]) return null;
    return {id:uid(), type:'photo', targetPhotoId:state.photos[destTargetIndex].id, x, y, text:text || t('point')};
  }
  if(type==='text'){
    return setFreeTextStyle({id:uid(), type:'text', x, y, text}, getFreeTextColor(importedSpot), getFreeTextSize(importedSpot));
  }
  if(type==='crawl' || type==='titolator' || type==='titolatore'){
    return setCrawlLayout(setFreeTextStyle({id:uid(), type:'crawl', x, y, text}, getFreeTextColor(importedSpot), getFreeTextSize(importedSpot)), getCrawlBoxWidthPct(importedSpot), getCrawlBoxHeightPct(importedSpot), getCrawlSpeed(importedSpot), getCrawlMode(importedSpot), getCrawlDirection(importedSpot), getCrawlContinuous(importedSpot));
  }
  return {id:uid(), type:'note', x, y, text};
}
async function importPathPointsFile(e){
  const file=e.target.files && e.target.files[0];
  if(!file) return;
  e.target.value='';
  if(isAlbumLocked()) return alert(t('pathPointsImportLocked'));
  if(!state.photos.length) return alert(t('choosePhoto'));
  try{
    const payload=JSON.parse(await file.text());
    if(!payload || payload.format!=='photopin-path-points' || !Array.isArray(payload.photos)) throw new Error('Invalid format');
    const sourcePhotos=payload.photos;
    const mapping=buildPathImportMapping(sourcePhotos, state.photos);
    const matched=Object.keys(mapping).length;
    if(!matched) return alert(t('pathPointsImportNoMatches'));
    if(!confirm(`${t('pathPointsImportConfirm')}\n\n${t('pathPointsMatched')}: ${matched}/${sourcePhotos.length}\n\n${t('pathPointsRootHint')}`)) return;
    let copied=0, skipped=0;
    sourcePhotos.forEach((srcPhoto, srcIndex)=>{
      const destIndex=mapping[srcIndex];
      if(destIndex===undefined || !state.photos[destIndex]) return;
      const newSpots=[];
      (srcPhoto.spots || []).forEach(sp=>{
        const copiedSpot=copiedPathSpot(sp, mapping, sourcePhotos);
        if(copiedSpot){ newSpots.push(copiedSpot); copied++; }
        else skipped++;
      });
      state.photos[destIndex].spots=normalizeSpots(newSpots);
    });
    setDirty();
    state.albumLocked=false;
    renderAll();
    updateLockUi();
    alert(`${t('pathPointsImported')}\n${t('pathPointsMatched')}: ${matched}/${sourcePhotos.length}\n${t('pathPointsCopied')}: ${copied}\n${t('pathPointsSkipped')}: ${skipped}\n\n${t('pathPointsRootHint')}`);
  }catch(err){
    console.error(err);
    alert(t('pathPointsImportInvalid'));
  }
}

async function buildFotoPinAlbumExport(){
  const albumName = $('albumName').value || state.albumName || t('albumDefault');
  const albumId = Number(state.albumMeta.id) || Date.now();
  const createdAt = Number(state.albumMeta.createdAt) || albumId;
  const files = {};
  const photoMap = {};
  const assigned = new Map();
  const exported = new Set();
  const usedNumericIds = new Set();
  let photoIndex = 0;
  let numericIdSeq = 1;

  function toLongId(value){
    const n = Number(value);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : null;
  }

  function nextUniqueLong(preferred){
    let n = toLongId(preferred);
    if(!n || usedNumericIds.has(n)){
      do { n = albumId + numericIdSeq++; } while(usedNumericIds.has(n));
    }
    usedNumericIds.add(n);
    return n;
  }

  function getPhotoNodeId(photo){
    if(!photo._exportNodeId) photo._exportNodeId = nextUniqueLong(photo.nodeId || photo.id);
    return photo._exportNodeId;
  }

  function getSpotId(spot){
    if(!spot._exportSpotId) spot._exportSpotId = nextUniqueLong(spot.id);
    return spot._exportSpotId;
  }

  function assignPhoto(photo, isRoot=false){
    if(assigned.has(photo.id)) return assigned.get(photo.id);
    const path = `/data/user/0/com.fotopin.app/files/photos/imported_${albumId}_${isRoot?'root':'photo_'+photoIndex}.jpg`;
    const zipName = isRoot ? 'root_c50.enc' : `photo_${photoIndex}_c50.enc`;
    if(!isRoot) photoIndex++;
    const info = { path, zipName };
    assigned.set(photo.id, info);
    photoMap[path] = zipName;
    return info;
  }

  function noteToFotoPin(spot){
    const id = getSpotId(spot);
    const note = { createdAt: Number(spot.createdAt) || id, id, text: spot.text || '', xPercent: Number(spot.x) || 50, yPercent: Number(spot.y) || 50 };
    if(isCrawlSpot(spot)){
      const c=getFreeTextColor(spot);
      const fs=getFreeTextSize(spot);
      const w=getCrawlBoxWidthPct(spot);
      const h=getCrawlBoxHeightPct(spot);
      const sp=getCrawlSpeed(spot);
      note.type='crawl';
      note.kind='titolatore';
      note.color=c; note.textColor=c; note.freeTextColor=c;
      note.fontSize=fs; note.size=fs; note.textSize=fs;
      note.boxWidthPct=w; note.crawlBoxWidthPct=w;
      note.boxHeightPct=h; note.crawlBoxHeightPct=h;
      note.scrollSpeed=sp; note.crawlSpeed=sp;
      note.crawlMode=getCrawlMode(spot); note.orientation=note.crawlMode;
      note.crawlDirection=getCrawlDirection(spot); note.tickerDirection=note.crawlDirection;
      note.crawlContinuous=getCrawlContinuous(spot); note.continuous=note.crawlContinuous; note.continuousCrawl=note.crawlContinuous;
    } else if(isTextSpot(spot)){
      const c=getFreeTextColor(spot);
      const fs=getFreeTextSize(spot);
      note.type='text';
      note.color=c; note.textColor=c; note.freeTextColor=c;
      note.fontSize=fs; note.size=fs; note.textSize=fs;
    }
    return note;
  }

  function hotspotToFotoPin(spot, visited){
    const target = spot.targetPhotoId ? findPhotoById(spot.targetPhotoId) : null;
    const id = getSpotId(spot);
    const h = { createdAt: Number(spot.createdAt) || id, id, name: spot.text || t('point'), photos: [], xPercent: Number(spot.x) || 50, yPercent: Number(spot.y) || 50 };
    if(target && !visited.has(target.id)){
      const nextVisited = new Set(visited);
      h.photos.push(photoToNode(target, false, nextVisited));
    }
    return h;
  }

  function photoToNode(photo, isRoot=false, visited=new Set()){
    visited.add(photo.id);
    const info = assignPhoto(photo, isRoot);
    const nodeId = getPhotoNodeId(photo);
    const node = { dateTaken: Number(photo.dateTaken) || Date.now(), filePath: info.path, hotspots: [], id: nodeId, notes: [] };
    const spots = photo.spots || [];
    node.notes = spots.filter(s=>!isPhotoSpot(s)).map(noteToFotoPin);
    node.hotspots = spots.filter(s=>isPhotoSpot(s)).map(s=>hotspotToFotoPin(s, visited));
    return node;
  }

  const rootPhoto = state.photos[0];
  const rootInfo = assignPhoto(rootPhoto, true);
  const rootNode = photoToNode(rootPhoto, true, new Set());
  async function addEncryptedPhoto(photo){
    if(exported.has(photo.id)) return;
    exported.add(photo.id);
    const info = assigned.get(photo.id) || assignPhoto(photo, photo === rootPhoto);
    files[info.zipName] = await encryptFotoPinEnc(new Uint8Array(photo.buffer));
    for(const spot of (photo.spots || [])){
      if(isPhotoSpot(spot) && spot.targetPhotoId){
        const target = findPhotoById(spot.targetPhotoId);
        if(target) await addEncryptedPhoto(target);
      }
    }
  }
  await addEncryptedPhoto(rootPhoto);
  // Include remaining photos too, so they are not lost even if currently not linked from the root.
  for(const photo of state.photos){
    assignPhoto(photo, photo === rootPhoto);
    await addEncryptedPhoto(photo);
  }

  const signature = state.albumMeta.signature || null;
  const album = { createdAt, id: albumId, isReadOnly:false, name: albumName, rootHotspots: rootNode.hotspots, rootImagePath: rootInfo.path, rootNotes: rootNode.notes };
  if(state.albumMeta.latitude !== null && state.albumMeta.latitude !== undefined) album.latitude = state.albumMeta.latitude;
  if(state.albumMeta.longitude !== null && state.albumMeta.longitude !== undefined) album.longitude = state.albumMeta.longitude;
  if(state.albumMeta.address && canEdit()) album.address = state.albumMeta.address;
  if(signature) album.signature = Object.assign({}, signature, { albumId, createdAt });
  files['album.json'] = strToU8(JSON.stringify({ album, photoMap }));
  if(signature) files['.signature'] = strToU8(JSON.stringify(album.signature));

  // Clean temporary export-only fields from the in-memory objects.
  state.photos.forEach(photo=>{ delete photo._exportNodeId; (photo.spots||[]).forEach(s=>delete s._exportSpotId); });
  return { albumName, files };
}

async function buildFotoPinSignature(albumId, createdAt, content){
  const data = strToU8(content || String(albumId));
  const hash = await crypto.subtle.digest('SHA-256', data);
  const b64 = bytesToBase64(new Uint8Array(hash));
  return { albumId, contentHash:b64, createdAt, deviceId:'photopin_html', recoveryCodeHash:'', salt:'' };
}
function bytesToBase64(bytes){
  let s=''; bytes.forEach(b=>s+=String.fromCharCode(b)); return btoa(s);
}
function base64ToBytes(b64){
  const s=atob(b64); const out=new Uint8Array(s.length); for(let i=0;i<s.length;i++) out[i]=s.charCodeAt(i); return out;
}
async function getFotoPinCryptoKey(){
  const enc=new TextEncoder();
  const keyMaterial=await crypto.subtle.importKey('raw', enc.encode('FotoPin$ecur3K3y!2025#Zm'), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2',salt:enc.encode('FtPnS4lt9x2K'),iterations:10000,hash:'SHA-256'}, keyMaterial, {name:'AES-CBC',length:256}, false, ['encrypt','decrypt']);
}
function fotoPinIv(){
  const enc=new TextEncoder();
  const saltBytes=enc.encode('FtPnS4lt9x2K');
  const iv=new Uint8Array(16); iv.set(saltBytes.slice(0,16)); return iv;
}
async function encryptFotoPinEnc(bytes){
  const key=await getFotoPinCryptoKey();
  const encrypted=await crypto.subtle.encrypt({name:'AES-CBC',iv:fotoPinIv()}, key, bytes);
  return new Uint8Array(encrypted);
}

function clearPhotoExportFilename(photo, index){
  const ext = extFromType(photo.type || 'image/jpeg', 'jpg');
  const currentName = String(photo.name || '').trim();
  if(currentName && /\.(jpe?g|png|webp|gif)$/i.test(currentName)) return safeName(currentName);
  const base = safeName(photo.title || currentName || ('foto_' + (index + 1))).replace(/\.[^.]+$/,'') || ('foto_' + (index + 1));
  return `${base}.${ext}`;
}

async function exportClearPhotosZip(){
  if(isAlbumLocked()) return alert(t('clearPhotosLocked'));
  if(!state.photos.length) return alert(t('choosePhoto'));
  const albumName = state.albumName || t('albumDefault');
  const files = {};
  const usedNames = new Set();
  state.photos.forEach((photo, index)=>{
    let path = clearPhotoExportFilename(photo, index);
    if(usedNames.has(path.toLowerCase())){
      const dot = path.lastIndexOf('.');
      const base = dot > 0 ? path.slice(0, dot) : path;
      const ext = dot > 0 ? path.slice(dot) : '';
      let n = 2;
      while(usedNames.has(`${base}_${n}${ext}`.toLowerCase())) n++;
      path = `${base}_${n}${ext}`;
    }
    usedNames.add(path.toLowerCase());
    files[path] = new Uint8Array(photo.buffer);
  });
  const blob = makeZip(files);
  downloadBlob(blob, safeName(albumName) + '_foto_in_chiaro.zip');
}

function guessTypeFromPath(path){
  const lower=String(path||'').toLowerCase();
  if(lower.endsWith('.png')) return 'image/png';
  if(lower.endsWith('.webp')) return 'image/webp';
  if(lower.endsWith('.gif')) return 'image/gif';
  return 'image/jpeg';
}

function baseNameFromZipPath(path){
  return String(path||'').split(/[\\/]/).pop();
}

function isImageZipEntry(path){
  const name=baseNameFromZipPath(path);
  if(!name || name.startsWith('.') || String(path||'').startsWith('__MACOSX/')) return false;
  return /\.(jpe?g|png|webp|gif)$/i.test(name);
}

function buildPhotoNameMap(){
  const exact=new Map();
  const lower=new Map();
  const addName=(name, photo)=>{
    name=String(name||'').trim();
    if(!name) return;
    if(!exact.has(name)) exact.set(name, photo);
    const key=name.toLowerCase();
    if(!lower.has(key)) lower.set(key, photo);
  };

  // Stessa logica di exportClearPhotosZip: serve per riconoscere anche i nomi
  // resi unici in esportazione, es. Foto.jpg, Foto_2.jpg, Foto_3.jpg.
  const usedNames=new Set();
  state.photos.forEach((photo, index)=>{
    let exportName=clearPhotoExportFilename(photo, index);
    if(usedNames.has(exportName.toLowerCase())){
      const dot=exportName.lastIndexOf('.');
      const base=dot>0 ? exportName.slice(0,dot) : exportName;
      const ext=dot>0 ? exportName.slice(dot) : '';
      let n=2;
      while(usedNames.has(`${base}_${n}${ext}`.toLowerCase())) n++;
      exportName=`${base}_${n}${ext}`;
    }
    usedNames.add(exportName.toLowerCase());
    addName(exportName, photo);
    addName(photo.name, photo);
  });
  return {exact, lower};
}

async function reimportClearPhotosZip(e){
  const file=e.target.files[0]; if(!file) return; e.target.value='';
  if(isAlbumLocked()) return alert(t('clearPhotosLocked'));
  try{
    const entries=await readZipAsync(new Uint8Array(await file.arrayBuffer()));
    const candidates=Object.keys(entries).filter(isImageZipEntry).sort();
    if(!candidates.length) throw new Error('No image files');
    const maps=buildPhotoNameMap();
    let replaced=0;
    let unmatched=0;
    const replacedIds=new Set();
    for(const path of candidates){
      const name=baseNameFromZipPath(path);
      const photo=maps.exact.get(name) || maps.lower.get(name.toLowerCase());
      if(!photo || replacedIds.has(photo.id)){ unmatched++; continue; }
      if(photo.url) URL.revokeObjectURL(photo.url);
      const type=guessTypeFromPath(name);
      const bytes=entries[path];
      const buffer=bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
      photo.buffer=buffer;
      photo.type=type;
      photo.url=URL.createObjectURL(new Blob([buffer], {type}));
      replacedIds.add(photo.id);
      replaced++;
    }
    if(!replaced) throw new Error('No matching photos');
    setDirty();
    renderAll();
    alert(`${t('clearPhotosImportPartial')} ${replaced}
${t('clearPhotosImportMissing')} ${Math.max(0, state.photos.length - replaced)}
${t('clearPhotosImportUnmatched')} ${unmatched}`);
  }catch(err){
    console.error(err);
    alert(t('clearPhotosImportError'));
  }
}

function buildPasswordSidecarText(albumName, password){
  const now=new Date().toISOString();
  const albumId=(state.albumMeta && state.albumMeta.id) ? state.albumMeta.id : '';
  const createdAt=(state.albumMeta && state.albumMeta.createdAt) ? new Date(state.albumMeta.createdAt).toISOString() : '';
  return [
    'FotoPin password file (.pswd)',
    '================================',
    'Album: '+(albumName || state.albumName || t('albumDefault')),
    albumId ? 'Album ID: '+albumId : '',
    createdAt ? 'Album created: '+createdAt : '',
    'Saved: '+now,
    '',
    'PASSWORD / CODICE:',
    String(password || ''),
    '',
    'ATTENZIONE:',
    'Questo file contiene la password in chiaro. Conservalo separato dallo ZIP dell album e non inviarlo insieme all album protetto.',
    '',
    'WARNING:',
    'This file contains the password in plain text. Keep it separate from the album ZIP and do not send it together with a protected album.'
  ].filter(line=>line!==null && line!==undefined).join('\n')+'\n';
}
async function chooseImageSaveTarget(suggestedName, mimeType){
  const type=String(mimeType || inferImageTypeFromName(suggestedName) || 'image/jpeg');
  const ext='.' + extFromType(type, String(suggestedName||'').split('.').pop() || 'jpg');
  if(typeof window !== 'undefined' && typeof window.showSaveFilePicker === 'function'){
    try{
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: suggestedName || ('foto' + ext),
        types:[{description:'Image', accept:{[type]:[ext]}}]
      });
      return {kind:'file', fileHandle};
    }catch(err){
      if(err && err.name === 'AbortError') return {kind:'cancelled'};
      console.warn('Image save file picker failed, falling back:', err);
    }
  }
  return {kind:'download'};
}
async function chooseAlbumSaveTarget(suggestedName){
  // Chrome/Edge desktop support directory selection. Other browsers fall back safely.
  if(typeof window !== 'undefined' && typeof window.showDirectoryPicker === 'function'){
    try{
      const dirHandle = await window.showDirectoryPicker({mode:'readwrite'});
      return {kind:'directory', dirHandle};
    }catch(err){
      if(err && err.name === 'AbortError') return {kind:'cancelled'};
      console.warn('Directory picker failed, falling back:', err);
    }
  }
  if(typeof window !== 'undefined' && typeof window.showSaveFilePicker === 'function'){
    try{
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: suggestedName || 'FotoPin_album.zip',
        types:[{description:'FotoPin ZIP', accept:{'application/zip':['.zip']}}]
      });
      return {kind:'file', fileHandle};
    }catch(err){
      if(err && err.name === 'AbortError') return {kind:'cancelled'};
      console.warn('Save file picker failed, falling back:', err);
    }
  }
  return {kind:'download'};
}
async function writeBlobToSaveTarget(target, blob, name){
  if(target && target.kind === 'directory' && target.dirHandle){
    const fileHandle = await target.dirHandle.getFileHandle(name, {create:true});
    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
    return {saved:true, method:'directory', name};
  }
  if(target && target.kind === 'file' && target.fileHandle){
    const writable = await target.fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
    return {saved:true, method:'file', name:(target.fileHandle.name || name)};
  }
  downloadBlob(blob, name);
  return {saved:true, method:'download', name};
}
async function savePasswordSidecarToTarget(target, albumName, password){
  if(!password) return false;
  const base=safeName(albumName || state.albumName || t('albumDefault')) || 'FotoPin_album';
  const blob=new Blob([buildPasswordSidecarText(albumName, password)], {type:'text/plain;charset=utf-8'});
  const name=base + '.pswd';
  if(target && target.kind === 'directory' && target.dirHandle){
    await writeBlobToSaveTarget(target, blob, name);
    return true;
  }
  // Se non abbiamo una cartella vera, resta il comportamento precedente.
  setTimeout(()=>downloadBlob(blob, name), 900);
  return true;
}
function downloadAlbumPasswordFile(albumName, password){
  if(!password) return;
  const base=safeName(albumName || state.albumName || t('albumDefault')) || 'FotoPin_album';
  const blob=new Blob([buildPasswordSidecarText(albumName, password)], {type:'text/plain;charset=utf-8'});
  downloadBlob(blob, base + '.pswd');
}

async function saveProject(){
  if(isAlbumLocked()){
    const unlocked = await unlockAlbumFromPassword();
    if(!unlocked) return;
  }
  if(state.albumMeta && state.albumMeta.signature && !state.albumRecoveryCode){
    const unlocked = await unlockAlbumFromPassword();
    if(!unlocked) return;
  }
  if(!state.photos.length) return alert(t('choosePhoto'));
  const tentativeName = state.sourceFileName || `FotoPin_${safeName(state.albumName || t('albumDefault'))}.zip`;
  const saveTarget = await chooseAlbumSaveTarget(tentativeName);
  if(saveTarget && saveTarget.kind === 'cancelled') return;
  const albumPassword = await ensureAlbumPassword();
  const result = await buildFotoPinAlbumExport();
  const blob = makeZip(result.files);
  const fallbackName = `FotoPin_${safeName(result.albumName || t('albumDefault'))}.zip`;
  const zipName = state.sourceFileName || fallbackName;
  const saved = await writeBlobToSaveTarget(saveTarget, blob, zipName);
  const pw = albumPassword || state.albumRecoveryCode || getRecoveryCodeLocal(state.albumMeta && state.albumMeta.id);
  if(pw) await savePasswordSidecarToTarget(saveTarget, result.albumName, pw);
  state.albumName = result.albumName;
  setDirty(false);
  updateLockUi();
  const hint = (saved && (saved.method === 'directory' || saved.method === 'file')) ? t('saveDirectorySaved') : t('saveDownloadHint');
  alert(`${t('projectSaved')}: ${saved && saved.name ? saved.name : zipName}

${hint}`);
}

function normalizeSpots(spots){
  return (spots||[]).map(raw=>{
    const s=Object.assign({}, raw || {});
    if(isCrawlSpot(s)) s.type='crawl';
    else if(s.targetPhotoId && !s.type) s.type='photo';
    else if(isTextSpot(s)) s.type='text';
    else if(!s.type) s.type='note';
    return normalizeSpotForStorage(s);
  });
}
async function openProjectFile(e){
  const file=e.target.files[0]; if(!file) return; e.target.value='';
  try{
    const entries=await readZipAsync(new Uint8Array(await file.arrayBuffer()));
    if(!entries['album.json']) throw new Error('Missing album.json');
    const data=JSON.parse(u8ToStr(entries['album.json']));
    if(data.album && data.photoMap){
      const converted=await convertFotoPinExport(entries, data);
      closeSlideshow(false); revokeAllUrls();
      state.language = state.language || 'en';
      state.albumName = converted.albumName || t('albumDefault');
      state.settings = Object.assign({slideSeconds:3.75,showCaption:true,imageQuality:'medium',albumImageQuality:clampAlbumImageQuality(localStorage.getItem('photopin_album_image_quality') || 75),allowedPathRepeats:0}, state.settings || {});
      state.photos = converted.photos;
      state.musicTracks = [];
      state.activeMusicIndex = 0;
      state.currentIndex = state.photos.length ? 0 : -1;
      state.spotClipboard=null; state.moveSpot=null; state.undoStack=[]; state.selectedSpot=null; state.pendingPhotoLink=null; state.interactionMode='navigate'; state.editPhotoMetaVisible=false; state.sourceFileName=file.name;
      state.albumMeta=converted.meta; state.albumRecoveryCode='';
      setAlbumLockFromMeta();
      $('albumName').value = state.albumName;
      setDirty(false);
      applyI18n(); renderAll(); updateMusicName();
      return;
    }
    const manifest=data;
    closeSlideshow(false); revokeAllUrls();
    state.language=manifest.language || 'en'; state.albumName=manifest.albumName || t('albumDefault'); state.settings=Object.assign({slideSeconds:3.75,showCaption:true,imageQuality:'medium',albumImageQuality:clampAlbumImageQuality(localStorage.getItem('photopin_album_image_quality') || 75),allowedPathRepeats:0}, manifest.settings || {}); state.photos=[]; state.musicTracks=[]; state.activeMusicIndex=manifest.activeMusicIndex || 0; state.slideBranch=null; state.spotClipboard=null; state.moveSpot=null; state.undoStack=[]; state.selectedSpot=null; state.pendingPhotoLink=null; state.interactionMode='navigate'; state.editPhotoMetaVisible=false; state.sourceFileName=file.name; state.albumMeta={id:null,createdAt:null,signature:null,isReadOnly:false,latitude:null,longitude:null,address:''}; state.albumLocked=false; state.albumRecoveryCode='';
    for(const ph of manifest.photos || []){ const buf=entries[ph.path]; if(!buf) continue; const type=ph.type||'image/jpeg'; const blob=new Blob([buf],{type}); state.photos.push({id:ph.id||uid(),name:ph.name,title:ph.title||ph.name,description:ph.description||'',type,buffer:buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength),url:URL.createObjectURL(blob),spots:normalizeSpots(ph.spots||[])}); }
    const musicEntries = Array.isArray(manifest.music) ? manifest.music : (manifest.music ? [manifest.music] : []);
    for(const m of musicEntries){ const buf=entries[m.path]; if(!buf) continue; const type=m.type||'audio/mpeg'; state.musicTracks.push({id:m.id||uid(),name:m.name,type,buffer:buf.buffer.slice(buf.byteOffset,buf.byteOffset+buf.byteLength),url:URL.createObjectURL(new Blob([buf],{type}))}); }
    if(state.activeMusicIndex >= state.musicTracks.length) state.activeMusicIndex=0;
    state.currentIndex=state.photos.length?0:-1; state.spotClipboard=null; state.moveSpot=null; state.undoStack=[]; state.selectedSpot=null; state.dirty=false; $('languageSelect').value=state.language; $('albumName').value=state.albumName; applyI18n(); renderAll(); updateMusicName();
  }catch(err){ console.error(err); alert(t('loadError')); }
}

async function importFotoPinExportFile(e){
  const file=e.target.files[0]; if(!file) return; e.target.value='';
  try{
    const entries=await readZipAsync(new Uint8Array(await file.arrayBuffer()));
    if(!entries['album.json']) throw new Error('Missing album.json');
    const exportData=JSON.parse(u8ToStr(entries['album.json']));
    if(!exportData.album || !exportData.photoMap) throw new Error('Not a FotoPin album export');
    const converted=await convertFotoPinExport(entries, exportData);
    closeSlideshow(false); revokeAllUrls();
    state.language = state.language || 'en';
    state.albumName = converted.albumName || t('albumDefault');
    state.settings = Object.assign({slideSeconds:3.75,showCaption:true,imageQuality:'medium',albumImageQuality:clampAlbumImageQuality(localStorage.getItem('photopin_album_image_quality') || 75),allowedPathRepeats:0}, state.settings || {});
    state.photos = converted.photos;
    state.musicTracks = [];
    state.activeMusicIndex = 0;
    state.currentIndex = state.photos.length ? 0 : -1;
    state.spotClipboard=null; state.moveSpot=null; state.undoStack=[]; state.selectedSpot=null; state.pendingPhotoLink=null; state.interactionMode='navigate'; state.editPhotoMetaVisible=false; state.sourceFileName=file.name;
    state.albumMeta=converted.meta; state.albumRecoveryCode=''; setAlbumLockFromMeta();
    $('albumName').value = state.albumName;
    setDirty(false);
    applyI18n(); renderAll(); updateMusicName();
    alert(t('fotoPinImported'));
  }catch(err){ console.error(err); alert(t('fotoPinImportError')); }
}

async function convertFotoPinExport(entries, exportData){
  const album=exportData.album || {}; const photoMap=exportData.photoMap || {}; const zipSignature=entries['.signature'] ? JSON.parse(u8ToStr(entries['.signature'])) : null; const signature=zipSignature || album.signature || null;
  const photos=[]; const used=new Set();
  async function createPhoto(originalPath, title, description){
    const zipName=photoMap[originalPath]; if(!zipName || !entries[zipName]) return null;
    if(used.has(originalPath)) return photos.find(p=>p.originalPath===originalPath) || null;
    used.add(originalPath);
    const bytes=await decryptFotoPinEnc(entries[zipName]);
    const safeTitle = title || fileTitle(originalPath) || 'Foto';
    const name=safeName(safeTitle)+'.jpg';
    const photo={id:uid(),originalPath,name,title:safeTitle,description:description||'',type:'image/jpeg',buffer:bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),url:URL.createObjectURL(new Blob([bytes],{type:'image/jpeg'})),spots:[]};
    photos.push(photo);
    return photo;
  }
  function addNotes(photo, notes){
    (notes||[]).forEach(n=>{
      if(!n) return;
      if(isCrawlSpot(n)){
        const spot=setCrawlLayout(
          setFreeTextStyle({id:n.id||uid(),type:'crawl',x:num(n.xPercent),y:num(n.yPercent),text:n.text||''}, getFreeTextColor(n), getFreeTextSize(n)),
          getCrawlBoxWidthPct(n), getCrawlBoxHeightPct(n), getCrawlSpeed(n), getCrawlMode(n), getCrawlDirection(n), getCrawlContinuous(n)
        );
        photo.spots.push(spot);
      } else if(n.type === 'text') {
        photo.spots.push(setFreeTextStyle({id:n.id||uid(),type:'text',x:num(n.xPercent),y:num(n.yPercent),text:n.text||''}, getFreeTextColor(n), getFreeTextSize(n)));
      } else {
        photo.spots.push({id:n.id||uid(),type:'note',x:num(n.xPercent),y:num(n.yPercent),text:n.text||''});
      }
    });
  }
  async function addHotspots(photo, hotspots){
    for(const h of (hotspots||[])){
      const children=Array.isArray(h.photos)?h.photos:[];
      let target=null;
      for(const child of children){
        const childPhoto=await importPhotoNode(child, h.name || fileTitle(child.filePath), '');
        if(!target && childPhoto) target=childPhoto;
      }
      photo.spots.push({id:h.id||uid(),type:target?'photo':'note',targetPhotoId:target?target.id:undefined,x:num(h.xPercent),y:num(h.yPercent),text:h.name||t('point')});
    }
  }
  async function importPhotoNode(node, title, description){
    if(!node || !node.filePath) return null;
    const photo=await createPhoto(node.filePath, title || fileTitle(node.filePath), description || '');
    if(!photo) return null;
    if(node.id && !photo.nodeId) photo.nodeId = node.id;
    if(node.dateTaken && !photo.dateTaken) photo.dateTaken = node.dateTaken;
    if(photo._expanded) return photo;
    photo._expanded=true;
    addNotes(photo, node.notes || []);
    await addHotspots(photo, node.hotspots || []);
    delete photo._expanded;
    return photo;
  }
  if(album.rootImagePath){
    const root=await createPhoto(album.rootImagePath, album.name || 'Album', '');
    if(root){ addNotes(root, album.rootNotes || []); await addHotspots(root, album.rootHotspots || []); }
  }
  // Fallback: importa eventuali immagini presenti nella mappa ma non raggiunte dalla struttura.
  for(const originalPath of Object.keys(photoMap)){
    if(!used.has(originalPath)) await createPhoto(originalPath, fileTitle(originalPath), '');
  }
  photos.forEach(p=>{ delete p.originalPath; delete p._expanded; p.spots=normalizeSpots(p.spots); });
  return {albumName:album.name || 'FotoPin', photos, meta:{id:album.id||null,createdAt:album.createdAt||null,signature,isReadOnly:!!album.isReadOnly,latitude:album.latitude??null,longitude:album.longitude??null,address:album.address||''}};
}
function num(v){ const n=Number(v); return Number.isFinite(n)?+n.toFixed(2):50; }
function fileTitle(path){ return String(path||'').split(/[\\/]/).pop().replace(/\.[^.]+$/,''); }

async function decryptFotoPinEnc(encrypted){
  const key=await getFotoPinCryptoKey();
  const plain=await crypto.subtle.decrypt({name:'AES-CBC',iv:fotoPinIv()}, key, encrypted);
  return new Uint8Array(plain);
}

async function inflateRaw(data){
  if(typeof DecompressionStream==='undefined') throw new Error('ZIP deflate not supported by this browser');
  const ds=new DecompressionStream('deflate-raw');
  const out=new Response(new Blob([data]).stream().pipeThrough(ds));
  return new Uint8Array(await out.arrayBuffer());
}
async function readZipAsync(data){
  const entries={};
  const u16=(o)=>data[o] | (data[o+1]<<8);
  const u32=(o)=>(data[o] | (data[o+1]<<8) | (data[o+2]<<16) | (data[o+3]<<24)) >>> 0;
  let eocd=-1;
  for(let i=data.length-22;i>=0 && i>data.length-66000;i--){
    if(u32(i)===0x06054b50){ eocd=i; break; }
  }
  if(eocd<0) throw new Error('ZIP central directory not found');
  const total=u16(eocd+10);
  const cdOffset=u32(eocd+16);
  let p=cdOffset;
  for(let n=0;n<total;n++){
    if(u32(p)!==0x02014b50) throw new Error('Invalid ZIP central directory');
    const method=u16(p+10);
    const compSize=u32(p+20);
    const nameLen=u16(p+28);
    const extraLen=u16(p+30);
    const commentLen=u16(p+32);
    const localOffset=u32(p+42);
    const name=u8ToStr(data.slice(p+46,p+46+nameLen));
    if(name.includes('..')||name.startsWith('/')||name.startsWith('\\')) throw new Error('Unsafe ZIP entry');
    if(!name.endsWith('/')){
      if(u32(localOffset)!==0x04034b50) throw new Error('Invalid ZIP local header');
      const localNameLen=u16(localOffset+26);
      const localExtraLen=u16(localOffset+28);
      const start=localOffset+30+localNameLen+localExtraLen;
      const comp=data.slice(start,start+compSize);
      entries[name]= method===0 ? comp : (method===8 ? await inflateRaw(comp) : (()=>{throw new Error('Unsupported ZIP compression')})());
    }
    p += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}
function bytesToB64(bytes){
  let s=''; const chunk=0x8000;
  for(let i=0;i<bytes.length;i+=chunk) s+=String.fromCharCode(...bytes.slice(i,i+chunk));
  return btoa(s);
}
async function deriveWebViewerKey(password, salt, iterations){
  const material=await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations,hash:'SHA-256'}, material, {name:'AES-GCM',length:256}, false, ['encrypt','decrypt']);
}
async function compressProtectedViewerPhoto(photo, qualityPercent, maxSideLimit){
  return new Promise(resolve=>{
    const inputBlob=new Blob([photo.buffer], {type:photo.type || 'image/jpeg'});
    const url=URL.createObjectURL(inputBlob);
    const img=new Image();
    img.onload=()=>{
      try{
        const maxSide=maxSideLimit || 1600;
        const scale=Math.min(1, maxSide / Math.max(img.naturalWidth || 1, img.naturalHeight || 1));
        const w=Math.max(1, Math.round((img.naturalWidth || 1) * scale));
        const h=Math.max(1, Math.round((img.naturalHeight || 1) * scale));
        const canvas=document.createElement('canvas');
        canvas.width=w; canvas.height=h;
        canvas.getContext('2d').drawImage(img,0,0,w,h);
        canvas.toBlob(async blob=>{
          URL.revokeObjectURL(url);
          if(!blob){ resolve({buffer:photo.buffer, type:photo.type || 'image/jpeg', name:photo.name || 'photo.jpg'}); return; }
          const base=(photo.name || photo.title || 'photo').replace(/\.[^.]+$/,'');
          resolve({buffer:await blob.arrayBuffer(), type:'image/jpeg', name:safeName(base)+'.jpg'});
        }, 'image/jpeg', Math.max(0.10, Math.min(0.75, (qualityPercent || 50) / 100)));
      }catch(err){
        URL.revokeObjectURL(url);
        resolve({buffer:photo.buffer, type:photo.type || 'image/jpeg', name:photo.name || 'photo.jpg'});
      }
    };
    img.onerror=()=>{
      URL.revokeObjectURL(url);
      resolve({buffer:photo.buffer, type:photo.type || 'image/jpeg', name:photo.name || 'photo.jpg'});
    };
    img.src=url;
  });
}


function askProtectedExportTarget(){
  return new Promise(resolve=>{
    const old=document.getElementById('targetExportOverlay'); if(old) old.remove();
    const overlay=document.createElement('div'); overlay.id='targetExportOverlay'; overlay.className='guide-overlay';
    const box=document.createElement('div'); box.className='guide-box quality-export-box';
    const header=document.createElement('div'); header.className='guide-header';
    const title=document.createElement('h2'); title.textContent=t('exportTargetTitle');
    const close=document.createElement('button'); close.textContent='×'; close.type='button';
    close.addEventListener('click',()=>{ overlay.remove(); resolve(null); });
    header.append(title, close);
    const body=document.createElement('div'); body.className='guide-body';
    const help=document.createElement('p'); help.textContent=t('exportTargetHelp');
    const actions=document.createElement('div'); actions.className='point-choice-actions';
    const android=document.createElement('button'); android.type='button'; android.className='primary'; android.textContent=t('exportTargetAndroid');
    const ios=document.createElement('button'); ios.type='button'; ios.textContent=t('exportTargetIos');
    const cancel=document.createElement('button'); cancel.type='button'; cancel.textContent=t('cancel');
    android.addEventListener('click',()=>{ overlay.remove(); resolve('android'); });
    ios.addEventListener('click',()=>{ overlay.remove(); resolve('ios'); });
    cancel.addEventListener('click',()=>{ overlay.remove(); resolve(null); });
    actions.append(android, ios, cancel);
    body.append(help, actions);
    box.append(header, body); overlay.appendChild(box); document.body.appendChild(overlay);
    overlay.addEventListener('click', ev=>{ if(ev.target===overlay){ overlay.remove(); resolve(null); } });
  });
}

function askProtectedExportQuality(defaultValue=50, helpExtra=''){
  return new Promise(resolve=>{
    const old=document.getElementById('qualityExportOverlay'); if(old) old.remove();
    const overlay=document.createElement('div'); overlay.id='qualityExportOverlay'; overlay.className='guide-overlay';
    const box=document.createElement('div'); box.className='guide-box quality-export-box';
    const header=document.createElement('div'); header.className='guide-header';
    const title=document.createElement('h2'); title.textContent=t('webQualityTitle');
    const close=document.createElement('button'); close.textContent='×'; close.type='button';
    close.addEventListener('click',()=>{ overlay.remove(); resolve(null); });
    header.append(title, close);
    const body=document.createElement('div'); body.className='guide-body';
    const help=document.createElement('p'); help.textContent=t('webQualityHelp') + (helpExtra ? ' ' + helpExtra : '');
    const value=document.createElement('div'); value.className='quality-export-value';
    const range=document.createElement('input'); range.type='range'; range.min='10'; range.max='75'; range.step='5'; range.value=String(defaultValue || 50);
    const watermarkWrap=document.createElement('label');
    watermarkWrap.style.cssText='display:flex;align-items:flex-start;gap:8px;margin-top:12px;cursor:pointer';
    const watermarkCheck=document.createElement('input'); watermarkCheck.type='checkbox'; watermarkCheck.checked=localStorage.getItem('photopin_export_watermark')==='1';
    const watermarkText=document.createElement('span'); watermarkText.textContent=t('watermarkOption');
    watermarkWrap.append(watermarkCheck, watermarkText);
    const update=()=>{ value.textContent=`${t('webQualityValue')}: ${range.value}%`; };
    range.addEventListener('input', update); update();
    body.append(help, value, range, watermarkWrap);
    const footer=document.createElement('div'); footer.className='guide-footer';
    const cancel=document.createElement('button'); cancel.textContent=t('cancel'); cancel.type='button';
    const ok=document.createElement('button'); ok.textContent=t('continueExport'); ok.type='button'; ok.className='primary';
    cancel.addEventListener('click',()=>{ overlay.remove(); resolve(null); });
    ok.addEventListener('click',()=>{
      const q=Number(range.value);
      const watermark=!!watermarkCheck.checked;
      localStorage.setItem('photopin_export_watermark', watermark ? '1' : '0');
      overlay.remove();
      resolve({quality:Number.isFinite(q)?q:50, watermark});
    });
    footer.append(cancel, ok);
    box.append(header, body, footer); overlay.appendChild(box); document.body.appendChild(overlay);
  });
}


// ══════════════════════════════════════════════════════════════════════
// CSS VIEWER (comune a embed pubblico e protetto)
// ══════════════════════════════════════════════════════════════════════
function makeEmbedCss(){
  return `*{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden;background:#000;color:#fff;font-family:system-ui,Segoe UI,Arial,sans-serif}button,input{font:inherit}
#unlock{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#0b1220}
#unlockBox{width:min(380px,calc(100% - 32px));background:#111827;border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:20px;box-shadow:0 16px 48px rgba(0,0,0,.45)}
#unlockBox h1{margin:0 0 8px;font-size:22px}#unlockBox p{margin:0 0 12px;color:#cbd5e1;font-size:14px}
#password{width:100%;border:1px solid rgba(255,255,255,.18);background:#020617;color:#fff;border-radius:10px;padding:10px;margin-bottom:10px}
#unlockBtn{width:100%;background:#2563eb;border-color:#2563eb;color:#fff;border-radius:10px;padding:9px;cursor:pointer}
#unlockError{min-height:18px;margin-top:8px;color:#fca5a5;font-size:13px}
#loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#0b1220;z-index:20}
#loadingBox{width:min(380px,calc(100% - 32px));background:#111827;border:1px solid rgba(255,255,255,.15);border-radius:18px;padding:20px}
#loadingBox h1{margin:0 0 8px;font-size:22px}#loadingBox p{margin:0 0 12px;color:#cbd5e1;font-size:14px}
#loadingTrack{height:12px;background:#020617;border:1px solid rgba(255,255,255,.18);border-radius:999px;overflow:hidden}
#loadingBar{height:100%;width:0%;background:#60a5fa;border-radius:999px;transition:width .15s linear}
#loadingPct{text-align:right;margin-top:6px;color:#cbd5e1;font-size:13px}
.hidden{display:none!important}
body{display:flex;flex-direction:column}
#bar{height:52px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;background:rgba(0,0,0,.80);padding:6px 10px;flex-shrink:0}
button{border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.12);color:#fff;border-radius:9px;padding:6px 10px;cursor:pointer;font-size:13px;line-height:1.2}
#play{grid-column:2;background:#2563eb;border-color:#2563eb}
#right{grid-column:3;justify-self:end;display:flex;gap:6px}
#stage{position:relative;flex:1;display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:0}
#stageFade{position:absolute;inset:0;background:#000;opacity:0;pointer-events:none;z-index:10}
#img{max-width:100%;max-height:100%;display:block;object-fit:contain}
#pins{position:absolute;inset:0;pointer-events:none}
.pin{position:absolute;transform:translate(-50%,-50%);width:24px;height:24px;border-radius:999px;background:#f59e0b;color:#fff;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;box-shadow:0 3px 10px rgba(0,0,0,.35);pointer-events:auto;cursor:pointer}
.pin.photo{background:#2563eb}
.free-text{position:absolute;transform:translate(-50%,-50%);max-width:80vw;white-space:nowrap;pointer-events:auto;padding:.16em .38em;border-radius:.4em;background:rgba(0,0,0,.22);font-weight:800;text-shadow:0 2px 5px rgba(0,0,0,.75);box-shadow:0 4px 16px rgba(0,0,0,.22)}
.tip{position:absolute;transform:translate(-50%,12px);max-width:240px;background:rgba(15,23,42,.94);border-radius:12px;padding:8px 10px;font-size:13px;white-space:pre-wrap;z-index:5}
#desc{position:absolute;left:50%;bottom:56px;transform:translateX(-50%);background:rgba(0,0,0,.6);border-radius:12px;padding:8px 12px;max-width:80%;max-height:25%;overflow:auto;white-space:pre-wrap;display:none;font-size:14px}
#desc.visible{display:block}
#stage.note-mode #img{filter:brightness(.42);transform:scale(1.03)}
#stage.note-mode #pins .pin,#stage.note-mode #pins .tip,#stage.playing #pins .pin,#stage.playing #pins .tip{display:none}
#desc.zoom-note{display:block;top:50%;bottom:auto;left:50%;transform:translate(-50%,-50%);width:min(80%,600px);max-height:70%;overflow:auto;background:rgba(15,23,42,.92);border:1px solid rgba(255,255,255,.2);border-radius:18px;padding:20px 24px;font-size:clamp(16px,3vw,32px);line-height:1.3;text-align:center}
#cap{display:none}
#viewerMap{position:absolute;left:14px;bottom:14px;width:160px;height:280px;border-radius:14px;cursor:pointer;opacity:.92;transition:opacity .2s;z-index:4}
#viewerMap:hover{opacity:1}
#viewerMapBtn{position:absolute;left:14px;bottom:14px;width:40px;height:40px;border-radius:999px;background:rgba(30,41,59,.82);border:1px solid rgba(255,255,255,.22);color:#f59e0b;font-size:18px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.45);z-index:4}
#viewerMapBtn:hover{background:rgba(30,41,59,.98)}
#viewerWatermark{position:absolute;right:12px;bottom:12px;z-index:4;pointer-events:none;padding:4px 8px;border-radius:999px;background:rgba(0,0,0,.36);color:rgba(255,255,255,.95);font-size:clamp(11px,1.2vw,15px);font-weight:700;line-height:1.15;letter-spacing:.02em;text-shadow:0 1px 3px rgba(0,0,0,.7);box-shadow:0 3px 10px rgba(0,0,0,.2)}
.hidden{display:none!important}`;
}

// ── HTML wrapper comune ────────────────────────────────────────────────
function makeEmbedHtml(inlineJs, options={}){
  const css = makeEmbedCss().replace(/<\/style/gi,'<\\/style');
  const safeJs = inlineJs.replace(/<\/script/gi,'<\\/script');
  const watermarkHtml = options && options.watermark ? '<div id="viewerWatermark" aria-hidden="true">Fotopin by Sp.</div>' : '';
  const unlockClass = options && options.publicViewer ? ' class="hidden"' : '';
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>FotoPin</title><style>${css}</style></head><body><div id="unlock"${unlockClass}><div id="unlockBox"><h1>FotoPin</h1><p id="unlockText"></p><input id="password" type="password" autocomplete="current-password"><button id="unlockBtn"></button><div id="unlockError"></div></div></div><div id="loading" class="hidden"><div id="loadingBox"><h1>FotoPin</h1><p id="loadingText"></p><div id="loadingTrack"><div id="loadingBar"></div></div><div id="loadingPct">0%</div></div></div><div id="bar" class="hidden"><button id="play"></button><div id="right"><button id="cinematicBtn"></button><button id="music"></button><button id="changeMusic" class="hidden"></button><button id="home"></button></div></div><main id="stage" class="hidden"><img id="img"><div id="pins"></div><div id="desc"></div><div id="cap"></div><canvas id="viewerMap" class="hidden"></canvas><button id="viewerMapBtn" title="Mappa">🗺</button>${watermarkHtml}<div id="stageFade"></div></main><audio id="audio"></audio><script>${safeJs}</script></body></html>`;
}

// ── README comune ──────────────────────────────────────────────────────
function makeEmbedReadme(albumName, isProtected){
  const pwLine = isProtected
    ? '- La password è quella scelta durante l\'esportazione.\n- Senza password il viewer mostra la schermata di sblocco.\n'
    : '- Nessuna password richiesta: il viewer si apre direttamente.\n';
  return `FotoPin - Viewer embed${isProtected ? ' protetto' : ' pubblico'}
${'='.repeat(40)}
Album: ${albumName}

INCORPORA IN UN SITO WEB (iframe):
  <iframe src="index.html"
          width="800" height="500"
          style="border:none; border-radius:12px;"
          allowfullscreen>
  </iframe>

APRI COME PAGINA STANDALONE:
  Apri index.html direttamente nel browser.
  Il viewer occuperà tutto lo schermo automaticamente.

${pwLine}
- Funziona da file locale (file://) e da server web.
- Personalizza width e height dell'iframe come preferisci.
`;
}

function makeViewerJs(){
  const musicUrls = JSON.stringify(DEFAULT_WEB_MUSIC_URLS);
  return `(async()=>{const manifest=await fetch('album.json').then(r=>r.json());const WEB_MUSIC_URLS=${musicUrls};const lazyMode=!!manifest.protectedViewerLazyDecrypt;const lang=manifest.language||'it';const trs={it:{p:'Presentazione',pp:'Pausa Presentazione',m:'Musica',pm:'Pausa Musica',cm:'Cambia musica',h:'Home',fp:'Foto collegata',unlock:'Inserisci la password per aprire il viewer protetto.',open:'Apri',wrong:'Password non valida o file non leggibile.',loading:'Caricamento album...',checking:'Verifica password...',decrypting:'Decrittazione foto',cn:'▶️ Normale',cc:'🎬 Cinema'},en:{p:'Presentation',pp:'Pause Presentation',m:'Music',pm:'Pause Music',cm:'Change music',h:'Home',fp:'Linked photo',unlock:'Enter the password to open the protected viewer.',open:'Open',wrong:'Wrong password or unreadable file.',loading:'Loading album...',checking:'Checking password...',decrypting:'Decrypting photo',cn:'▶️ Normal',cc:'🎬 Cinema'},fr:{p:'Présentation',pp:'Pause présentation',m:'Musique',pm:'Pause musique',cm:'Changer musique',h:'Accueil',fp:'Photo liée',unlock:'Entrez le mot de passe pour ouvrir le viewer protégé.',open:'Ouvrir',wrong:'Mot de passe invalide ou fichier illisible.',loading:'Chargement album...',checking:'Vérification mot de passe...',decrypting:'Déchiffrement photo',cn:'▶️ Normal',cc:'🎬 Cinéma'},de:{p:'Präsentation',pp:'Präsentation pausieren',m:'Musik',pm:'Musik pausieren',cm:'Musik wechseln',h:'Start',fp:'Verknüpftes Foto',unlock:'Passwort eingeben, um den geschützten Viewer zu öffnen.',open:'Öffnen',wrong:'Ungültiges Passwort oder Datei nicht lesbar.',loading:'Album wird geladen...',checking:'Passwort wird geprüft...',decrypting:'Foto wird entschlüsselt',cn:'▶️ Normal',cc:'🎬 Kino'}};const tr=trs[lang]||trs.en;let i=0,run=false,mp=false,mi=0,timer=null,fadeTimer=null,key=null,path=[],pathPos=0,noteMode=false,crawlSpotId=null,continuousInfo=null,cinematic=false;const NOTE_SLIDE_SECONDS=5,FINAL_FADE_MS=900,FINAL_BLACK_HOLD_MS=2000;const cache=new Map();const $=id=>document.getElementById(id),audio=$('audio');$('unlockText').textContent=tr.unlock;$('unlockBtn').textContent=tr.open;function b64ToU8(b64){const s=atob(b64);const out=new Uint8Array(s.length);for(let i=0;i<s.length;i++)out[i]=s.charCodeAt(i);return out}function sleep(ms){return new Promise(r=>setTimeout(r,ms))}function setLoading(text,pct){const l=$('loading'),bar=$('loadingBar'),label=$('loadingText'),pc=$('loadingPct');if(l)l.classList.remove('hidden');if(label)label.textContent=text;if(bar)bar.style.width=Math.max(0,Math.min(100,pct||0))+'%';if(pc)pc.textContent=Math.round(Math.max(0,Math.min(100,pct||0)))+'%'}async function preDecryptAll(){const total=(manifest.photos||[]).length||1;for(let n=0;n<manifest.photos.length;n++){setLoading(tr.decrypting+' '+(n+1)+'/'+total,10+Math.round(((n+1)/total)*85));await decryptPhoto(manifest.photos[n]);await sleep(20)}}async function deriveKey(password){const c=manifest.crypto||{};const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt:b64ToU8(c.salt),iterations:c.iterations||180000,hash:c.hash||'SHA-256'},material,{name:'AES-GCM',length:256},false,['decrypt'])}async function decryptPhoto(p){if(cache.has(p.id))return cache.get(p.id);const buf=await fetch(p.path).then(r=>r.arrayBuffer());const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64ToU8(p.iv)},key,buf);const url=URL.createObjectURL(new Blob([plain],{type:p.type||'image/jpeg'}));cache.set(p.id,url);if(lazyMode){while(cache.size>2){const first=cache.entries().next().value;if(!first)break;try{URL.revokeObjectURL(first[1])}catch(e){}cache.delete(first[0]);}}return url}function photo(){return manifest.photos[i]}function music(){return WEB_MUSIC_URLS.length?WEB_MUSIC_URLS[mi%WEB_MUSIC_URLS.length]:''}function findPhoto(id){return (manifest.photos||[]).findIndex(p=>p.id===id)}function childIndexes(idx){const p=manifest.photos[idx];if(!p)return[];const seen=new Set(),res=[];(p.spots||[]).forEach(s=>{if(!s||s.type!=='photo'||!s.targetPhotoId)return;const ci=findPhoto(s.targetPhotoId);if(ci>=0&&!seen.has(s.targetPhotoId)){seen.add(s.targetPhotoId);res.push(ci);}});return res;}function buildCinematicPath(start){const n=manifest.photos.length;const max=2;const counts={};const result=[];function canAdd(idx){const p=manifest.photos[idx];if(!p)return false;return(counts[p.id]||0)<max;}function doAdd(idx){const p=manifest.photos[idx];counts[p.id]=(counts[p.id]||0)+1;result.push(idx);}function walk(idx){if(!canAdd(idx))return;doAdd(idx);const children=childIndexes(idx).filter(canAdd);children.forEach((ci,pos)=>{walk(ci);const remaining=children.slice(pos+1).filter(canAdd);if(remaining.length>0){let cur=result.length-1;while(cur>0&&result[cur]!==idx){result.push(result[cur-1]);cur--;}result.push(idx);}});}walk(start);if(!result.length)result.push(start);return result;}function rebuildPath(){if(cinematic){const start=manifest.presentationPathIds&&manifest.presentationPathIds.length?findPhoto(manifest.presentationPathIds[0]):0;path=buildCinematicPath(start<0?0:start);}else{const ids=Array.isArray(manifest.presentationPathIds)?manifest.presentationPathIds:[];path=ids.map(id=>findPhoto(id)).filter(idx=>idx>=0);if(!path.length)path=(manifest.photos||[]).map((_,idx)=>idx);}pathPos=0;i=path[0]??0;}function updateCinematicBtn(){const btn=$('cinematicBtn');if(btn){btn.textContent=cinematic?tr.cc:tr.cn;}}function toggleCinematic(){cinematic=!cinematic;rebuildPath();const pos=path.indexOf(i);if(pos>=0)pathPos=pos;updateCinematicBtn();}function posPins(){const pins=$('pins'),img=$('img');if(!img.src)return;const pr=pins.getBoundingClientRect(),ir=img.getBoundingClientRect();[...pins.children].forEach(el=>{const x=Number(el.dataset.x),y=Number(el.dataset.y);if(!Number.isFinite(x)||!Number.isFinite(y))return;el.style.left=(ir.left-pr.left+ir.width*x/100)+'px';el.style.top=(ir.top-pr.top+ir.height*y/100)+'px';})}function isCrawl(s){return !!(s&&(s.type==='crawl'||s.type==='titolator'||s.type==='titolatore'||s.boxWidthPct!==undefined||s.crawlBoxWidthPct!==undefined||s.boxHeightPct!==undefined||s.crawlBoxHeightPct!==undefined||s.scrollSpeed!==undefined||s.crawlSpeed!==undefined||s.crawlMode!==undefined||s.orientation!==undefined))}function cw(s){const n=Number(s&&(s.boxWidthPct??s.crawlBoxWidthPct??s.widthPct));return Number.isFinite(n)?Math.max(20,Math.min(100,Math.round(n))):62}function ch(s){const n=Number(s&&(s.boxHeightPct??s.crawlBoxHeightPct??s.heightPct));return Number.isFinite(n)?Math.max(8,Math.min(100,Math.round(n))):46}function csd(s){const n=Number(s&&(s.scrollSpeed??s.crawlSpeed??s.speed));return Number.isFinite(n)?Math.max(0.25,Math.min(3,Math.round(n*100)/100)):1}function cm(s){const v=String((s&&(s.crawlMode??s.orientation??s.mode))||'vertical').toLowerCase();return(v==='horizontal'||v==='orizzontale'||v==='ticker'||v==='h')?'horizontal':'vertical'}function cdir(s){const v=String((s&&(s.crawlDirection??s.tickerDirection??s.direction))||'rtl').toLowerCase();return(v==='ltr'||v==='left-right'||v==='left_to_right')?'ltr':'rtl'}function ccont(s){return !!(s&&(s.crawlContinuous??s.continuous??s.continuousCrawl??s.continuo))}function ctext(s){return String((s&&s.text)||'').replace(/\\r/g,'').trim()}function cstop(s){const t=ctext(s);return !!(s&&ccont(s)&&(/^stop$/i.test(t)||!t))}function crawlSpots(p){return ((p&&p.spots)||[]).filter(s=>isCrawl(s)&&!ccont(s))}function contSpots(p){return ((p&&p.spots)||[]).filter(s=>isCrawl(s)&&ccont(s))}function crawlDur(s,h=720,w=null){const txt=String((s&&s.text)||'').replace(/\\r/g,'').trim();const fs=Math.max(12,Math.min(96,Number(s&&(s.fontSize||s.size||s.textSize||s.freeTextSize||28))||28));const vw=Number(w)||Math.round(h*16/9);if(cm(s)==='horizontal'){const single=txt.replace(/\\s*\\n\\s*/g,'   '),bw=Math.max(160,Math.round(vw*cw(s)/100)),tw=Math.max(fs*4,single.length*fs*.62+28),travel=Math.max(260,bw+tw+70),pxs=Math.max(35,Math.round(bw*.18*csd(s)));return Math.max(4500,Math.min(60000,Math.round((travel/pxs)*1000)))}const lines=Math.max(1,txt?txt.split('\\n').length:1);const lh=Math.round(fs*1.28),th=lines*lh+24,bh=Math.max(120,Math.round(h*ch(s)/100)),travel=Math.max(220,bh+th+70),pxs=Math.max(30,Math.round(bh*0.18*csd(s)));return Math.max(5000,Math.min(45000,Math.round((travel/pxs)*1000)))}function currentCrawl(p){return crawlSpotId?crawlSpots(p).find(s=>s.id===crawlSpotId):null}function renderCrawl(p,opt){opt=opt||{};const spot=opt.spot||currentCrawl(p);if(!spot)return;const pins=$('pins'),img=$('img');const pr=pins.getBoundingClientRect(),ir=img.getBoundingClientRect();if(!ir.width||!ir.height)return;const mode=cm(spot),dir=cdir(spot),bw=(Number.isFinite(opt.fixedBoxWidthPx)&&opt.fixedBoxWidthPx>0)?opt.fixedBoxWidthPx:Math.max(160,Math.min(ir.width,ir.width*cw(spot)/100)),bh=(Number.isFinite(opt.fixedBoxHeightPx)&&opt.fixedBoxHeightPx>0)?opt.fixedBoxHeightPx:Math.max(36,Math.min(ir.height,ir.height*ch(spot)/100)),cx=Number.isFinite(opt.fixedCenterXPx)?opt.fixedCenterXPx:(ir.left-pr.left+ir.width*(Number(spot.x)||50)/100),cy=Number.isFinite(opt.fixedCenterYPx)?opt.fixedCenterYPx:(ir.top-pr.top+ir.height*(Number(spot.y)||50)/100);const host=document.createElement('div');host.style.cssText='position:absolute;overflow:hidden;pointer-events:none;z-index:7;transform:translate(-50%,-50%);border-radius:18px;background:transparent;box-sizing:border-box';host.style.left=cx+'px';host.style.top=cy+'px';host.style.width=bw+'px';host.style.height=bh+'px';const inner=document.createElement('div');const fs=Math.max(16,Math.round((Number(spot.fontSize||spot.size||spot.textSize||spot.freeTextSize||28)||28)*Math.max(1,ir.width/900)));inner.textContent=mode==='horizontal'?String(spot.text||'').replace(/\\s*\\n\\s*/g,'   '):(spot.text||'');inner.style.cssText='position:absolute;color:#fff;font-weight:800;line-height:1.28;padding:8px 14px;border-radius:14px;background:transparent;text-shadow:0 1px 4px rgba(0,0,0,.7),0 0 8px rgba(0,0,0,.4);box-sizing:border-box';inner.style.color=/^#[0-9a-f]{6}$/i.test((spot.color||spot.textColor||spot.freeTextColor||spot.fontColor||''))?(spot.color||spot.textColor||spot.freeTextColor||spot.fontColor):'#fff';inner.style.fontSize=fs+'px';host.appendChild(inner);pins.append(host);const dur=Math.max(50,opt.duration||crawlDur(spot,ir.height,bw)),prog=Math.max(0,Math.min(1,opt.progress||0));if(mode==='horizontal'){inner.style.top='50%';inner.style.left='0';inner.style.whiteSpace='nowrap';inner.style.width='max-content';inner.style.maxWidth='none';const tw=Math.max(inner.offsetWidth||0,inner.scrollWidth||0,bw*.3),start=dir==='ltr'?-(tw+24):bw+18,end=dir==='ltr'?bw+18:-(tw+24),cur=start+(end-start)*prog;inner.style.transform='translate('+cur+'px,-50%)';if(prog<1)requestAnimationFrame(()=>{inner.style.transition='transform '+Math.max(0,dur*(1-prog))+'ms linear';inner.style.transform='translate('+end+'px,-50%)'});return}const start=bh+18,end=-(inner.offsetHeight+24),cur=start+(end-start)*prog;inner.style.left='50%';inner.style.top='0';inner.style.width='100%';inner.style.maxWidth='100%';inner.style.whiteSpace='pre-wrap';inner.style.textAlign='center';inner.style.transform='translate(-50%,'+cur+'px)';if(prog<1)requestAnimationFrame(()=>{inner.style.transition='transform '+Math.max(0,dur*(1-prog))+'ms linear';inner.style.transform='translate(-50%,'+end+'px)'})}function nextContPos(start){for(let pos=Math.max(0,start+1);pos<path.length;pos++){const p=manifest.photos[path[pos]];if(contSpots(p).length)return pos}return-1}function rangeDur(start,end){let total=0;for(let pos=start;pos<(end==null?path.length:end);pos++){const p=manifest.photos[path[pos]];if(!p)continue;total+=Math.round(((manifest.settings&&manifest.settings.slideSeconds)||3.75)*1000);if(hasNotes(p))total+=NOTE_SLIDE_SECONDS*1000;crawlSpots(p).filter(s=>!ccont(s)).forEach(c=>{total+=crawlDur(c)})}return total}function activateCont(p){const spots=contSpots(p);if(!spots.length)return;if(spots.some(cstop)){continuousInfo=null;return}const spot=spots.find(s=>!cstop(s));if(!spot)return;if(continuousInfo&&continuousInfo.spot&&continuousInfo.spot.id===spot.id)return;const img=$('img'),pins=$('pins');let fixed=null;if(img&&pins&&img.clientWidth&&img.clientHeight){const pr=pins.getBoundingClientRect(),ir=img.getBoundingClientRect();fixed={boxW:Math.max(160,Math.min(ir.width,ir.width*cw(spot)/100)),boxH:Math.max(36,Math.min(ir.height,ir.height*ch(spot)/100)),centerX:ir.left-pr.left+ir.width*(Number(spot.x)||50)/100,centerY:ir.top-pr.top+ir.height*(Number(spot.y)||50)/100};}continuousInfo={spot:spot,startedAt:performance.now(),fixedGeom:fixed,totalMs:Math.max(800,crawlDur(spot,$('img').clientHeight||720,fixed&&fixed.boxW?fixed.boxW:null))}}function contData(){if(!continuousInfo||!continuousInfo.spot)return null;const total=Math.max(800,crawlDur(continuousInfo.spot,$('img').clientHeight||720,continuousInfo.fixedGeom&&continuousInfo.fixedGeom.boxW?continuousInfo.fixedGeom.boxW:null)),elapsed=Math.max(0,performance.now()-(Number(continuousInfo.startedAt)||0));return{spot:continuousInfo.spot,progress:(elapsed%total)/total,duration:total,fixedGeom:continuousInfo.fixedGeom}}function label(s){const idx=s.targetPhotoId?findPhoto(s.targetPhotoId):-1;const target=idx>=0?manifest.photos[idx]:null;const kindMap={it:{photo:'Foto',text:'Testo libero',crawl:'Titolatore',note:'Nota'},en:{photo:'Photo',text:'Free text',crawl:'Scrolling title',note:'Note'},fr:{photo:'Photo',text:'Texte libre',crawl:'Titre défilant',note:'Note'},de:{photo:'Foto',text:'Freier Text',crawl:'Laufschrift',note:'Notiz'}}[lang]||{photo:'Photo',text:'Free text',crawl:'Scrolling title',note:'Note'};const kind=s.type==='photo'?kindMap.photo:(s.type==='text'?kindMap.text:(isCrawl(s)?kindMap.crawl:kindMap.note));return [kind,s.text||'',target?tr.fp+': '+(target.title||target.name):''].filter(Boolean).join('\\n')}function updateButtons(){$('play').textContent=run?tr.pp:tr.p;$('music').textContent=mp?tr.pm:tr.m;$('home').textContent=tr.h;$('changeMusic').textContent=tr.cm;$('changeMusic').classList.toggle('hidden',!mp||!music());updateCinematicBtn();}async function draw(){const p=photo();$('img').src=await decryptPhoto(p);activateCont(p);const curCrawl=currentCrawl(p);const curCont=!curCrawl?contData():null;const notes=(p.spots||[]).filter(s=>s&&s.type!=='text'&&!isCrawl(s)&&(s.type==='note'||(s.type!=='photo'&&String(s.text||'').trim()))).map(s=>String(s.text||'').trim()).filter(Boolean);const desc=(curCrawl||curCont)?'':((noteMode&&notes.length)?notes.join('\\n\\n'):(p.description||''));$('desc').textContent=desc;$('desc').classList.toggle('visible',!!desc);$('desc').classList.toggle('zoom-note',noteMode&&notes.length>0);$('stage').classList.toggle('note-mode',noteMode&&notes.length>0&&!curCrawl&&!curCont);$('pins').innerHTML='';(p.spots||[]).forEach((s,n)=>{if(isCrawl(s)){return}if(s&&s.type==='text'){const txt=document.createElement('div');txt.className='free-text';txt.textContent=s.text||'';txt.style.color=/^#[0-9a-f]{6}$/i.test((s.color||s.textColor||s.freeTextColor||s.fontColor||''))?(s.color||s.textColor||s.freeTextColor||s.fontColor):'#ffffff';txt.style.fontSize=Math.max(12,Math.min(96,Number(s.fontSize||s.size||s.textSize||s.freeTextSize||28)))+'px';txt.dataset.x=s.x;txt.dataset.y=s.y;$('pins').append(txt);return}const pin=document.createElement('div');pin.className='pin '+(s.type==='photo'?'photo':'note');pin.textContent=n+1;pin.dataset.x=s.x;pin.dataset.y=s.y;const tip=document.createElement('div');tip.className='tip hidden';tip.textContent=label(s);tip.dataset.x=s.x;tip.dataset.y=s.y;pin.onclick=async e=>{e.stopPropagation();if(s.type==='photo'&&s.targetPhotoId){const idx=findPhoto(s.targetPhotoId);if(idx>=0){i=idx;noteMode=false;const pp=path.indexOf(idx);if(pp>=0)pathPos=pp;await draw();schedule();return}}if(run){run=false;clearTimeout(timer);timer=null;clearTimeout(fadeTimer);fadeTimer=null;resetFade();$('stage').classList.remove('playing');updateButtons()}document.querySelectorAll('.tip').forEach(x=>x.classList.add('hidden'));tip.classList.toggle('hidden')};$('pins').append(pin,tip)});if(crawlSpotId)renderCrawl(p);else if(curCont)renderCrawl(p,{spot:curCont.spot,progress:curCont.progress,duration:curCont.duration,fixedBoxWidthPx:curCont.fixedGeom&&curCont.fixedGeom.boxW,fixedBoxHeightPx:curCont.fixedGeom&&curCont.fixedGeom.boxH,fixedCenterXPx:curCont.fixedGeom&&curCont.fixedGeom.centerX,fixedCenterYPx:curCont.fixedGeom&&curCont.fixedGeom.centerY});$('stage').classList.toggle('playing',run);updateButtons();resetFade();setTimeout(posPins,0);if(_vMapVisible)drawViewerMap(_vMapPS?((performance.now()-_vMapPS)%1150)/1150:0)}function hasNotes(p){return (p&&p.spots||[]).some(s=>s&&s.type!=='text'&&!isCrawl(s)&&(s.type==='note'||(s.type!=='photo'&&String(s.text||'').trim()))&&String(s.text||'').trim())}function isLastSeg(){if(!path.length)rebuildPath();if(pathPos!==path.length-1)return false;const p=photo();if(!p)return false;if(!noteMode&&hasNotes(p))return false;const cs=crawlSpots(p);if(cs.length){if(!crawlSpotId)return false;if(cs[cs.length-1].id!==crawlSpotId)return false}return true}function resetFade(){const fo=$('stageFade');if(!fo)return;fo.style.transition='none';fo.style.opacity='0';void fo.offsetWidth;fo.style.transition=''}function startFade(ms=FINAL_FADE_MS){const fo=$('stageFade');if(!fo)return;fo.style.transition='opacity '+Math.max(120,ms)+'ms linear';fo.style.opacity='1'}function finishAtBlack(){clearTimeout(timer);timer=null;clearTimeout(fadeTimer);fadeTimer=null;run=false;audio.pause();mp=false;continuousInfo=null;updateButtons()}function delayMs(){const p=photo();const c=currentCrawl(p);let ms=c?crawlDur(c,$('img').clientHeight||720,$('img').clientWidth||null):Math.round((noteMode?NOTE_SLIDE_SECONDS:((manifest.settings&&manifest.settings.slideSeconds)||3.75))*1000);if(isLastSeg())ms=(ms*2)+FINAL_BLACK_HOLD_MS;return ms}function schedule(){if(!run)return;clearTimeout(timer);clearTimeout(fadeTimer);fadeTimer=null;resetFade();const total=delayMs();if(isLastSeg()){const fd=Math.max(0,total-FINAL_BLACK_HOLD_MS-FINAL_FADE_MS);fadeTimer=setTimeout(()=>{if(run&&isLastSeg())startFade(FINAL_FADE_MS)},fd)}timer=setTimeout(next,total)}async function next(){if(!path.length)rebuildPath();const p=photo();const cs=crawlSpots(p);if(!noteMode&&hasNotes(p)){noteMode=true;crawlSpotId=null;await draw();schedule();return}if(cs.length){if(!crawlSpotId){crawlSpotId=cs[0].id;await draw();schedule();return}const ci=cs.findIndex(s=>s.id===crawlSpotId);if(ci>=0&&ci<cs.length-1){crawlSpotId=cs[ci+1].id;await draw();schedule();return}}if(run&&isLastSeg()){finishAtBlack();return}noteMode=false;crawlSpotId=null;pathPos=(pathPos+1)%path.length;i=path[pathPos];await draw();schedule()}async function prev(){if(!path.length)rebuildPath();const p=photo();const cs=crawlSpots(p);if(crawlSpotId){const ci=cs.findIndex(s=>s.id===crawlSpotId);if(ci>0){crawlSpotId=cs[ci-1].id;await draw();schedule();return}crawlSpotId=null;await draw();schedule();return}if(noteMode){noteMode=false;await draw();schedule();return}noteMode=false;continuousInfo=null;pathPos=(pathPos-1+path.length)%path.length;i=path[pathPos];const prevPhoto=photo();const prevCs=crawlSpots(prevPhoto);crawlSpotId=prevCs.length?prevCs[prevCs.length-1].id:null;if(crawlSpotId)noteMode=hasNotes(prevPhoto);await draw();schedule()}async function toggle(){if(run){run=false;clearTimeout(timer);timer=null;clearTimeout(fadeTimer);fadeTimer=null;resetFade();await draw();return}run=true;await draw();schedule()}function loadMusic(){const m=music();audio.src=m||'';audio.loop=false}async function tryPlayMusicFrom(start){if(!WEB_MUSIC_URLS.length)return false;for(let n=0;n<WEB_MUSIC_URLS.length;n++){mi=(start+n)%WEB_MUSIC_URLS.length;loadMusic();try{audio.load();await audio.play();mp=true;return true}catch(e){console.warn('Music failed:',audio.src,e)}}mp=false;return false}function installFirstMusicGesture(){if(!WEB_MUSIC_URLS.length)return;const startOnGesture=async()=>{document.removeEventListener('pointerdown',startOnGesture,true);document.removeEventListener('keydown',startOnGesture,true);if(!mp)await tryPlayMusicFrom(mi);updateButtons();};document.addEventListener('pointerdown',startOnGesture,true);document.addEventListener('keydown',startOnGesture,true)}async function toggleM(){if(!music())return;if(mp){audio.pause();mp=false;await draw();return}await tryPlayMusicFrom(mi);await draw()}async function changeM(){if(!WEB_MUSIC_URLS.length)return;const keepPlaying=mp;await tryPlayMusicFrom(mi+1);if(!keepPlaying){audio.pause();mp=false}await draw()}audio.onended=changeM;async function unlock(){try{$('unlockError').textContent='';$('unlock').classList.add('hidden');setLoading(tr.checking,5);key=await deriveKey($('password').value||'');if(lazyMode){setLoading(tr.decrypting+' 1/'+((manifest.photos||[]).length||1),55);await decryptPhoto(manifest.photos[0]);await sleep(20)}else{await preDecryptAll()}setLoading(tr.loading,100);await sleep(80);$('loading').classList.add('hidden');$('bar').classList.remove('hidden');$('stage').classList.remove('hidden');mi=Math.floor(Math.random()*Math.max(1,WEB_MUSIC_URLS.length));loadMusic();installFirstMusicGesture();rebuildPath();await draw();await tryPlayMusicFrom(mi);await toggle()}catch(e){console.error(e);$('loading').classList.add('hidden');$('unlock').classList.remove('hidden');$('unlockError').textContent=tr.wrong}}$('unlockBtn').onclick=unlock;$('password').addEventListener('keydown',e=>{if(e.key==='Enter')unlock()});$('img').onload=posPins;window.onresize=posPins;$('play').onclick=toggle;$('music').onclick=toggleM;$('changeMusic').onclick=changeM;const cBtn=$('cinematicBtn');if(cBtn){cBtn.textContent=tr.cn;cBtn.onclick=toggleCinematic;}$('home').onclick=async()=>{run=false;mp=false;clearTimeout(timer);clearTimeout(fadeTimer);fadeTimer=null;resetFade();audio.pause();audio.currentTime=0;if(!path.length)rebuildPath();pathPos=0;i=path[0]??0;noteMode=false;crawlSpotId=null;continuousInfo=null;await draw()};$('stage').onclick=()=>{if(!run)next()};$('stage').oncontextmenu=e=>{e.preventDefault();prev()};window.onkeydown=e=>{if($('unlock').classList.contains('hidden')){if(e.key===' '){e.preventDefault();toggle()}else if(e.key==='ArrowRight')next();else if(e.key==='ArrowLeft')prev();else if(e.key==='Escape'){$('home').click()}}};
/* Mappa percorso viewer */
let _vMapVisible=false,_vMapAF=null,_vMapPS=null;
function vBuildTree(photos){const allIds=new Set(photos.map(p=>p.id));const hasP=new Set();photos.forEach(p=>{(p.spots||[]).forEach(s=>{if(s&&s.type==='photo'&&s.targetPhotoId&&allIds.has(s.targetPhotoId))hasP.add(s.targetPhotoId)})});const roots=photos.filter(p=>!hasP.has(p.id));function bn(ph,vis){if(!ph||vis.has(ph.id))return null;vis.add(ph.id);const cwx=[];(ph.spots||[]).forEach(s=>{if(!s||s.type!=='photo'||!s.targetPhotoId)return;const c=photos.find(p=>p.id===s.targetPhotoId);const n=bn(c,vis);if(n)cwx.push({node:n,x:s.x||50})});cwx.sort((a,b)=>a.x-b.x);return{id:ph.id,children:cwx.map(c=>c.node)}}return{id:null,children:roots.map(p=>bn(p,new Set())).filter(Boolean)}}
function vLeafCount(n){if(!n.children||!n.children.length)return 1;return n.children.reduce((s,c)=>s+vLeafCount(c),0)}
function vDepth(n){if(!n.children||!n.children.length)return 0;return 1+Math.max(...n.children.map(vDepth))}
function vLayout(root,w,h){const res=[];const pH=Math.max(8,w*0.05),pV=Math.max(6,h*0.05);const uW=Math.max(w-pH*2,1),uH=Math.max(h-pV*2,1);const tL=Math.max(vLeafCount(root),1),mD=Math.max(vDepth(root),1);const MD=10;function pl(n,lv,lo,lc){const cx=pH+uW*(lo+lc/2)/tL;const cy=(h-pV)-uH*lv/mD;res.push({id:n.id,x:cx,y:cy,level:lv});let o=lo;(n.children||[]).forEach(c=>{const l=vLeafCount(c);pl(c,lv+1,o,l);o+=l})}pl(root,0,0,tL);const byLv={};res.forEach(n=>{if(n.id===null)return;if(!byLv[n.level])byLv[n.level]=[];byLv[n.level].push(n)});Object.values(byLv).forEach(ns=>{ns.sort((a,b)=>a.x-b.x);for(let j=1;j<ns.length;j++)if(ns[j].x-ns[j-1].x<MD)ns[j].x=ns[j-1].x+MD;const mx=w-pH;for(let j=ns.length-1;j>=0;j--){if(ns[j].x>mx)ns[j].x=mx;if(j>0&&ns[j].x-ns[j-1].x<MD)ns[j-1].x=ns[j].x-MD}for(let j=0;j<ns.length;j++)if(ns[j].x<pH)ns[j].x=pH});return res.filter(n=>n.id!==null)}
function vParentMap(node,map){(node.children||[]).forEach(c=>{map[c.id]=node.id;vParentMap(c,map)});return map}
function drawViewerMap(pulse){const cv=$('viewerMap');if(!cv||!cv.getContext)return;const W=cv.offsetWidth,H=cv.offsetHeight;if(W<10||H<10)return;const dpr=window.devicePixelRatio||1;if(cv.width!==Math.round(W*dpr)||cv.height!==Math.round(H*dpr)){cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr)}const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);const photos=manifest.photos;if(!photos.length)return;function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}rr(0,0,W,H,14);ctx.fillStyle='rgba(0,0,0,0.34)';ctx.fill();rr(.75,.75,W-1.5,H-1.5,14);ctx.strokeStyle='rgba(255,255,255,0.16)';ctx.lineWidth=1;ctx.stroke();const tree=vBuildTree(photos);const pos=vLayout(tree,W,H);const byId={};pos.forEach(n=>{byId[n.id]=n});const curId=photos[i]?photos[i].id:null;const visited=new Set();path.slice(0,pathPos+1).forEach(idx=>{if(photos[idx])visited.add(photos[idx].id)});const pm=vParentMap(tree,{});const active=new Set();let cur=curId;while(cur!==undefined&&cur!==null){active.add(cur);cur=pm[cur]}function dLines(node,par){if(par&&node.id!==null){const p=byId[node.id];if(p){const isA=active.has(node.id),isV=visited.has(node.id);const midY=(par.y+p.y)/2;ctx.beginPath();ctx.moveTo(par.x,par.y);ctx.bezierCurveTo(par.x,midY,p.x,midY,p.x,p.y);ctx.strokeStyle=isA?'rgba(255,255,255,0.82)':isV?'rgba(245,158,11,0.58)':'rgba(255,255,255,0.23)';ctx.lineWidth=isA?2.4:isV?1.9:1.2;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke()}}(node.children||[]).forEach(c=>dLines(c,node.id!==null?byId[node.id]:null))}dLines(tree,null);pos.forEach(n=>{const isC=n.id===curId,isV=visited.has(n.id),isR=!(n.id in pm);const r=isC?6.8:isR?5.6:4.3;if(isC){ctx.beginPath();ctx.arc(n.x,n.y,r+12*pulse,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,'+(1-pulse)*0.42+')';ctx.fill()}ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);ctx.fillStyle=isC?'#ffffff':(isR||isV)?'#fbbf24':'rgba(203,213,225,0.70)';ctx.fill();ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);ctx.strokeStyle='rgba(0,0,0,'+(isC?0.5:0.32)+')';ctx.lineWidth=isC?1.5:0.8;ctx.stroke()})}
function vMapLoop(ts){if(!_vMapVisible)return;if(!_vMapPS)_vMapPS=ts;drawViewerMap(((ts-_vMapPS)%1150)/1150);_vMapAF=requestAnimationFrame(vMapLoop)}
function setViewerMap(v){_vMapVisible=v;const cv=$('viewerMap'),btn=$('viewerMapBtn');if(!cv||!btn)return;if(v){cv.classList.remove('hidden');btn.classList.add('hidden');_vMapPS=null;_vMapAF=requestAnimationFrame(vMapLoop)}else{cv.classList.add('hidden');btn.classList.remove('hidden');if(_vMapAF){cancelAnimationFrame(_vMapAF);_vMapAF=null}}}
$('viewerMap').addEventListener('click',e=>{e.stopPropagation();setViewerMap(false)});
$('viewerMapBtn').addEventListener('click',e=>{e.stopPropagation();setViewerMap(true)});
})();`;
}

// ══════════════════════════════════════════════════════════════════════
// EXPORT WEB EMBED PUBBLICO (no password, foto in chiaro)
// ══════════════════════════════════════════════════════════════════════
async function exportEmbedPublicZip(){
  try{
  if(!state.photos.length) return alert(t('noViewerPhotos'));
  const exportOptions = await askProtectedExportQuality(60, '');
  if(exportOptions === null) return;
  const exportQuality = exportOptions.quality;
  const showWatermark = !!exportOptions.watermark;

  const manifest = buildManifest();
  const publicPhotos = [];
  const photoData = {};

  for(let i = 0; i < state.photos.length; i++){
    const compressed = await compressProtectedViewerPhoto(state.photos[i], exportQuality, 1600);
    const fname = `photos/${String(i+1).padStart(3,'0')}_${safeName(compressed.name||'photo.jpg')}`;
    publicPhotos.push(Object.assign({}, manifest.photos[i], {
      name: compressed.name, type: compressed.type, path: fname
    }));
    photoData[fname] = bytesToB64(new Uint8Array(compressed.buffer));
  }
  const publicManifest = Object.assign({}, manifest, { photos: publicPhotos });
  const manifestJson = JSON.stringify(publicManifest).replace(/</g,'\\u003c');
  const photoDataJson = JSON.stringify(photoData).replace(/</g,'\\u003c');

  // JS pubblico: nessuna crittografia, carica direttamente i dati base64
  const musicUrls = JSON.stringify(DEFAULT_WEB_MUSIC_URLS);
  let viewerJs = makeViewerJs()
    .replace("const manifest=await fetch('album.json').then(r=>r.json());",
      `const manifest=${manifestJson};const _photoData=${photoDataJson};`)
    // Sostituisce decryptPhoto: invece di decifrare, decodifica base64 direttamente
    .replace("async function decryptPhoto(p){if(cache.has(p.id))return cache.get(p.id);const buf=await fetch(p.path).then(r=>r.arrayBuffer());const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:b64ToU8(p.iv)},key,buf);const url=URL.createObjectURL(new Blob([plain],{type:p.type||'image/jpeg'}));cache.set(p.id,url);if(lazyMode){while(cache.size>2){const first=cache.entries().next().value;if(!first)break;try{URL.revokeObjectURL(first[1])}catch(e){}cache.delete(first[0]);}}return url}",
      "async function decryptPhoto(p){if(cache.has(p.id))return cache.get(p.id);const raw=_photoData[p.path];if(!raw)throw new Error('missing photo');const bin=atob(raw);const buf=new Uint8Array(bin.length);for(let _i=0;_i<bin.length;_i++)buf[_i]=bin.charCodeAt(_i);const url=URL.createObjectURL(new Blob([buf],{type:p.type||'image/jpeg'}));cache.set(p.id,url);return url}")
    // Sostituisce unlock: salta la decifratura e va dritto al player
    .replace("async function unlock(){try{$('unlockError').textContent='';$('unlock').classList.add('hidden');setLoading(tr.checking,5);key=await deriveKey($('password').value||'');",
      "async function unlock(){try{$('unlockError').textContent='';$('unlock').classList.add('hidden');$('loading').classList.add('hidden');")
    .replace("if(lazyMode){setLoading(tr.decrypting+' 1/'+((manifest.photos||[]).length||1),55);await decryptPhoto(manifest.photos[0]);await sleep(20)}else{await preDecryptAll()}",
      "await sleep(20);")
    .replace("setLoading(tr.loading,100);await sleep(80);$('loading').classList.add('hidden');",
      "$('loading').classList.add('hidden');")
    // Auto-unlock: simula click su unlock al caricamento
    .replace("$('unlockBtn').onclick=unlock;",
      "$('unlock').classList.add('hidden');$('loading').classList.remove('hidden');$('unlockBtn').onclick=unlock;setTimeout(unlock,0);");

  const albumSafeName = safeName(manifest.albumName || t('exportedName'));
  downloadBlob(makeZip({
    'index.html': strToU8(makeEmbedHtml(viewerJs, {watermark:showWatermark, publicViewer:true})),
    'come_usare.txt': strToU8(makeEmbedReadme(manifest.albumName || albumSafeName, false))
  }), albumSafeName + '_embed_pubblico.zip');
  alert(t('exportEmbedPublicExported'));
  }catch(err){ alert(t('exportEmbedError')+': '+err.message); console.error(err); }
}

// ══════════════════════════════════════════════════════════════════════
// EXPORT WEB EMBED PROTETTO (con password, foto cifrate)
// ══════════════════════════════════════════════════════════════════════
async function exportEmbedProtectedZip(){
  try{
  if(!state.photos.length) return alert(t('noViewerPhotos'));
  const exportOptions = await askProtectedExportQuality(50, '');
  if(exportOptions === null) return;
  const exportQuality = exportOptions.quality;
  const showWatermark = !!exportOptions.watermark;
  const password = prompt(t('webPassword'));
  if(password === null) return;
  if(!password){ alert(t('webPasswordRequired')); return; }
  const repeat = prompt(t('webPasswordRepeat'));
  if(repeat === null) return;
  if(password !== repeat){ alert(t('webPasswordMismatch')); return; }

  const manifest = buildManifest();
  const iterations = 180000;
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await deriveWebViewerKey(password, salt, iterations);
  const protectedManifest = JSON.parse(JSON.stringify(manifest));
  protectedManifest.protectedWebViewer = true;
  protectedManifest.crypto = {algorithm:'AES-GCM',kdf:'PBKDF2',hash:'SHA-256',iterations,salt:bytesToB64(salt)};
  const protectedPhotos = [];
  const encryptedData = {};

  for(let i = 0; i < state.photos.length; i++){
    const compressed = await compressProtectedViewerPhoto(state.photos[i], exportQuality, 1600);
    const ph = Object.assign({}, manifest.photos[i], {
      name: compressed.name, type: compressed.type,
      path: `encrypted/${String(i+1).padStart(3,'0')}_${safeName(compressed.name||'photo.jpg')}.enc`,
      encrypted: true, iv: ''
    });
    const iv = crypto.getRandomValues(new Uint8Array(12));
    ph.iv = bytesToB64(iv);
    const encrypted = await crypto.subtle.encrypt({name:'AES-GCM',iv}, key, compressed.buffer);
    encryptedData[ph.path] = bytesToB64(new Uint8Array(encrypted));
    protectedPhotos.push(ph);
  }
  protectedManifest.photos = protectedPhotos;

  const manifestJson = JSON.stringify(protectedManifest).replace(/</g,'\\u003c');
  const encryptedJson = JSON.stringify(encryptedData).replace(/</g,'\\u003c');
  let viewerJs = makeViewerJs()
    .replace("const manifest=await fetch('album.json').then(r=>r.json());",
      `const manifest=${manifestJson};const encryptedData=${encryptedJson};`)
    .replace("const buf=await fetch(p.path).then(r=>r.arrayBuffer());",
      "const raw=encryptedData[p.path];if(!raw)throw new Error('missing encrypted photo');const buf=b64ToU8(raw).buffer;");

  const albumSafeName = safeName(manifest.albumName || t('exportedName'));
  downloadBlob(makeZip({
    'index.html': strToU8(makeEmbedHtml(viewerJs, {watermark:showWatermark})),
    'come_usare.txt': strToU8(makeEmbedReadme(manifest.albumName || albumSafeName, true))
  }), albumSafeName + '_embed_protetto.zip');
  alert(t('exportEmbedProtectedExported'));
  }catch(err){ alert(t('exportEmbedProtectedError')+': '+err.message); console.error(err); }
}


function downloadBlob(blob,name){
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;
  a.download=name;
  a.style.display='none';
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{
    try{ document.body.removeChild(a); }catch(e){}
    try{ URL.revokeObjectURL(url); }catch(e){}
  },10000);
  return name;
}

function strToU8(s){ return new TextEncoder().encode(s); }
function u8ToStr(u){ return new TextDecoder().decode(u); }
let CRC_TABLE=null;
function crc32(data){ if(!CRC_TABLE){ CRC_TABLE=Array.from({length:256},(_,n)=>{ let c=n; for(let k=0;k<8;k++) c=(c&1)?(0xedb88320^(c>>>1)):(c>>>1); return c>>>0; }); } let c=0xffffffff; for(let i=0;i<data.length;i++) c=CRC_TABLE[(c^data[i])&255]^(c>>>8); return (c^0xffffffff)>>>0; }
function dosDateTime(date=new Date()){ return {time:(date.getHours()<<11)|(date.getMinutes()<<5)|Math.floor(date.getSeconds()/2), date:((date.getFullYear()-1980)<<9)|((date.getMonth()+1)<<5)|date.getDate()}; }
function w16(arr,v){ arr.push(v&255,(v>>>8)&255); }
function w32(arr,v){ arr.push(v&255,(v>>>8)&255,(v>>>16)&255,(v>>>24)&255); }
function makeZip(files){ const local=[]; const central=[]; let offset=0; const dt=dosDateTime(); const paths=Object.keys(files); for(const path of paths){ const data=files[path]; const name=strToU8(path); const crc=crc32(data); const header=[]; w32(header,0x04034b50); w16(header,20); w16(header,0); w16(header,0); w16(header,dt.time); w16(header,dt.date); w32(header,crc); w32(header,data.length); w32(header,data.length); w16(header,name.length); w16(header,0); local.push(new Uint8Array(header),name,data); const c=[]; w32(c,0x02014b50); w16(c,20); w16(c,20); w16(c,0); w16(c,0); w16(c,dt.time); w16(c,dt.date); w32(c,crc); w32(c,data.length); w32(c,data.length); w16(c,name.length); w16(c,0); w16(c,0); w16(c,0); w16(c,0); w32(c,0); w32(c,offset); central.push(new Uint8Array(c),name); offset+=header.length+name.length+data.length; } const centralSize=central.reduce((s,x)=>s+x.length,0); const end=[]; w32(end,0x06054b50); w16(end,0); w16(end,0); w16(end,paths.length); w16(end,paths.length); w32(end,centralSize); w32(end,offset); w16(end,0); return new Blob([...local,...central,new Uint8Array(end)],{type:'application/zip'}); }
function readZip(data){ const entries={}; let i=0; while(i<data.length-4){ const sig=data[i]|(data[i+1]<<8)|(data[i+2]<<16)|(data[i+3]<<24); if(sig!==0x04034b50) break; const method=data[i+8]|(data[i+9]<<8); const compSize=data[i+18]|(data[i+19]<<8)|(data[i+20]<<16)|(data[i+21]<<24); const nameLen=data[i+26]|(data[i+27]<<8); const extraLen=data[i+28]|(data[i+29]<<8); const name=u8ToStr(data.slice(i+30,i+30+nameLen)); if(name.includes('..')||name.startsWith('/')||name.startsWith('\\')) throw new Error('Unsafe ZIP entry'); const start=i+30+nameLen+extraLen; if(method!==0) throw new Error('Unsupported ZIP compression in this portable version'); entries[name]=data.slice(start,start+compSize); i=start+compSize; } return entries; }



function showSettingsModal(){
  closeSettingsModal();
  const overlay=document.createElement('div'); overlay.id='settingsOverlay'; overlay.className='guide-overlay';
  const box=document.createElement('div'); box.className='guide-box settings-box';
  const header=document.createElement('div'); header.className='guide-header';
  const title=document.createElement('h2'); title.textContent=t('settingsTitle');
  const close=document.createElement('button'); close.className='guide-close'; close.type='button'; close.textContent='×'; close.title=t('close');
  close.addEventListener('click', closeSettingsModal);
  header.append(title, close);

  const body=document.createElement('div'); body.className='guide-body settings-body';

  const languageLabel=document.createElement('label'); languageLabel.className='field-label'; languageLabel.textContent=t('languageLabel');
  const language=document.createElement('select'); language.id='settingsLanguage';
  language.innerHTML='<option value="en">English</option><option value="fr">Français</option><option value="de">Deutsch</option><option value="it">Italiano</option>';
  language.value=state.language;

  const secondsLabel=document.createElement('label'); secondsLabel.className='field-label'; secondsLabel.textContent=t('slideSeconds');
  const seconds=document.createElement('input'); seconds.type='number'; seconds.min='1'; seconds.max='60'; seconds.step='0.25'; seconds.value=state.settings.slideSeconds;

  const captionLabel=document.createElement('label'); captionLabel.className='field-label'; captionLabel.textContent=t('showCaption');
  const caption=document.createElement('select');
  caption.innerHTML=`<option value="true">${t('yes')}</option><option value="false">${t('no')}</option>`;
  caption.value=String(!!state.settings.showCaption);

  const albumQualityLabel=document.createElement('label'); albumQualityLabel.className='field-label'; albumQualityLabel.textContent=t('albumImageQuality');
  const albumQualityValue=document.createElement('div'); albumQualityValue.className='quality-export-value';
  const albumQuality=document.createElement('input'); albumQuality.type='range'; albumQuality.min='50'; albumQuality.max='100'; albumQuality.step='5'; albumQuality.value=clampAlbumImageQuality(state.settings.albumImageQuality);
  const updateAlbumQualityValue=()=>{ albumQualityValue.textContent=`${t('albumImageQualityValue')}: ${albumQuality.value}%`; };
  albumQuality.addEventListener('input', updateAlbumQualityValue); updateAlbumQualityValue();
  const albumQualityHelp=document.createElement('div'); albumQualityHelp.className='hint'; albumQualityHelp.textContent=t('albumImageQualityHelp');

  const compression=document.createElement('div'); compression.className='hint'; compression.textContent=t('compressionInfo');

  const about=document.createElement('div'); about.className='settings-about';
  const author=document.createElement('div'); author.className='settings-author'; author.textContent=t('authorLabel');
  const coffee=document.createElement('button'); coffee.type='button'; coffee.className='coffee-btn'; coffee.textContent='☕ '+t('buyCoffee');
  coffee.addEventListener('click', ()=>{ window.open('https://buymeacoffee.com/smsteves','_blank','noopener,noreferrer'); });
  about.append(author, coffee);

  body.append(languageLabel, language, secondsLabel, seconds, captionLabel, caption, albumQualityLabel, albumQualityValue, albumQuality, albumQualityHelp, compression, about);

  const footer=document.createElement('div'); footer.className='guide-footer';
  const cancel=document.createElement('button'); cancel.type='button'; cancel.textContent=t('cancel'); cancel.addEventListener('click', closeSettingsModal);
  const save=document.createElement('button'); save.type='button'; save.className='primary'; save.textContent=t('saveSettings');
  save.addEventListener('click', ()=>{
    state.language=validLanguage(language.value);
    savePreferredLanguage(state.language);
    state.settings.slideSeconds=clampSlideSeconds(seconds.value);
    state.settings.showCaption=caption.value==='true';
    state.settings.albumImageQuality=clampAlbumImageQuality(albumQuality.value);
    localStorage.setItem('photopin_album_image_quality', String(state.settings.albumImageQuality));
    $('languageSelect').value=state.language;
    syncSettingsInputs();
    restartTimerIfNeeded();
    setDirty();
    applyI18n();
    renderAll();
    closeSettingsModal();
  });
  footer.append(cancel, save);
  box.append(header, body, footer); overlay.appendChild(box); document.body.appendChild(overlay);
  overlay.addEventListener('click', ev=>{ if(ev.target===overlay) closeSettingsModal(); });
}
function closeSettingsModal(){ const old=document.getElementById('settingsOverlay'); if(old) old.remove(); }

const WEB_GUIDES = {
  "it": {
    "miniTitle": "🚀 Mini guida FotoPin Web",
    "fullTitle": "📖 Manuale utente FotoPin Web",
    "mini": [
      {
        "emoji": "1️⃣",
        "title": "Apri o crea un album",
        "body": "Usa Apri album per caricare uno ZIP FotoPin, oppure Nuovo album per iniziare da zero. Gli album protetti si aprono in sola lettura finché non vengono sbloccati."
      },
      {
        "emoji": "2️⃣",
        "title": "Esplora prima di modificare",
        "body": "All’apertura sei in modalità Naviga: i punti Foto aprono foto collegate, le Note mostrano testo. Usa Presentazione per vedere l’album a schermo intero."
      },
      {
        "emoji": "3️⃣",
        "title": "Modifica solo se sbloccato",
        "body": "Premi Edita per aggiungere o modificare punti, note, testi, titolatori e GPS. Se l’album è locked, usa prima Sblocca album."
      },
      {
        "emoji": "4️⃣",
        "title": "Salva e condividi",
        "body": "Salva album crea uno ZIP FotoPin. Export Web pubblico/protetto crea viewer HTML per condividere l’album. Per Facebook o GitHub Pages usa l’export pubblico."
      },
      {
        "emoji": "💡",
        "title": "Consiglio rapido",
        "body": "Salva spesso. Prima di modifiche importanti conserva una copia dello ZIP originale e riapri lo ZIP salvato per verificare il percorso."
      }
    ],
    "full": [
      {
        "emoji": "💡",
        "title": "1. Cos’è FotoPin Web",
        "body": "FotoPin Web è il complemento desktop/web per creare album fotografici interattivi. Un album può contenere foto, punti foto cliccabili, note, testi liberi, titolatori, dati GPS, musica, presentazioni, video ed export web pubblici o protetti. Funziona localmente nel browser con HTML, CSS e JavaScript: non serve un server."
      },
      {
        "emoji": "🗂",
        "title": "2. Struttura dell’album",
        "body": "Un album FotoPin viene salvato come file ZIP. Contiene dati dell’album, foto, musica e informazioni del percorso. La prima foto è normalmente la foto principale o di partenza. Le altre foto si raggiungono tramite punti Foto. Conserva copie dello ZIP originale prima di modifiche importanti."
      },
      {
        "emoji": "🌍",
        "title": "3. Lingua",
        "body": "Usa il selettore lingua vicino al numero versione per passare tra inglese, italiano, francese e tedesco. Dialog, label, guide ed export seguono la lingua selezionata quando possibile. La lingua predefinita è inglese."
      },
      {
        "emoji": "🖼",
        "title": "4. Aggiungere e gestire foto",
        "body": "Usa il campo file nella sezione Foto per aggiungere una o più immagini. Seleziona una foto dalla lista a sinistra per modificarla. In modalità Edita, tasto destro su una foto della lista apre le azioni foto: dettagli, esporta singola foto o importa pacchetto singola foto."
      },
      {
        "emoji": "🧭",
        "title": "5. Modalità Naviga ed Edita",
        "body": "Naviga serve per esplorare l’album: i punti Foto aprono foto collegate e le Note mostrano testo. Edita serve per creare e modificare contenuti. Quando Edita è attivo, clicca su una zona libera dell’immagine per inserire punto Foto, Nota, Testo libero o Titolatore."
      },
      {
        "emoji": "📍",
        "title": "6. Punti Foto",
        "body": "Un punto Foto collega una zona della foto corrente a un’altra foto. È utile per porte, stanze, oggetti, luoghi o dettagli da aprire. Con il tasto destro sul punto apri il menu: modifica, copia, taglia, elimina, sposta o undo."
      },
      {
        "emoji": "🗒",
        "title": "7. Note",
        "body": "Una Nota è un testo collegato a un punto dell’immagine. In Naviga si apre come popup di lettura. In Edita può essere modificata e salvata. Usa le note per date, spiegazioni, misure, commenti o istruzioni."
      },
      {
        "emoji": "✏️",
        "title": "8. Testo libero",
        "body": "Il Testo libero è un testo fisso sovrapposto alla foto. Puoi scegliere colore e dimensione, poi spostarlo come gli altri punti. È utile per etichette, didascalie, nomi o spiegazioni brevi che devono restare sempre visibili su quella foto."
      },
      {
        "emoji": "🎬",
        "title": "9. Titolatore",
        "body": "Il Titolatore crea testo in movimento. La modalità verticale è adatta a titoli iniziali o di coda. La modalità orizzontale funziona come una striscia da telegiornale. Puoi impostare colore, dimensione, larghezza e altezza riquadro, velocità, verso e posizione. Il riquadro visibile definisce l’area di scorrimento."
      },
      {
        "emoji": "🔁",
        "title": "10. Titolatore continuo e stop",
        "body": "Se Continuo è attivo, il titolatore parte da quella foto e continua sopra le successive senza aggiungere pause. Per fermarlo, inserisci un altro titolatore continuo con testo “stop” (maiuscolo/minuscolo non importa). I titolatori non continui mantengono il comportamento normale."
      },
      {
        "emoji": "▶️",
        "title": "11. Presentazione",
        "body": "Presentazione apre l’album a schermo intero. Spazio pausa/riprende, tasto destro torna indietro, frecce avanti/indietro, Esc torna alla home. La pausa mostra controlli e overlay utili. L’ultima foto può durare di più e sfumare al nero."
      },
      {
        "emoji": "🎵",
        "title": "12. Musica",
        "body": "La musica può essere usata in presentazione, video ed export web. Alcuni browser bloccano l’audio automatico finché l’utente non clicca la pagina; in quel caso usa il pulsante Musica o fai un clic sul viewer. Cambia musica passa alla traccia successiva se ne sono disponibili più di una."
      },
      {
        "emoji": "🎞",
        "title": "13. Generazione video MP4",
        "body": "Genera video MP4 registra la presentazione tramite il browser usando Canvas e MediaRecorder. A seconda del browser, MP4 potrebbe non essere disponibile e potrebbe essere creato WebM. Per una generazione più fluida, lascia la scheda visibile ed evita attività pesanti in background."
      },
      {
        "emoji": "🌐",
        "title": "14. Export Web pubblico",
        "body": "L’export Web pubblico crea una cartella/ZIP con index.html, album.json, photos e music. Serve per condividere un album interattivo online, per esempio con GitHub Pages. Facebook e YouTube non ospitano direttamente il viewer HTML: su Facebook condividi il link web, su piattaforme video carica l’MP4."
      },
      {
        "emoji": "🔐",
        "title": "15. Export protetto e album locked",
        "body": "L’export protetto crea un viewer che richiede password. Gli album locked si aprono in sola lettura finché non viene inserito il codice corretto. Il file .pswd, quando creato, contiene la password in chiaro per il proprietario: tienilo privato e non pubblicarlo con un album protetto."
      },
      {
        "emoji": "🗺",
        "title": "16. GPS e mappe",
        "body": "Quando l’album è sbloccato puoi salvare latitudine, longitudine e indirizzo/luogo. Apri in Google Maps usa le coordinate salvate. Cerca in Google Maps usa il testo dell’indirizzo. Dopo modifiche GPS salva l’album."
      },
      {
        "emoji": "💾",
        "title": "17. Salvataggio e backup",
        "body": "Salva album scrive uno ZIP FotoPin. Nei browser compatibili puoi scegliere cartella o file; altrimenti il browser scarica il file. Se il file esiste già, il browser dovrebbe chiedere conferma prima di sovrascrivere. Conserva copie di backup prima di modifiche importanti."
      },
      {
        "emoji": "🧰",
        "title": "18. Problemi comuni",
        "body": "Se l’audio non parte, clicca una volta nel viewer o premi Musica. Se GitHub Pages mostra una versione vecchia, attendi qualche minuto e aggiorna. Se il video esce WebM, il browser non fornisce MP4. Se una pagina è nera, controlla di aver caricato tutti i file esportati, non solo index.html."
      }
    ]
  },
  "en": {
    "miniTitle": "🚀 FotoPin Web Mini Guide",
    "fullTitle": "📖 FotoPin Web User Manual",
    "mini": [
      {
        "emoji": "1️⃣",
        "title": "Open or create an album",
        "body": "Use Open album to load a FotoPin ZIP, or New album to start from scratch. Protected albums open read-only until you unlock them."
      },
      {
        "emoji": "2️⃣",
        "title": "Explore before editing",
        "body": "Albums open in Navigate mode: Photo pins open linked photos, Notes show text. Use Presentation for full-screen viewing."
      },
      {
        "emoji": "3️⃣",
        "title": "Edit only when unlocked",
        "body": "Press Edit to add or change pins, notes, text, scrolling titles and GPS. If the album is locked, unlock it first."
      },
      {
        "emoji": "4️⃣",
        "title": "Save and share",
        "body": "Save album creates a FotoPin ZIP. Public/protected Web export creates HTML viewers for sharing. Use public export for Facebook or GitHub Pages."
      },
      {
        "emoji": "💡",
        "title": "Quick tip",
        "body": "Save often. Before major edits, keep a copy of the original ZIP and reopen the saved ZIP to check the path."
      }
    ],
    "full": [
      {
        "emoji": "💡",
        "title": "1. What FotoPin Web is",
        "body": "FotoPin Web is the desktop/web companion for creating interactive photo albums. An album can contain photos, clickable photo pins, notes, free text overlays, scrolling titles, GPS information, music, presentations, videos and public or protected web exports. It runs locally in the browser using HTML, CSS and JavaScript: no server is required."
      },
      {
        "emoji": "🗂",
        "title": "2. Album structure",
        "body": "A FotoPin album is saved as a ZIP file. It contains album data, photos, music and the path information. The first photo is normally the main/start photo. Other photos can be reached through Photo pins. Keep original ZIP backups before major edits."
      },
      {
        "emoji": "🌍",
        "title": "3. Language",
        "body": "Use the language selector near the version number to switch between English, Italian, French and German. New exports and dialogs follow the selected language where possible. English is the default language."
      },
      {
        "emoji": "🖼",
        "title": "4. Adding and managing photos",
        "body": "Use the photo file input to add one or more images. Select a photo from the left list to edit it. In Edit mode, right-click a photo in the list to open photo actions: show details, export that single photo, or import a single photo package."
      },
      {
        "emoji": "🧭",
        "title": "5. Navigate and Edit modes",
        "body": "Navigate mode is for exploring the album: Photo pins open linked photos and Note pins show text. Edit mode is for creating and changing content. When Edit is active, click a free area of the image to insert a Photo pin, Note, Free text or Scrolling title."
      },
      {
        "emoji": "📍",
        "title": "6. Photo pins",
        "body": "A Photo pin connects one area of the current photo to another photo. Use it for doors, rooms, objects, places or any detail that should open a new image. Right-click a pin to open its menu: edit, copy, cut, delete, move or undo."
      },
      {
        "emoji": "🗒",
        "title": "7. Notes",
        "body": "A Note is text attached to a point on the image. In Navigate mode it opens as a readable popup. In Edit mode it can be changed and saved. Notes are useful for dates, explanations, measures, comments and instructions."
      },
      {
        "emoji": "✏️",
        "title": "8. Free text",
        "body": "Free text is a fixed text overlay placed directly on the photo. You can choose color and size, then move it like other points. Use it for labels, captions, names or short explanations that should always remain visible on that photo."
      },
      {
        "emoji": "🎬",
        "title": "9. Scrolling title / Titolatore",
        "body": "The scrolling title creates moving text. Vertical mode is useful for opening or ending credits. Horizontal mode works like a news ticker. You can set text color, size, box width, box height, speed, direction and position. The visible box defines the clipping area for the text."
      },
      {
        "emoji": "🔁",
        "title": "10. Continuous scrolling titles and stop",
        "body": "If Continuous is enabled, the title starts on that photo and continues over the following photos without adding extra slide pauses. To stop a continuous title, insert another continuous title with the text “stop” (any uppercase/lowercase variant works). Non-continuous titles keep their normal behavior."
      },
      {
        "emoji": "▶️",
        "title": "11. Presentation",
        "body": "Presentation opens the album full screen. Space pauses/resumes, right-click goes back, arrows move forward/back, Esc returns home. Pausing shows useful controls and overlays. The final photo can hold longer and fade to black."
      },
      {
        "emoji": "🎵",
        "title": "12. Music",
        "body": "Music can be used in presentations, videos and web exports. Some browsers block automatic audio until the user clicks the page; in that case use the Music button or click once on the viewer. The Change music button switches track when multiple tracks are available."
      },
      {
        "emoji": "🎞",
        "title": "13. Video MP4 generation",
        "body": "Generate MP4 video records the presentation through the browser. It uses Canvas and MediaRecorder. Depending on the browser, MP4 may not be available and WebM may be produced instead. For smoother generation, keep the browser tab visible and avoid running heavy tasks in the background."
      },
      {
        "emoji": "🌐",
        "title": "14. Public Web export",
        "body": "Public Web export creates a folder/ZIP containing index.html, album.json, photos and music. It is meant for sharing an interactive album online, for example with GitHub Pages. Facebook and YouTube cannot directly host the HTML viewer: share the web link on Facebook, or upload an MP4 video to video platforms."
      },
      {
        "emoji": "🔐",
        "title": "15. Protected Web export and locked albums",
        "body": "Protected export creates a viewer that requires a password. Locked albums open read-only until the correct password/code is entered. The .pswd file, when created, stores the password in clear text for the album owner: keep it private and never publish it with a protected album."
      },
      {
        "emoji": "🗺",
        "title": "16. GPS and maps",
        "body": "When the album is unlocked you can save latitude, longitude and an address/place. Open in Google Maps uses saved coordinates. Search in Google Maps uses the text address. Save the album after changing GPS data."
      },
      {
        "emoji": "💾",
        "title": "17. Saving and backups",
        "body": "Save album writes a FotoPin ZIP. On compatible browsers you can choose the target folder or file; otherwise the browser downloads it. If the file already exists, the browser should ask before overwriting. Keep backup copies before large changes."
      },
      {
        "emoji": "🧰",
        "title": "18. Common problems",
        "body": "If audio does not start, click once in the viewer or press Music. If GitHub Pages still shows an old version, wait a few minutes and refresh. If a video exports as WebM, the browser does not provide MP4 support. If a page is black, check that all exported files were uploaded, not only index.html."
      }
    ]
  },
  "fr": {
    "miniTitle": "🚀 Mini-guide FotoPin Web",
    "fullTitle": "📖 Manuel utilisateur FotoPin Web",
    "mini": [
      {
        "emoji": "1️⃣",
        "title": "Ouvrir ou créer un album",
        "body": "Utilisez Ouvrir album pour charger un ZIP FotoPin, ou Nouvel album pour commencer. Les albums protégés s’ouvrent en lecture seule jusqu’au déverrouillage."
      },
      {
        "emoji": "2️⃣",
        "title": "Explorer avant de modifier",
        "body": "L’album s’ouvre en mode Navigation : les points Photo ouvrent les photos liées, les Notes affichent du texte. Présentation lance le plein écran."
      },
      {
        "emoji": "3️⃣",
        "title": "Modifier seulement si déverrouillé",
        "body": "Appuyez sur Éditer pour ajouter ou modifier points, notes, textes, titres défilants et GPS. Si l’album est verrouillé, déverrouillez-le d’abord."
      },
      {
        "emoji": "4️⃣",
        "title": "Enregistrer et partager",
        "body": "Enregistrer album crée un ZIP FotoPin. Les exports Web public/protégé créent des viewers HTML à partager. Utilisez l’export public pour Facebook ou GitHub Pages."
      },
      {
        "emoji": "💡",
        "title": "Conseil rapide",
        "body": "Enregistrez souvent. Avant de grandes modifications, gardez une copie du ZIP original et rouvrez le ZIP enregistré pour vérifier le parcours."
      }
    ],
    "full": [
      {
        "emoji": "💡",
        "title": "1. Qu’est-ce que FotoPin Web",
        "body": "FotoPin Web est le compagnon desktop/web pour créer des albums photo interactifs. Un album peut contenir photos, points cliquables, notes, textes libres, titres défilants, GPS, musique, présentations, vidéos et exports web publics ou protégés. Il fonctionne localement dans le navigateur avec HTML, CSS et JavaScript."
      },
      {
        "emoji": "🗂",
        "title": "2. Structure de l’album",
        "body": "Un album FotoPin est enregistré comme fichier ZIP. Il contient les données de l’album, les photos, la musique et le parcours. La première photo est normalement la photo principale. Les autres photos sont atteintes par les points Photo. Gardez des copies du ZIP original avant les grandes modifications."
      },
      {
        "emoji": "🌍",
        "title": "3. Langue",
        "body": "Le sélecteur de langue près du numéro de version permet de choisir anglais, italien, français ou allemand. Les dialogues, labels, guides et exports suivent la langue sélectionnée quand c’est possible. La langue par défaut est l’anglais."
      },
      {
        "emoji": "🖼",
        "title": "4. Ajouter et gérer des photos",
        "body": "Utilisez le champ de fichier dans Photos pour ajouter des images. Sélectionnez une photo dans la liste de gauche pour la modifier. En mode Édition, clic droit sur une photo de la liste ouvre les actions : détails, exporter une photo, importer un paquet photo."
      },
      {
        "emoji": "🧭",
        "title": "5. Modes Navigation et Édition",
        "body": "Navigation sert à explorer : les points Photo ouvrent les photos liées et les Notes affichent du texte. Édition sert à créer et modifier. Quand Édition est active, cliquez sur une zone libre de l’image pour insérer Photo, Note, Texte libre ou Titre défilant."
      },
      {
        "emoji": "📍",
        "title": "6. Points Photo",
        "body": "Un point Photo relie une zone de la photo actuelle à une autre photo. Utilisez-le pour portes, pièces, objets, lieux ou détails. Le clic droit sur le point ouvre le menu : modifier, copier, couper, supprimer, déplacer ou annuler."
      },
      {
        "emoji": "🗒",
        "title": "7. Notes",
        "body": "Une Note est un texte lié à un point de l’image. En Navigation elle s’ouvre en lecture. En Édition elle peut être modifiée et enregistrée. Utilisez les notes pour dates, explications, mesures, commentaires ou instructions."
      },
      {
        "emoji": "✏️",
        "title": "8. Texte libre",
        "body": "Le Texte libre est un texte fixe superposé à la photo. Vous choisissez couleur et taille, puis vous le déplacez comme les autres points. Il sert pour étiquettes, légendes, noms ou courtes explications visibles sur la photo."
      },
      {
        "emoji": "🎬",
        "title": "9. Titre défilant",
        "body": "Le Titre défilant crée du texte en mouvement. Le mode vertical convient aux génériques. Le mode horizontal fonctionne comme un bandeau d’information. Vous pouvez régler couleur, taille, largeur/hauteur du cadre, vitesse, direction et position."
      },
      {
        "emoji": "🔁",
        "title": "10. Titre continu et stop",
        "body": "Si Continu est activé, le titre commence sur cette photo et continue sur les suivantes sans pause supplémentaire. Pour l’arrêter, insérez un autre titre continu avec le texte “stop” (majuscules/minuscules indifférentes). Les titres non continus restent inchangés."
      },
      {
        "emoji": "▶️",
        "title": "11. Présentation",
        "body": "Présentation ouvre l’album en plein écran. Espace pause/reprend, clic droit revient en arrière, flèches avancent/reculent, Esc revient à l’accueil. La dernière photo peut durer plus longtemps et fondu au noir."
      },
      {
        "emoji": "🎵",
        "title": "12. Musique",
        "body": "La musique peut être utilisée dans présentation, vidéo et export web. Certains navigateurs bloquent l’audio automatique jusqu’à un clic utilisateur ; utilisez alors Musique ou cliquez une fois dans le viewer. Changer musique passe à la piste suivante."
      },
      {
        "emoji": "🎞",
        "title": "13. Génération vidéo MP4",
        "body": "Générer vidéo MP4 enregistre la présentation avec le navigateur via Canvas et MediaRecorder. Selon le navigateur, MP4 peut ne pas être disponible et WebM peut être généré. Gardez l’onglet visible pour une génération plus fluide."
      },
      {
        "emoji": "🌐",
        "title": "14. Export Web public",
        "body": "L’export Web public crée index.html, album.json, photos et music. Il sert à partager un album interactif en ligne, par exemple avec GitHub Pages. Facebook partage le lien web ; YouTube ou autres plateformes vidéo nécessitent un MP4."
      },
      {
        "emoji": "🔐",
        "title": "15. Export protégé et albums verrouillés",
        "body": "L’export protégé crée un viewer avec mot de passe. Les albums verrouillés sont en lecture seule jusqu’au bon code. Le fichier .pswd, s’il est créé, contient le mot de passe en clair : gardez-le privé."
      },
      {
        "emoji": "🗺",
        "title": "16. GPS et cartes",
        "body": "Quand l’album est déverrouillé, vous pouvez enregistrer latitude, longitude et adresse/lieu. Ouvrir dans Google Maps utilise les coordonnées. Rechercher dans Google Maps utilise le texte d’adresse. Enregistrez après modification."
      },
      {
        "emoji": "💾",
        "title": "17. Enregistrement et sauvegardes",
        "body": "Enregistrer album écrit un ZIP FotoPin. Sur les navigateurs compatibles, vous pouvez choisir dossier ou fichier ; sinon le navigateur télécharge le fichier. Gardez des sauvegardes avant les changements importants."
      },
      {
        "emoji": "🧰",
        "title": "18. Problèmes fréquents",
        "body": "Si l’audio ne démarre pas, cliquez dans le viewer ou appuyez sur Musique. Si GitHub Pages montre l’ancienne version, attendez et actualisez. Si la vidéo sort en WebM, le navigateur ne fournit pas MP4. Si la page est noire, vérifiez que tous les fichiers exportés sont chargés."
      }
    ]
  },
  "de": {
    "miniTitle": "🚀 FotoPin Web Kurzanleitung",
    "fullTitle": "📖 FotoPin Web Benutzerhandbuch",
    "mini": [
      {
        "emoji": "1️⃣",
        "title": "Album öffnen oder erstellen",
        "body": "Mit Album öffnen laden Sie ein FotoPin-ZIP, mit Neues Album beginnen Sie neu. Geschützte Alben sind schreibgeschützt, bis sie entsperrt werden."
      },
      {
        "emoji": "2️⃣",
        "title": "Vor dem Bearbeiten erkunden",
        "body": "Alben öffnen im Navigationsmodus: Foto-Punkte öffnen verknüpfte Fotos, Notizen zeigen Text. Präsentation startet die Vollbildansicht."
      },
      {
        "emoji": "3️⃣",
        "title": "Nur entsperrt bearbeiten",
        "body": "Mit Bearbeiten fügen Sie Punkte, Notizen, Texte, Laufschriften und GPS hinzu oder ändern sie. Ist das Album gesperrt, zuerst entsperren."
      },
      {
        "emoji": "4️⃣",
        "title": "Speichern und teilen",
        "body": "Album speichern erstellt ein FotoPin-ZIP. Öffentliche/geschützte Web-Exporte erstellen HTML-Viewer zum Teilen. Für Facebook oder GitHub Pages den öffentlichen Export verwenden."
      },
      {
        "emoji": "💡",
        "title": "Schneller Tipp",
        "body": "Speichern Sie oft. Vor großen Änderungen eine Kopie des Original-ZIP behalten und das gespeicherte ZIP erneut öffnen, um den Pfad zu prüfen."
      }
    ],
    "full": [
      {
        "emoji": "💡",
        "title": "1. Was FotoPin Web ist",
        "body": "FotoPin Web ist die Desktop/Web-Ergänzung zum Erstellen interaktiver Fotoalben. Ein Album kann Fotos, anklickbare Foto-Punkte, Notizen, freie Texte, Laufschriften, GPS, Musik, Präsentationen, Videos sowie öffentliche oder geschützte Web-Exporte enthalten. Es läuft lokal im Browser mit HTML, CSS und JavaScript."
      },
      {
        "emoji": "🗂",
        "title": "2. Albumstruktur",
        "body": "Ein FotoPin-Album wird als ZIP-Datei gespeichert. Es enthält Albumdaten, Fotos, Musik und Pfadinformationen. Das erste Foto ist normalerweise das Startfoto. Andere Fotos werden über Foto-Punkte erreicht. Vor großen Änderungen Original-ZIPs sichern."
      },
      {
        "emoji": "🌍",
        "title": "3. Sprache",
        "body": "Mit der Sprachauswahl neben der Versionsnummer wechseln Sie zwischen Englisch, Italienisch, Französisch und Deutsch. Dialoge, Labels, Anleitungen und Exporte folgen nach Möglichkeit der gewählten Sprache. Standardsprache ist Englisch."
      },
      {
        "emoji": "🖼",
        "title": "4. Fotos hinzufügen und verwalten",
        "body": "Über das Dateifeld im Bereich Fotos fügen Sie Bilder hinzu. Wählen Sie ein Foto links aus, um es zu bearbeiten. Im Bearbeitungsmodus öffnet Rechtsklick auf ein Foto in der Liste die Aktionen: Details, einzelnes Foto exportieren oder Fotopaket importieren."
      },
      {
        "emoji": "🧭",
        "title": "5. Navigieren und Bearbeiten",
        "body": "Navigation dient dem Erkunden: Foto-Punkte öffnen verknüpfte Fotos, Notizen zeigen Text. Bearbeiten dient dem Erstellen und Ändern. Bei aktivem Bearbeiten klicken Sie auf eine freie Bildstelle, um Foto-Punkt, Notiz, freien Text oder Laufschrift einzufügen."
      },
      {
        "emoji": "📍",
        "title": "6. Foto-Punkte",
        "body": "Ein Foto-Punkt verbindet einen Bereich des aktuellen Fotos mit einem anderen Foto. Nützlich für Türen, Räume, Objekte, Orte oder Details. Rechtsklick auf den Punkt öffnet das Menü: bearbeiten, kopieren, ausschneiden, löschen, verschieben oder rückgängig."
      },
      {
        "emoji": "🗒",
        "title": "7. Notizen",
        "body": "Eine Notiz ist Text an einem Bildpunkt. Im Navigationsmodus öffnet sie sich als Lesefenster. Im Bearbeitungsmodus kann sie geändert und gespeichert werden. Notizen eignen sich für Daten, Erklärungen, Maße, Kommentare und Anweisungen."
      },
      {
        "emoji": "✏️",
        "title": "8. Freier Text",
        "body": "Freier Text ist fester Text über dem Foto. Farbe und Größe können gewählt werden; danach wird er wie andere Punkte verschoben. Er eignet sich für Beschriftungen, Namen oder kurze Erklärungen, die immer sichtbar bleiben sollen."
      },
      {
        "emoji": "🎬",
        "title": "9. Laufschrift / Titolatore",
        "body": "Die Laufschrift erzeugt bewegten Text. Vertikal eignet sich für Vor- oder Abspann. Horizontal funktioniert wie ein Nachrichtenticker. Einstellbar sind Farbe, Größe, Rahmenbreite/-höhe, Geschwindigkeit, Richtung und Position."
      },
      {
        "emoji": "🔁",
        "title": "10. Kontinuierliche Laufschrift und stop",
        "body": "Ist Kontinuierlich aktiv, startet die Laufschrift auf diesem Foto und läuft über folgende Fotos ohne zusätzliche Pause. Zum Stoppen eine weitere kontinuierliche Laufschrift mit Text “stop” einfügen (Groß/Kleinschreibung egal). Nicht-kontinuierliche Titel bleiben unverändert."
      },
      {
        "emoji": "▶️",
        "title": "11. Präsentation",
        "body": "Präsentation öffnet das Album im Vollbild. Leertaste pausiert/fortsetzt, Rechtsklick geht zurück, Pfeile vor/zurück, Esc zur Startansicht. Das letzte Foto kann länger bleiben und zu Schwarz überblenden."
      },
      {
        "emoji": "🎵",
        "title": "12. Musik",
        "body": "Musik kann in Präsentation, Video und Web-Export verwendet werden. Manche Browser blockieren Autoplay bis zum ersten Klick; dann Musik drücken oder einmal im Viewer klicken. Musik wechseln wählt die nächste Spur."
      },
      {
        "emoji": "🎞",
        "title": "13. MP4-Videoerzeugung",
        "body": "MP4-Video erzeugen nimmt die Präsentation im Browser mit Canvas und MediaRecorder auf. Je nach Browser ist MP4 nicht verfügbar und WebM wird erzeugt. Für flüssigere Ausgabe den Tab sichtbar lassen und schwere Hintergrundarbeiten vermeiden."
      },
      {
        "emoji": "🌐",
        "title": "14. Öffentlicher Web-Export",
        "body": "Der öffentliche Web-Export erstellt index.html, album.json, photos und music. Damit wird ein interaktives Album online geteilt, z. B. mit GitHub Pages. Facebook teilt den Web-Link; YouTube und Videoplattformen benötigen MP4."
      },
      {
        "emoji": "🔐",
        "title": "15. Geschützter Export und gesperrte Alben",
        "body": "Der geschützte Export erstellt einen Viewer mit Passwort. Gesperrte Alben sind schreibgeschützt, bis der richtige Code eingegeben wird. Die .pswd-Datei enthält, falls erstellt, das Passwort im Klartext: privat halten."
      },
      {
        "emoji": "🗺",
        "title": "16. GPS und Karten",
        "body": "Bei entsperrtem Album können Breite, Länge und Adresse/Ort gespeichert werden. In Google Maps öffnen nutzt Koordinaten. In Google Maps suchen nutzt den Adresstext. Nach GPS-Änderungen speichern."
      },
      {
        "emoji": "💾",
        "title": "17. Speichern und Backups",
        "body": "Album speichern schreibt ein FotoPin-ZIP. Kompatible Browser erlauben Ordner- oder Dateiauswahl; sonst wird heruntergeladen. Vor wichtigen Änderungen Backups behalten."
      },
      {
        "emoji": "🧰",
        "title": "18. Häufige Probleme",
        "body": "Wenn Audio nicht startet, einmal im Viewer klicken oder Musik drücken. Wenn GitHub Pages alte Inhalte zeigt, kurz warten und aktualisieren. Wenn Video als WebM entsteht, unterstützt der Browser kein MP4. Bei schwarzer Seite prüfen, ob alle exportierten Dateien hochgeladen wurden."
      }
    ]
  }
};

function showMiniGuide(){
  const g=WEB_GUIDES[state.language] || WEB_GUIDES.en || WEB_GUIDES.it;
  showGuideModal(g.miniTitle, g.mini);
}

function showFullGuide(){
  const g=WEB_GUIDES[state.language] || WEB_GUIDES.en || WEB_GUIDES.it;
  showGuideModal(g.fullTitle, g.full);
}

function showGuideModal(title, sections){
  closeGuideModal();
  const overlay=document.createElement('div'); overlay.id='guideOverlay'; overlay.className='guide-overlay';
  const box=document.createElement('div'); box.className='guide-box';
  const header=document.createElement('div'); header.className='guide-header';
  const h=document.createElement('h2'); h.textContent=title;
  const close=document.createElement('button'); close.className='guide-close'; close.type='button'; close.textContent='×'; close.title=t('close');
  close.addEventListener('click', closeGuideModal);
  header.append(h, close);
  const body=document.createElement('div'); body.className='guide-body';
  sections.forEach(s=>{
    const card=document.createElement('section'); card.className='guide-section';
    const st=document.createElement('h3'); st.textContent=`${s.emoji} ${s.title}`;
    const p=document.createElement('p'); p.textContent=s.body;
    card.append(st,p); body.appendChild(card);
  });
  const footer=document.createElement('div'); footer.className='guide-footer';
  const ok=document.createElement('button'); ok.className='primary'; ok.type='button'; ok.textContent=t('close'); ok.addEventListener('click', closeGuideModal);
  footer.appendChild(ok);
  box.append(header, body, footer);
  overlay.appendChild(box);
  overlay.addEventListener('click', ev=>{ if(ev.target===overlay) closeGuideModal(); });
  document.body.appendChild(overlay);
}

function closeGuideModal(){
  const old=document.getElementById('guideOverlay');
  if(old) old.remove();
}

init();
