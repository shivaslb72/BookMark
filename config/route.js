const express = require("express");
const router = express();

const BookmarkController = require("../app/controller/BookmarkController");
const BookingController = require("../app/controller/BookingController");

router.get("/bookmarks", BookmarkController.list);
router.post("/bookmarks", BookmarkController.create);
router.get("/bookmarks/:id", BookmarkController.show);
router.delete("/bookmarks/:id", BookmarkController.destroy);
router.put("/bookmarks/:id", BookmarkController.update);

router.post("/bookings", BookingController.create);

module.exports = router;
