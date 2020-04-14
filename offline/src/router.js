const router = new Router({
    mode: "history",
    routes: [
    //   {
    //     path: "/",
    //     component: App
    //   },
      {
        path: "/playerCtrl/:id",
        component: PlayerNameControlerComponent
      },
    ]
});