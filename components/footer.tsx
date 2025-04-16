import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const current_date = new Date().getFullYear();
  return (
    <footer>
      <div className="p5 flex-center">
        {current_date} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
