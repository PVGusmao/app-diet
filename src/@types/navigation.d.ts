import Stats from "src/interface/stats.interface";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        statistic: Stats;
      };
      newMeal: undefined;
      feedbackCreation: undefined;
      detailsScreen: {
        item: Stats;
      };
    }
  }
} 