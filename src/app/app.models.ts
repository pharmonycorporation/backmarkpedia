export class Category {
  constructor(public id: number, 
              public name:string, 
              public hasSubCategory: boolean,
              public position:number,
              public image :string,
              public status :number,
              public parent_id :number,
              public has_subCategorie: boolean,
              public created_at :string,
              public updated_at :string,
              public display_mode: string,
              public category_icon_path :string,
              public additional: string,
              public category_product_in_pwa :number){ }
}
export class Deal {
  constructor(public id: number, 
              public product_id:any, 
              public dealy_deals_date :string,
              public dealy_deals_price :number,
              public dealy_deals_stock :number){ }
}
export class Banner {

  constructor(public id: number, 
              public product_id:any, 
              public is_banner :boolean,
              public is_brand :boolean,
              public is_slider :boolean,
              public image :any,
              public is_active :boolean,
              public is_verifie :boolean,
              public banner_type :string,
              public subtitle :string,
              public title :string
              ){ }
}

export class Product {
  constructor(public id: number,
              public name: string,
              public images: Array<any>,
              public oldPrice: number,
              public newPrice: number,
              public price: number,
              public discount: number,
              public ratingsCount: number,
              public ratingsValue: number,
              public description: string,
              public my_product_flat: any,
              public availibilityCount: number,
              public cartCount: number,
              public color: Array<string>,
              public size: Array<string>,
              public weight: number,
              public categoryId: number){ }
}
