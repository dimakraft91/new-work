if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    ! function() {
        var e = "v4";
        try {
            var i = new URLSearchParams(window.location.search),
                t = i.get("playerVersion");
            t && (e = t)
        } catch (n) {
            console.error("Error getting version from search params", n)
        }
        if (!document.getElementById("vturb-smartplayer-js")) {
            var a = document.createElement("script"),
                M = "js/smartplayer.js"; // Заменено на локальный путь
            try {
                var r = i.get("playerHost");
                r && (M = decodeURIComponent(r))
            } catch (n) {
                console.error("error getting playerHost from search params", n)
            }
            a.src = M, a.id = "vturb-smartplayer-js", a.fetchPriority = "high", document.head.appendChild(a)
        }
    }(),
    function() {
        var e = document.getElementById("vid-6967e06a16e3821ec3e1f275"),
            i = function(e) {
                e.id = "vid-6967e06a16e3821ec3e1f275"
            };
        e ? 0 === e.children.length && i(e) : (i(e = document.createElement("vturb-smartplayer")), "head" === document.currentScript.parentNode.tagName.toLowerCase() ? document.body.insertBefore(e, document.body.firstChild) : document.currentScript.parentNode.insertBefore(e, document.currentScript))
    }(),
    function(e, i) {
        e._plt = e._plt || (i && i.timeOrigin ? i.timeOrigin + i.now() : Date.now() - 60)
    }(window, performance),
    function() {
        var e = document.getElementById("vid-6967e06a16e3821ec3e1f275");
        e.style.maxWidth = window.innerWidth <= 450 ? "100%" : "400px", e.start = function(i) {
            e.setup ? e.setup(i) : this._setup = i
        };
        var i = {
                "callActions": {
                    "active": !1,
                    "version": 1,
                    "items": []
                },
                "cdn": "",
                "conversion": [],
                "embedVersion": 1768989782,
                "fakeBar": {
                    "active": !0,
                    "alpha": 2,
                    "height": 10,
                    "color": "#0087ff"
                },
                "headlines": {
                    "active": !1,
                    "items": []
                },
                "id": "6967e06a16e3821ec3e1f275",
                "language": null,
                "minihooks": {
                    "active": !1,
                    "items": []
                },
                "oid": "fa97b555-27d9-4eec-922b-b73646fd703d",
                "pixels": {
                    "active": !1,
                    "items": []
                },
                "playback": {
                    "active": !0,
                    "actionAfterFinish": null,
                    "scrollToActionIn": 492
                },
                "playerInit": {
                    "aspectRatio": 133.32999999999998,
                    "thumbnailKey": "img/69662bd411e8bd00014dd4e5.gif",
                    "verticalVideo": !0,
                    "customId": null
                },
                "resume": {
                    "active": !1,
                    "model": "default",
                    "backgroundColor": "#1e11e4",
                    "disablePause": !1,
                    "foregroundColor": "#FFFFFF",
                    "play": "Continuer la lecture ? ",
                    "replay": "Recommencer ? ",
                    "title": "Vous avez d\xe9j\xe0 regarder cette vid\xe9o"
                },
                "secure": !1,
                "smartAutoPlay": {
                    "active": !0,
                    "items": [{
                        "id": "smart_autoplay_6967e06a16e3821ec3e1f275_1_27c96b53",
                        "name": "DE1",
                        "number": 1,
                        "version": "2",
                        "startAt": 0,
                        "endAt": 307,
                        "animation": {
                            "animation": "pulse",
                            "properties": {
                                "speed": 3
                            }
                        },
                        "elements": [{
                            "height": 441.89992,
                            "id": "6970a2ab521058214cad2b67",
                            "opacity": 1,
                            "order": 1,
                            "rotation": 0,
                            "type": "box",
                            "width": 782.946,
                            "x": 148.500297000297,
                            "y": 498.2186430773305,
                            "transformOrigin": null,
                            "properties": {
                                "border": {
                                    "color": "#FFFFFF",
                                    "size": 2.194,
                                    "type": "solid"
                                },
                                "color": "rgba(0, 27, 89, 0.86)",
                                "radius": 8.944
                            }
                        }, {
                            "height": 76.0725,
                            "id": "6970a2ab521058214cad2b68",
                            "opacity": 1,
                            "order": 2,
                            "rotation": 0,
                            "type": "text",
                            "width": 782.946,
                            "x": 148.500297000297,
                            "y": 539.0641192606022,
                            "transformOrigin": null,
                            "properties": {
                                "align": "center",
                                "color": "#FFFFFF",
                                "size": 48.254283,
                                "value": "Die Video-Wiedergabe l\xe4uft!",
                                "weight": 700
                            }
                        }, {
                            "height": 76.0725,
                            "id": "6970a2ab521058214cad2b69",
                            "opacity": 1,
                            "order": 3,
                            "rotation": 0,
                            "type": "text",
                            "width": 782.946,
                            "x": 148.500297000297,
                            "y": 860.3643127689868,
                            "transformOrigin": null,
                            "properties": {
                                "align": "center",
                                "color": "#FFFFFF",
                                "size": 48.254283,
                                "value": "Jetzt anh\xf6ren",
                                "weight": 700
                            }
                        }, {
                            "height": 173.88000000000002,
                            "id": "6970a2ab521058214cad2b6a",
                            "opacity": 1,
                            "order": 4,
                            "rotation": 0,
                            "type": "image",
                            "width": 246.437892,
                            "x": 417.27166347166354,
                            "y": 641.7767926481672,
                            "transformOrigin": null,
                            "properties": {
                                "alt": "Your video has started",
                                "src": "data:image/svg+xml;base64,CiAgPHN2ZyB2ZXJzaW9uPSIxLjEiIGZpbGw9IiNGRkZGRkYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgICAgIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDYuNzVweCIgaGVpZ2h0PSIzMi41NjNweCIgdmlld0JveD0iNy45OTkgOS4wNjIgNDYuNzUgMzIuNTYzIgogICAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICA+CiAgICA8c3R5bGU+CiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBCTElOSyB7CiAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgICAgMzMlIHsgb3BhY2l0eTogMTsgfQogICAgICAgIDY2JSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAxMDAlIHsgb3BhY2l0eTogMDsgfQogICAgICB9CgogICAgICBAa2V5ZnJhbWVzIEJMSU5LIHsKICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICAzMyUgeyBvcGFjaXR5OiAxOyB9CiAgICAgICAgNjYlIHsgb3BhY2l0eTogMTsgfQogICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgIH0KCiAgICAgIC5hbmltYXRpb24gLmJsaW5rXzEgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlOwogICAgICAgIG9wYWNpdHk6IDA7CiAgICAgIH0KCiAgICAgIC5hbmltYXRpb24gLmJsaW5rXzIgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgb3BhY2l0eTogMDsKICAgICAgfQoKICAgICAgLmFuaW1hdGlvbiAuYmxpbmtfMyB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICBvcGFjaXR5OiAwOwogICAgICB9CgogICAgICAuYW5pbWF0aW9uIC5zbWFydHBsYXktc3ZnLWNvbG9yIHsKICAgICAgICBmaWxsOiAnI0ZGRkZGRicgIWltcG9ydGFudDsKICAgICAgfQoKICAgICAgLmFuaW1hdGlvbi5hZGp1c3RhYmxlIHsKICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAnI0ZGRkZGRic7CiAgICAgIH0KICAgIDwvc3R5bGU+CgogICAgPGcgY2xhc3M9ImFkanVzdGFibGUgZmcgYW5pbWF0aW9uIj4KICAgICAgPHBhdGggY2xhc3M9InNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik01My4yNDksMzkuNjE2Yy0wLjE4NiwwLTAuMzcxLTAuMDUxLTAuNTM3LTAuMTU3bC00My41LTI3Ljc1Yy0wLjQ2Ni0wLjI5Ny0wLjYwMy0wLjkxNi0wLjMwNi0xLjM4MWMwLjI5OC0wLjQ2NiwwLjkxNy0wLjYwMSwxLjM4MS0wLjMwNmw0My41LDI3Ljc1YzAuNDY3LDAuMjk3LDAuNjA0LDAuOTE2LDAuMzA3LDEuMzgxQzUzLjkwMSwzOS40NTMsNTMuNTc5LDM5LjYxNiw1My4yNDksMzkuNjE2eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDguODk2LDMzLjQ2N2wxLjY5OSwxLjA4NWMzLjQ5Ny03Ljc5MSwyLjA3My0xNy4yNzEtNC4zMTMtMjMuNjU5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0QzUwLjU4MSwxOC4wMTksNTEuOTEzLDI2LjQ2Myw0OC44OTYsMzMuNDY3eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDYuOTI2LDM2Ljk1NmMtMC42MTIsMC44NjMtMS4yODYsMS42OTUtMi4wNTksMi40NjljLTAuMzkyLDAuMzkxLTAuMzkyLDEuMDIzLDAsMS40MTRjMC4xOTQsMC4xOTUsMC40NSwwLjI5MywwLjcwNywwLjI5M2MwLjI1NiwwLDAuNTEyLTAuMDk4LDAuNzA2LTAuMjkzYzAuODc4LTAuODc4LDEuNjQyLTEuODI0LDIuMzMzLTIuODA3TDQ2LjkyNiwzNi45NTZ6Ij48L3BhdGg+CiAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00Mi41NDMsMjkuNDE1bDEuNzc3LDEuMTM1YzEuNTQ1LTUuMzE1LDAuMjI5LTExLjI5My0zLjk1My0xNS40NzZjLTAuMzkyLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBjLTAuMzkyLDAuMzkxLTAuMzkyLDEuMDIzLDAsMS40MTRDNDIuNDU0LDE5Ljk4Nyw0My42MzksMjQuOTI1LDQyLjU0MywyOS40MTV6Ij48L3BhdGg+CiAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00MSwzMy4xNzRjLTAuNTYzLDAuOTQtMS4yMzUsMS44MzctMi4wNDcsMi42NDZjLTAuMzkxLDAuMzkyLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC45MTYtMC45MTQsMS42NzYtMS45MjQsMi4zMTctMi45ODRMNDEsMzMuMTc0eiI+PC9wYXRoPgogICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMSBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNMzUuNzcxLDI1LjA5NGwyLjAwMywxLjI3N2MwLjAxMi0wLjIwMywwLjAyOS0wLjQwNCwwLjAyOS0wLjYwOWMwLTMuMDc5LTEuMi01Ljk3NC0zLjM4MS04LjE1M2MtMC4zOTEtMC4zOTEtMS4wMjItMC4zOTEtMS40MTQsMGMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzNC42NTIsMjAuNjY2LDM1LjYxMywyMi44MDIsMzUuNzcxLDI1LjA5NHoiPjwvcGF0aD4KICAgICAgPHBhdGggY2xhc3M9ImJsaW5rXzEgc21hcnRwbGF5LXN2Zy1jb2xvciIgZD0iTTM1LjA4NCwyOS40MDFjLTAuNDc0LDEuMTQ1LTEuMTcyLDIuMTk3LTIuMDc2LDMuMWMtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNGMwLjE5NSwwLjE5NSwwLjQ1MSwwLjI5MywwLjcwNywwLjI5M2MwLjI1NywwLDAuNTEzLTAuMDk4LDAuNzA3LTAuMjkzYzEuMDA4LTEuMDA2LDEuNzk1LTIuMTcsMi4zNjEtMy40M0wzNS4wODQsMjkuNDAxeiI+PC9wYXRoPgogICAgICA8cG9seWdvbiBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgcG9pbnRzPSIyOC4xMjQsMjAuMjE1IDI4LjEyNCwxNC45OTEgMjQuNjM1LDE3Ljk5ICAiPjwvcG9seWdvbj4KICAgICAgPHBhdGggY2xhc3M9InNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0yMC45MjEsMjAuMzY2aC02LjQyM2MtMC41NTMsMC0xLDAuNTA4LTEsMS4xMzV2OC4yMjljMCwwLjYyNywwLjQ0NywxLjEzNSwxLDEuMTM1aDcuMzc1bDYuMjUsNS44NzVWMjQuOTZMMjAuOTIxLDIwLjM2NnoiPjwvcGF0aD4KICAgIDwvZz4KICA8L3N2Zz4K"
                            }
                        }]
                    }]
                },
                "style": {
                    "background": "#3e87c700",
                    "bigPlay": !1,
                    "captions": !1,
                    "foreground": "#FFFFFF",
                    "forward": !1,
                    "fullscreen": !1,
                    "progressBar": !1,
                    "rewind": !1,
                    "smallPlay": !0,
                    "speed": !1,
                    "videoTime": !1,
                    "volume": !1
                },
                "subtitles": {
                    "active": !1
                },
                "thumbsniper": {
                    "active": !0,
                    "items": [{
                        "id": "6967e57135a1be1be44dd208_333f1dde",
                        "image": "img/69662bd411e8bd00014dd4e5.gif",
                        "start": 0,
                        "finish": 740
                    }]
                },
                "turbo": {
                    "active": !1
                },
                "video": {
                    "cover": "img/69662bd411e8bd00014dd4e5.gif",
                    "id": "6967e05835a1be1be44dc809",
                    "aspectRatio": 1.3333,
                    "height": 1440,
                    "poster": "img/69662bd411e8bd00014dd4e5.gif",
                    "width": 1080,
                    "drm": !1,
                    "sources": [
                        {
                            "src": "../video.mp4",
                            "type": "video/mp4"
                        }
                    ]
                }
            },
            t = null,
            a = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),
            M = (a = a && a[0]) ? i : t || i;
        e.id !== "vid-" + M.id && (e.id = "vid-" + M.id, e.innerHTML = ""), e.style.display = "block", e.style.margin = "0 auto", e.style.width = "100%", 0 === e.children.length && ("6967e06a16e3821ec3e1f275" === M.id ? (e.innerHTML = "<div slot=\"preload\" class=\"preload preload--netflix\" style=\" position: relative; width: 100%; padding: 133.32999999999998% 0 0; z-index: 0;\"> <div id=\"loading_6967e06a16e3821ec3e1f275\" class=\"vt-loading-wrapper\"> <div class=\"vt-loading-android-spinner\"></div> <div class=\"vt-loading-percentage\">50%</div> </div> </div> <style>\n  [class^=\"vt-loading\"]{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;text-decoration:none}.vt-loading-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999;background-color:#000;color:#fff;display:flex!important;justify-content:center;align-items:center}.vt-loading-percentage{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:18px;font-weight:600}#smartplayer .vt-loading-percentage{content:\"99%\"}.vt-loading-android-spinner{width:80px;aspect-ratio:1;border-radius:50%;background:radial-gradient(farthest-side,#E50914 94%,#0000) top/8px 8px no-repeat,conic-gradient(#0000 30%,#E50914);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);animation:vt-loading-android-spinner-animation .75s infinite linear}@keyframes vt-loading-android-spinner-animation{100%{transform:rotate(1turn)}}\n</style>", function() {
            var e = document.querySelector(".vt-loading-percentage");
            if (e) var i = 50,
                t = setInterval(function() {
                    i++, e.textContent = i + "%", i >= 99 && clearInterval(t)
                }, 30)
        }()) : e.innerHTML = "<div class=\"thumbnail\" style=\" position: relative; width: 100%; padding: " + M.playerInit.aspectRatio + "% 0 0; z-index: 0;\"><img class=\"thumbnail-image\" src=\"img/69662bd411e8bd00014dd4e5.gif\" style=\" position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;  \" /></div>"), e.start(M)
    }();
    var a = b ? (c % d) : e[f];
}