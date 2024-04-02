export interface RouteDay {
    dayIndex: number;
    morning: string; // Что делать утром
    day: string; // Что делать днем
    evening: string; // Что делать вечером
    startLocation: {name: string, latitude: number; longitude: number }; // Начальные координаты
    endLocation: {name: string, latitude: number; longitude: number }; // Конечные координаты
    travelTime: number; // Время в пути в минутах от начальной точки
    placesLinks: { [place: string]: string }; // Ссылки с подписями мест
}
export interface RouteSettings {
    rating: number; // Рейтинг маршрута
    isAuthorized: boolean, // Авторизован?
    daysCount: number,
}
export interface mainRoute {
    days: RouteDay[]; // Дни маршрута
    settings: RouteSettings;
}

// Пример объекта маршрута
export const testRoute: mainRoute = {
    days: [
        {
            dayIndex: 1,
            morning: 'Посетить достопримечательность А Посетить достопримечательность А А Посетить достопримечательность А А Посетить достопримечательность А А Посетить достопримечательность А А Посетить достопримечательность А А Посетить достопримечательность А А Посетить достопримечательность А',
            day: 'Прогуляться в парке Прогуляться в парке Прогуляться в парке Прогуляться в парке Прогуляться в парке Прогуляться в парке Прогуляться в парке',
            evening: 'Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане Поужинать в ресторане ',
            startLocation: {name: 'London', latitude: 51.5074, longitude: 0.1278 }, // Лондон
            endLocation: {name: 'London', latitude: 51.5074, longitude: 0.1278 }, // Лондон
            travelTime: 30, // 30 минут
            placesLinks: {
                'Достопримечательность А': 'https://example.com/attractionA',
                'Парк': 'https://example.com/park',
                'Ресторан': 'https://example.com/restaurant'
            }
        },
        {
            dayIndex: 2,
            morning: 'Посетить музей',
            day: 'Заняться активным отдыхом',
            evening: 'Посетить театр',
            startLocation: {name: 'Paris', latitude: 48.8566, longitude: 2.3522 }, // Париж
            endLocation: {name: 'Paris', latitude: 48.8566, longitude: 2.3522 }, // Париж
            travelTime: 45, // 45 минут
            placesLinks: {
                'Музей': 'https://example.com/museum',
                'Парк для активного отдыха': 'https://example.com/activityPark',
                'Театр': 'https://example.com/theatre'
            }
        },{
            dayIndex: 2,
            morning: 'Посетить музей',
            day: 'Заняться активным отдыхом',
            evening: 'Посетить театр',
            startLocation: { name: 'Paris',latitude: 48.8566, longitude: 2.3522 }, // Париж
            endLocation: { name: 'Paris', latitude: 48.8566, longitude: 2.3522 }, // Париж
            travelTime: 45, // 45 минут
            placesLinks: {
                'Музей': 'https://example.com/museum',
                'Парк для активного отдыха': 'https://example.com/activityPark',
                'Театр': 'https://example.com/theatre'
            }
        },{
            dayIndex: 2,
            morning: 'Посетить музей',
            day: 'Заняться активным отдыхом',
            evening: 'Посетить театр',
            startLocation: {name: 'Paris', latitude: 48.8566, longitude: 2.3522 }, // Париж
            endLocation: {name: 'Paris', latitude: 48.8566, longitude: 2.3522 }, // Париж
            travelTime: 45, // 45 минут
            placesLinks: {
                'Музей': 'https://example.com/museum',
                'Парк для активного отдыха': 'https://example.com/activityPark',
                'Театр': 'https://example.com/theatre'
            }
        }
    ],
    settings: {
        rating: 4.5,
        isAuthorized: true,
        daysCount: 4,
    }
};
