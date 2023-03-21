// 날짜 포맷팅
import {format, register} from "timeago.js";
import KoLocale from 'timeago.js/lib/lang/ko'
register('ko', KoLocale)


export function formatAgo(date, lang = 'ko'){
    return  format(date, lang)
}