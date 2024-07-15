const products = document.querySelectorAll(".product");
//for each product in products
products.forEach((product) => {
  tippy(product, {
    trigger: "mouseenter focus",
    content: "last four digits is " + product.value,
    placement: "right",
    arrow: true,
    hideOnClick: true,
  });

  //   product.addEventListener("mouseenter", () => {
  //     tippy(product, {
  //       content: "last four digits is " + product.value,
  //       placement: "right",
  //       arrow: true,
  //       hideOnClick: true,
  //     });
  //   });
});
