const CONF = {
    actionKitPageShortName: 'stop-fueling-war-yemen',
    actionKitPageId: 2172,
    prettyCampaignName: 'Stop Fueling War in Yemen',
    callCampaign: 'stop-fueling-war-yemen',
    callPowerId: 16
};
const URLS = {
    actionKit: 'https://act.demandprogress.org/act/',
    count: 'https://act.demandprogress.org/progress/' + CONF.actionKitPageShortName + '?callback=onFetchSignatureCounts',
    facebook: 'https://www.facebook.com/sharer.php?u=',
    twitter:  'https://twitter.com/intent/tweet?text=',
    feedback: 'https://dp-feedback-tool.herokuapp.com/api/v1/feedback?'
};

export { CONF, URLS };