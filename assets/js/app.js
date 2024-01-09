import { get } from "./request.js";

const dashboard = function () {

    // Variables
    const dailyBtn = document.querySelector('.js-daily');
    const weeklyBtn = document.querySelector('.js-weekly');
    const monthlyBtn = document.querySelector('.js-monthly');
    const dailySpan = document.querySelector('.js-daily-span');
    const weeklySpan = document.querySelector('.js-weekly-span');
    const monthlySpan = document.querySelector('.js-monthly-span');
    const items = document.querySelector('.js-items');
    let data = [];

    // Event Listeners

    const _eventListeners = function () {
        dailyBtn.addEventListener('click', _dailyUI)
        weeklyBtn.addEventListener('click', _weeklyUI)
        monthlyBtn.addEventListener('click', _monthlyUI)
    }

    const _dailyUI = function () {
        if(dailySpan.classList == 'js-daily-span active') {       
            _renderDaily(items, data);
        } else {
            _removeClass(weeklySpan);
            _removeClass(monthlySpan);
            _addClass(dailySpan);
            _renderDaily(items, data);
        }
    }
    const _weeklyUI = function () {
        if(weeklySpan.classList == 'js-weekly-span active') { 
            _renderWeekly(items, data);
        } else {
            _removeClass(dailySpan);
            _removeClass(monthlySpan);
            _addClass(weeklySpan);
            _renderWeekly(items, data);
        }
    }
    const _monthlyUI = function () {
        if(monthlySpan.classList == 'js-weekly-span active') { 
            _renderMonthly(items, data);
        } else {
            _removeClass(dailySpan);
            _removeClass(weeklySpan);
            _addClass(monthlySpan);
            _renderMonthly(items, data);
        }
    }

    const _removeClass = function (element) {
        element.classList.remove('active');
    }
    const _addClass = function (element) {
        element.classList.add('active');
    }
    const _renderDaily = function (element, data) {
        element.innerHTML = '';
        element.innerHTML = `
                <div class="item work">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[0].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[0].timeframes.daily.current} hrs</h3>
                    <span>Last Week - ${data[0].timeframes.daily.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item play">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[1].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[1].timeframes.daily.current} hrs</h3>
                    <span>Last Week - ${data[1].timeframes.daily.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item study">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[2].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[2].timeframes.daily.current} hrs</h3>
                    <span>Last Week - ${data[2].timeframes.daily.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item exercise">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[3].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[3].timeframes.daily.current} hrs</h3>
                    <span>Last Week - ${data[3].timeframes.daily.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item social">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[4].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[4].timeframes.daily.current} hrs</h3>
                    <span>Last Week - ${data[4].timeframes.daily.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item self-care">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[5].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[5].timeframes.daily.current} hrs</h3>
                    <span>Last Week - ${data[5].timeframes.daily.previous} hrs</span>
                </div>
                </div>
            </div>
        `
    }
    const _renderMonthly = function (element, data) {
        element.innerHTML = '';
        element.innerHTML = `
                <div class="item work">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[0].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[0].timeframes.monthly.current} hrs</h3>
                    <span>Last Week - ${data[0].timeframes.monthly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item play">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[1].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[1].timeframes.monthly.current} hrs</h3>
                    <span>Last Week - ${data[1].timeframes.monthly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item study">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[2].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[2].timeframes.monthly.current} hrs</h3>
                    <span>Last Week - ${data[2].timeframes.monthly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item exercise">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[3].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[3].timeframes.monthly.current} hrs</h3>
                    <span>Last Week - ${data[3].timeframes.monthly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item social">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[4].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[4].timeframes.monthly.current} hrs</h3>
                    <span>Last Week - ${data[4].timeframes.monthly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item self-care">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[5].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[5].timeframes.monthly.current} hrs</h3>
                    <span>Last Week - ${data[5].timeframes.monthly.previous} hrs</span>
                </div>
                </div>
            </div>
        `
    }
    const _renderWeekly = function (element, data) {
        element.innerHTML = '';
        element.innerHTML = `
                <div class="item work">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[0].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[0].timeframes.weekly.current} hrs</h3>
                    <span>Last Week - ${data[0].timeframes.weekly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item play">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[1].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[1].timeframes.weekly.current} hrs</h3>
                    <span>Last Week - ${data[1].timeframes.weekly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item study">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[2].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[2].timeframes.weekly.current} hrs</h3>
                    <span>Last Week - ${data[2].timeframes.weekly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item exercise">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[3].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[3].timeframes.weekly.current} hrs</h3>
                    <span>Last Week - ${data[3].timeframes.weekly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item social">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[4].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[4].timeframes.weekly.current} hrs</h3>
                    <span>Last Week - ${data[4].timeframes.weekly.previous} hrs</span>
                </div>
                </div>
            </div>
            <div class="item self-care">
                <div class="item-description">
                <div class="item-header">
                    <h4>${data[5].title}</h4>
                    <div class="menu-wrapper">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div class="item-body">
                    <h3>${data[5].timeframes.weekly.current} hrs</h3>
                    <span>Last Week - ${data[5].timeframes.weekly.previous} hrs</span>
                </div>
                </div>
            </div>
        `
    }

    const _getData = function () {
        get('http://localhost:3000/timetrack').then((datas) => {
            data = datas;
        });
    }


    return {
        init: function () {
            _eventListeners();
            _getData();
        }
    }
}();

document.addEventListener("DOMContentLoaded", function () {
    dashboard.init();
  });