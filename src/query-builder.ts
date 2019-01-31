export default class {
  public static selectMore(query: object, page?: Page, orders?: OrderBy[]) {
    return {
      query,
      page,
      orders,
    };
  }
  public static pager(index: number = 0, size: number = 20): Page {
    return {
      page_index: index,
      page_size: size,
    };
  }
  public static order(column: string, isDesc: boolean): OrderBy {
    return {
      column_name: column,
      desc: isDesc,
    };
  }
}

export interface Page {
  page_index: number;
  page_size: number;
}

export interface OrderBy {
  column_name: string;
  desc: boolean;
}
