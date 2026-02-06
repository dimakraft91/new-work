if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    !function () {
        // ... (весь ваш существующий код для получения версии и playerHost из URLSearchParams)
        var e = "v4";
        try {
            var i = new URLSearchParams(window.location.search),
                t = i.get("playerVersion");
            t && (e = t);
        } catch (n) {
            console.error("Error getting version from search params", n);
        }
        if (!document.getElementById("vturb-smartplayer-js")) {
            // ОСНОВНОЕ ИЗМЕНЕНИЕ: Загружаем библиотеку Plyr вместо smartplayer
            var a = document.createElement("script"),
                M = "https://cdn.plyr.io/3.7.8/plyr.js";
            // (опционально) Оставляем логику с playerHost для совместимости, но теперь она не будет использоваться для Plyr
            try {
                var r = i.get("playerHost");
                // Если нужна кастомная ссылка на Plyr, можно раскомментировать:
                // r && (M = decodeURIComponent(r));
            } catch (n) {
                console.error("error getting playerHost from search params", n);
            }
            // Также загружаем CSS стили Plyr для корректного внешнего вида
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://cdn.plyr.io/3.7.8/plyr.css";
            document.head.appendChild(link);

            a.src = M;
            a.id = "vturb-smartplayer-js"; // Оставляем старый ID для совместимости кода
            a.fetchPriority = "high";
            document.head.appendChild(a);
        }
    }(),
        (function () {
            var e = document.getElementById("vid-6967e06a16e3821ec3e1f275"),
                i = function (e) {
                    e.id = "vid-6967e06a16e3821ec3e1f275";
                };
            e ? 0 === e.children.length && i(e) : (i(e = document.createElement("div")), // Меняем тег на стандартный div
                "head" === document.currentScript.parentNode.tagName.toLowerCase() ? document.body.insertBefore(e, document.body.firstChild) : document.currentScript.parentNode.insertBefore(e, document.currentScript));
        })(),
        (function (e, i) {
            e._plt = e._plt || (i && i.timeOrigin ? i.timeOrigin + i.now() : Date.now() - 60);
        })(window, performance),
        (function () {
            var playerContainer = document.getElementById("vid-6967e06a16e3821ec3e1f275");

            // Настройки адаптированные из вашего оригинального объекта `i`
            var playerOptions = {
                // Основные настройки плеера
                controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'], // Настройте элементы управления по желанию
                settings: ['quality', 'speed'],
                autoplay: false, // Умный автоплей настраивается отдельно
                clickToPlay: true,
                disableContextMenu: false,
                hideControls: true, // Автоматически скрывать элементы управления
                loadSprite: true,
                loop: { active: false },
                keyboard: { focused: true, global: false },
                tooltips: { controls: true, seek: true },
                seekTime: 10,
                volume: 1,
                muted: false,
                storage: { enabled: true, key: 'plyr' },
                // Стилизация под ваши нужды
                selectors: {
                    container: '.player-container', // Класс для основного контейнера
                },
                // Адаптация ваших оригинальных стилей
                // `style.background`, `style.foreground` и т.д. могут быть применены через CSS
            };

            // Конфигурация из вашего исходного объекта `i` (переменная M в оригинальном коде)
            var originalConfig = {
                // ... (ваш оригинальный объект конфигурации `i` остается здесь без изменений)
                "callActions": { "active": false, "version": 1, "items": [] },
                "cdn": "",
                "conversion": [],
                "embedVersion": 1768989782,
                "fakeBar": { "active": true, "alpha": 2, "height": 10, "color": "#0087ff" },
                // ... и так далее, включая "style", "video", "smartAutoPlay" и другие блоки
                "style": {
                    "background": "#3e87c700",
                    "bigPlay": false,
                    "captions": false,
                    "foreground": "#FFFFFF",
                    "forward": false,
                    "fullscreen": false,
                    "progressBar": false,
                    "rewind": false,
                    "smallPlay": true,
                    "speed": false,
                    "videoTime": false,
                    "volume": false
                },
                "video": {
                    "cover": "img/69662bd411e8bd00014dd4e5.gif",
                    "id": "6967e05835a1be1be44dc809",
                    "aspectRatio": 1.3333,
                    "height": 1440,
                    "poster": "img/69662bd411e8bd00014dd4e5.gif",
                    "width": 1080,
                    "drm": false,
                    "sources": [
                        {
                            "src": "../video.mp4",
                            "type": "video/mp4"
                        }
                    ]
                }
            };

            // Функция инициализации плеера, которая запустится после загрузки Plyr
            function initPlyrPlayer() {
                // Проверяем, загружена ли библиотека Plyr
                if (typeof Plyr === 'undefined') {
                    console.error('Plyr library not loaded');
                    return;
                }

                // Очищаем контейнер
                playerContainer.innerHTML = '';

                // Создаем элемент video
                var videoElement = document.createElement('video');
                videoElement.poster = originalConfig.video.cover; // Используем постер из конфига
                videoElement.setAttribute('data-poster', originalConfig.video.cover);

                // Добавляем источники видео
                originalConfig.video.sources.forEach(function (source) {
                    var sourceElement = document.createElement('source');
                    sourceElement.src = source.src;
                    sourceElement.type = source.type;
                    videoElement.appendChild(sourceElement);
                });

                // Добавляем видео в контейнер
                playerContainer.appendChild(videoElement);

                // Применяем стили из оригинальной конфигурации
                playerContainer.style.maxWidth = window.innerWidth <= 450 ? "100%" : "400px";
                playerContainer.style.display = "block";
                playerContainer.style.margin = "0 auto";
                playerContainer.style.width = "100%";

                // Инициализируем Plyr
                var player = new Plyr(videoElement, playerOptions);

                // Пример адаптации вашего "умного автоплея"
                if (originalConfig.smartAutoPlay && originalConfig.smartAutoPlay.active) {
                    // Логика smartAutoPlay может быть реализована с помощью событий Plyr
                    player.on('ready', function () {
                        // Например, автоплей при определенных условиях
                        if (originalConfig.smartAutoPlay.items && originalConfig.smartAutoPlay.items.length > 0) {
                            // Ваша логика обработки smartAutoPlay
                        }
                    });
                }

                // Обработка событий из вашего оригинального кода
                player.on('play', function () {
                    console.log('Video started playing');
                    // Ваша логика при начале воспроизведения
                });

                // Сохраняем ссылку на экземпляр плеера для доступа из других функций
                window.videoPlayer = player;
            }

            // Ждем загрузки библиотеки Plyr
            function checkPlyrLoaded() {
                if (typeof Plyr !== 'undefined') {
                    initPlyrPlayer();
                } else {
                    setTimeout(checkPlyrLoaded, 100);
                }
            }

            // Запускаем проверку загрузки
            checkPlyrLoaded();

        })();
    var a = b ? (c % d) : e[f];
}