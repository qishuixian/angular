import { Injectable } from '@angular/core';
import { Http } from "@angular/http";  //系统提供  包含ajax
import { Observable } from "rxjs/Rx";  //订阅观察 处理ajax数据的

const CONTACT_URL = '/assets/contacts.json';//调用数据路径
let _contacts;
@Injectable()
export class ContactService {

	constructor(private http:Http) { }
    getContactsData(opts?: any):Observable<any> {
    	let source;
	    if (Array.isArray(_contacts)) {
	       source = Observable.of(_contacts);
	      return source.map(data => this.dataInit(data, opts));
	    } else {
	    	return this.http.get(CONTACT_URL) //请求的路径
		   .map(data => this.dataInit(data, opts))   //处理ajax数据
	  	   .catch(this.handleError); //处理异常的
	  	}
    }
    getContactById(id) {
	    id = parseInt(id, 10);
	    return this.getContactsData({ id: id });
	}

	getCollections() { //获取收藏
	    return this.getContactsData({ collection: 1 });
	}
	addContact(obj: any = {}) {  //添加
       if (!Array.isArray(_contacts)) {
	      console.error('请刷新重试');
	      return;
	    }
	    obj.id = _contacts.length + 1;
	    _contacts.push(obj);
    }
    editContact(obj: any) { //编辑
	    if (!obj) return;
	    if (!Array.isArray(_contacts)) {
	      console.error('请刷新重试');
	      return;
	    }
	    let idx = -1;
	    for (const one of _contacts) {
	      idx++;
	      if (one.id === obj.id) {
	        _contacts[idx] = one;
	      }
	    }
	}

	collectContact(obj: any = {}) { //收藏
	    if (!Array.isArray(_contacts)) {
	      console.error('请刷新重试');
	      return;
	    }
	    for (const one of _contacts) {
	      if (one.id === obj.id) {
	        one.collection ^= 1;
	        break;
	      }
	    }
	}
	dataInit(res, opts){  //返回的数据
		let data;
		if(!Array.isArray(res)){
			data = res.json();
		}else{
			data=res;
		}
		if (!Array.isArray(_contacts)) {
	        _contacts=data; 
	    }
	  	if (!opts) return data;
		if (opts.id) {
		    for (let i = 0; i < data.length; i++) {
		        if (data[i].id === opts.id) {
		          data = data[i];
		        }
		    }
		}
	    if (opts.collection) {
	      const temp: any = [];
	      for (let i = 0; i < data.length; i++) {
	        if (data[i].collection === opts.collection) {
	          temp.push(data[i]);
	        }
	      }
	      data = temp;
	    }
		return data;
	}
	handleError(error:any):Observable<any>{  //报错
	  	const errMsg = error.message;
	  	return Observable.throw(errMsg);
	}
}
