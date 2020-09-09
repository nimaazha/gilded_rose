const { Store, Item } = require("../src/gilded_rose");

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
    });
});