// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
import { UserState } from '/@/store/modules/user/types';
// import axios from 'axios';
enum URL {
    home = '/myapp/vod/home',
    list = '/myapp/vod/list',
    detail = '/myapp/vod/detail',
    recommend = '/myapp/vod/recommend'
}

const homeApi = async (params: any) => get<any>({ url: URL.home, params: params, data: {}, headers: {} });
const listApi = async (params: any) => get<any>({ url: URL.list, params: params, data: {}, headers: {} });
const detailApi = async (params: any) => get<any>({ url: URL.detail, params: params, headers: {} });
const recommendApi = async (params: any) => get<any>({ url: URL.recommend, params: params, headers: {} });

export { listApi, homeApi, detailApi, recommendApi };
