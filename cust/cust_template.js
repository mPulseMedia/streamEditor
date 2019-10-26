import * as Constant from 'constant';
import Config        from 'config';
import $             from 'jquery';
import Utl           from 'utl';
import Url           from 'url';
import Html_Data     from 'html_data';
import Dom           from 'dom';

var _private = {
    cust_name_get_YOUR_NAME: function () {
        return 'cust_YOUR_NAME';
    },
    
    cust_url_is_YOUR_NAME: function () {
        if (Url.url_contains('YOUR_DOMAIN.com')) {
            return true;
        }
        return false;
    },
    cust_init_YOUR_NAME: function (callback) {
        if (this.cust_url_is_YOUR_NAME()) {
            Config.config_set('player_container_selector', '#player-container');
            Config.config_set('mount_level_up', 1);
            if (typeof callback === 'function') {
                callback(this.cust_name_get_YOUR_NAME());
            }
            return true;
        }
    },
    cust_asset_prep_YOUR_NAME: function (player_id) {
        // from each url, provide just what's needed or remove what should be ignored 
        var asset_url = location.href.split('&')[0];
        
        // from url or dom, provide a consistent and unique id for videos on YOUR_DOMAIN
        var asset_resource_id = Url.url_param_get_byName('v', Url.url_current_get(), true);
        
        // if possible, provide a thumbnail for the whole video, and ideally for each second within the video
        var asset_thumb = 'https://i.ytimg.com/vi/' + asset_resource_id + '/default.jpg';
        
        // from the browser tab name, url or dome, provide a name for 
        var asset_title = $('.ytp-title-text').text().trim();
        
        if (Constant.debug_cust) {
            console.log('cust_asset_prep_YOUR_NAME', player_id, asset_url, asset_resource_id, asset_thumb, asset_title);
        }
        Html_Data.html_data_set(player_id, 'asset_url', asset_url);
        Html_Data.html_data_set(player_id, 'asset_host', 'host_YOUR_NAME');
        Html_Data.html_data_set(player_id, 'asset_resource_id', asset_resource_id);
        Html_Data.html_data_set(player_id, 'asset_thumb', asset_thumb);
        Html_Data.html_data_set(player_id, 'asset_title', asset_title);
        Html_Data.html_data_set(player_id, 'cust_name', this.cust_name_get_YOUR_NAME());
    }
};
export default class Cust_YOUR_NAME {
    static cust_name_get() {
        return _private.cust_name_get_YOUR_NAME();
    }
    static cust_init(callback) {
        return _private.cust_init_YOUR_NAME(callback);
    }
    static cust_asset_prep(player_id) {
        _private.cust_asset_prep_YOUR_NAME(player_id);
    }
};
