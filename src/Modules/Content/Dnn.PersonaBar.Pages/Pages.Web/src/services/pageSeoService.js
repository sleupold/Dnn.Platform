import Api from "./api";
const portalAliasUsageType = {
    Default: 0,
    ChildPagesInherit: 1,
    ChildPagesDoNotInherit: 2,
    InheritedFromParent: 3
};

const toBackEndUrl = function (url, primaryAliasId) {
    const id = url.id  ? url.id : -1;
    let siteAliasUsage = "";
    if (url.siteAlias.Key === primaryAliasId) {
        siteAliasUsage = portalAliasUsageType.Default;
    } else if (url.siteAliasUsage === portalAliasUsageType.Default) {
        siteAliasUsage = portalAliasUsageType.ChildPagesDoNotInherit;
    } else {
        siteAliasUsage = url.siteAliasUsage;
    }
    
    return {
        Id: id,
        SiteAliasKey: url.siteAlias.Key,
        Path: url.path,
        QueryString: url.queryString,
        LocaleKey: url.locale.Key,
        StatusCodeKey: url.statusCode.Key,
        SiteAliasUsage: siteAliasUsage,
        IsSystem: false
    };
};

const PageService = function () {

    let api = null;
    function getApi() {
        if (api === null) {
            api = new Api(window.dnn.pages.apiController);
        }        
        return api;
    }

    const add = function (url, primaryAliasId) {
        const api = getApi();
        return api.post("CreateCustomUrl", toBackEndUrl(url, primaryAliasId));
    };

    return {
        add: add
    };
};

const pageService = PageService();
export default pageService;
