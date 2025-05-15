
const NavLinks = ({link_list, active}) => {

  return <section className={link_list}>
    <div className={active}>All</div>
    <div>Active</div>
    <div>Inactive</div>
  </section>;
};

export default NavLinks;
