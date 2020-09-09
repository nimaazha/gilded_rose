const { Store, Item, Items } = require("../src/gilded_rose");

describe("gilded rose", function () {
    describe("item creation test", function () {
        it("should be default", function () {
            const item = new Item("default", 0, 0);
            expect(item.name).toBe("default");
        });
    });

    describe("store creation test", function () {
        it("updated item should be foo", function () {
            const gildedRose = new Store([new Item("foo", 0, 0)]);
            const items = gildedRose.updateQuality();
            expect(items[0].name).toBe("foo");
        });
    });

    describe('general item', function () {
        it('should not decrease quality value for general item when sellIn and quality is 0', function () {
            const gildedRose = new Store([new Item('general', 0, 0)]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(0);
        });

        it('should decrease quality value for general item by 2 when sellIn is <= 0', function () {
            const gildedRose = new Store([new Item('default', 0, 9)]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(7);
        });

        it('should decrease quality for general item by 1', function () {
            const gildedRose = new Store([new Item('default', 5, 9)]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(8);
        });
    });


    describe('+5 Dexterity Vest item', function () {

        it('should decrease quality for stored item by 1', function () {
            const gildedRose = new Store([Items[0]]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(19);
        });
    });

    describe('Aged Brie item', function () {
        it('should increase quality for stored item by 1', function () {
            const gildedRose = new Store([Items[1]]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(1);
        });

        it('should not increase quality for any Aged Brie item over 50', function () {
            const gildedRose = new Store([new Item('Aged Brie', 5, 50)]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(50);
        });

        it('should never increase quality for any Aged Brie item over 50 and sellIn < 0', function () {
            const gildedRose = new Store([new Item('Aged Brie', -1, 50)]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(50);
        });

        it('should increase quality for any Aged Brie item when it expires by 2', function () {
            const gildedRose = new Store([new Item('Aged Brie', -1, 41)]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(43);
        });

    });

    describe('Elixir of the Mongoose item', function () {

        it('should decrease quality for stored item by 1', function () {
            const gildedRose = new Store([Items[2]]);
            const items = gildedRose.updateQuality();

            expect(items[0].quality).toBe(6);
        });
    });

});