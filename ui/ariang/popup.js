const _ariaNgElement = document.getElementById('AriaNG');
const _applyZoom = (zoomFactor) => {
    if (_ariaNgElement && zoomFactor > 0 && zoomFactor != 1) {
        const adjustedWidth = Math.floor(_ariaNgElement.offsetWidth / zoomFactor);
        const adjustedHeight = Math.floor(_ariaNgElement.offsetHeight / zoomFactor);
        _ariaNgElement.style.width = adjustedWidth + 'px';
        _ariaNgElement.style.height = adjustedHeight + 'px';
    }
    if (_ariaNgElement) _ariaNgElement.src += window.location.hash;
};
if (chrome?.tabs?.getZoomSettings) {
    chrome.tabs.getZoomSettings(zoomSettings => {
        _applyZoom(zoomSettings.defaultZoomFactor || 1);
    });
} else if (chrome?.tabs?.getZoom) {
    chrome.tabs.getZoom().then(zoom => _applyZoom(zoom)).catch(() => _applyZoom(1));
} else {
    _applyZoom(1);
}
