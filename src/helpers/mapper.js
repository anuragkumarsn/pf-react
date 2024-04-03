import { getElement } from "./getElement";

export const mapper = (cn, scrollTo, initPos, cb) => {
  function leftScroll() {
    const element = getElement(cn);
    var scroll_position = window?.scrollY;
    var document_height =
      document.documentElement.scrollHeight - window?.innerHeight;
    console.log("window?.innerHeight : ", window?.innerHeight / 2);
    var window_width = window?.innerWidth;
    var card_width = element?.offsetWidth;
    var max_left_position = window_width - card_width;
    var object_position =
      (max_left_position * scroll_position) / document_height;

    var mid_size_indicator = (0 + max_left_position) / 2;

    var rotation_degrees = (scroll_position / document_height) * 360;
    cb(object_position, mid_size_indicator, rotation_degrees);
  }
  function bottomScroll() {
    const element = getElement(cn);
    var scroll_position = window?.scrollY;
    var document_height =
      document.documentElement.scrollHeight - window?.innerHeight;
    var window_height = window?.innerHeight;
    var card_height = element?.offsetHeight - 600;
    var max_top_position = window_height - card_height;
    var initial_top_position = (window_height - card_height) / 2;
    var object_position =
      initPos === "center"
        ? initial_top_position -
          (scroll_position * (initial_top_position - max_top_position)) /
            document_height
        : ((max_top_position * scroll_position) / document_height) * 8;
    var rotation_degrees = (scroll_position / document_height) * 360;
    cb(object_position, rotation_degrees); // document.getElementById(cn).style.top = object_position + 'px';
  }
  const scrollingFunction =
    scrollTo === "left"
      ? leftScroll
      : scrollTo === "top"
      ? bottomScroll
      : () => {};
  window.addEventListener("scroll", scrollingFunction);

  return () => {
    window.removeEventListener("scroll", scrollingFunction);
  };
};
