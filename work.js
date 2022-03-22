const baseappData = {
    delimiters: ['((', '))'],
    data() {
        return {
            pages: ["component", "computed", "theme", "api"],
            selectedPage: 0,
            selectedTheme: "light",
            theme: ["light", "dark"],
            computedTxt: "",
            computedNum: 0,
            formValue: {
                name: "",
                lunch: "",
                fruit: null,
            },
            memberList: [],
        }
    },
    methods: {
        HTTPreq: function (method, url, data, headers, callback_success, callback_fail) {
            var Xreq = new XMLHttpRequest();
            Xreq.open(method, url);
            for (var i in headers) {
                Xreq.setRequestHeader(i, headers[i]);
            }

            Xreq.onreadystatechange = function () {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    callback_success(Xreq.responseText);
                }
                else if (this.status !== 200) {
                    callback_fail(Xreq.responseText);
                }
            }
            Xreq.send(data);
        },
        getCookie: function (name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        },
        toJSON: function (arg, option) {
            arg = arg.replace(RegExp(option, 'g'),"")
            return JSON.parse(arg.replace(/\&amp;/g, "&").replace(/\&\#39;/g, "\"").replace(/\'/g, "\""));
        },
        getMemberList: function(){
            this.HTTPreq(
                "GET",
                "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8",
                "",
                {},
                (res) => {
                    res = this.toJSON(res);
                    this.memberList = res;
                },
                (res) => {
                    console.log(res);
                },
            )
        }
    },
    mounted: function () {
    },
    created: function () {
    },
    updated: function () {
    },
    beforeUpdate: function () {
    }
};

const baseapp = Vue.createApp(baseappData);