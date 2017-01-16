"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ScoreboardComponent = (function () {
    function ScoreboardComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.players = params["players"];
        });
    }
    ScoreboardComponent = __decorate([
        core_1.Component({
            selector: "scoreboard",
            templateUrl: "./views/scoreboard/scoreboard.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());
exports.ScoreboardComponent = ScoreboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NvcmVib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY29yZWJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBT2pEO0lBR0ksNkJBQTJCLEtBQXFCO1FBSHBELGlCQVNDO1FBTjhCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQU07WUFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBWkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLG9DQUFvQztTQUNwRCxDQUFDOzsyQkFBQTtJQVdGLDBCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSwyQkFBbUIsc0JBUy9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwic2NvcmVib2FyZFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3cy9zY29yZWJvYXJkL3Njb3JlYm9hcmQuaHRtbFwiLFxyXG59KVxyXG4gICAgXHJcbmV4cG9ydCBjbGFzcyBTY29yZWJvYXJkQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBwbGF5ZXJzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnMgPSBwYXJhbXNbXCJwbGF5ZXJzXCJdO1xyXG4gICAgICAgIH0pOyAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIl19