import {Button} from "@/components/ui/button";

const ButtonBuy = () => {
  return (
    <div>
      <Button
        variant="outline"
        className="bg-yellow-400 border-none  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-xl md:lg:text-2xl flex items-center font-medium w-72  md:lg:w-full hover:bg-yellow-400 h-14 mt-5 rounded-xl"
      >
        QUERO MEU ACESSO!
      </Button>
    </div>
  );
};

export default ButtonBuy;
