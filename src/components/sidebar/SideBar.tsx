import { SideBarButton } from "./SideBarButton";
import deco from "../../assets/img/deco.png";
import equipment from "../../assets/img/equipment.png";
import openings from "../../assets/img/openings.png";
import { Category, SubCategory } from "../../api/types";
import { getItemsForCategory } from "../../api/api";
import { Component } from "react";
import { SubCategoriesList } from "./SubCategoriesList";

interface StateType {
  category?: Category;
  subCategories: SubCategory[];
  subCategory?: SubCategory;
}

interface PropTypes {
  setShowEditButtons: (value: boolean) => void;
}

export class SideBar extends Component<PropTypes, StateType> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      category: undefined,
      subCategories: [],
      subCategory: undefined,
    };
  }

  onClick = (category: Category) => {
    this.setState({ category, subCategories: [], subCategory: undefined });
    this.props.setShowEditButtons(true);

    getItemsForCategory(category).then((subCategories) =>
      this.setState({ subCategories })
    );
  };

  setSubCategory = (subCategory?: SubCategory) =>
    this.setState({ subCategory });

  handleCollapseSideBar = () => {
    this.setState({ category: undefined });
    this.props.setShowEditButtons(false);
  };

  render() {
    const { category, subCategories, subCategory } = this.state;

    return (
      <div className="h-full flex flex-row">
        <div className="w-24 h-full bg-white flex justify-center items-center flex-col">
          <SideBarButton
            icon={openings}
            category="aberturas"
            onClick={this.onClick}
            currentCategory={category}
          />
          <SideBarButton
            icon={equipment}
            category="equipamiento"
            onClick={this.onClick}
            currentCategory={category}
          />
          <SideBarButton
            icon={deco}
            category="terminaciones"
            onClick={this.onClick}
            currentCategory={category}
          />
        </div>
        {category && (
          <SubCategoriesList
            handleCollapseSideBar={this.handleCollapseSideBar}
            subCategory={subCategory}
            setSubCategory={this.setSubCategory}
            category={category}
            subCategories={subCategories}
          />
        )}
      </div>
    );
  }
}
