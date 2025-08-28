export default function ProductCard() {
  return (
    <div className="m-auto max-w-xs rounded-lg overflow-hidden shadow-2xl bg-white">
      <img
        className="w-full h-70 object-contain"
        src="https://www.mush-e.com/cdn/shop/files/logitech-g435-wireless-gaming-headset-usb-18-hour-battery-40mm-drivers-headset-logitech-297515.webp"
        alt="Imagem do Produto - Headset Logitech G435"
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2 text-text">Headset Logitech G435</h2>
        <p className="text-gray-800 text-base mb-4">
          Som imersivo com drivers de 40mm, microfones com redução de ruído e conexão sem fio via LIGHTSPEED ou
          Bluetooth.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-text">R$ 589,99</span>
          <span className="text-sm text-text font-semibold">Em Estoque</span>
        </div>
        <div className="flex items-center gap-1 mb-4">
          <span className="text-sm text-emerald-700">15% de desconto no PIX</span>
          <img className="h-3.5" src="https://img.icons8.com/color/48/pix.png" alt="Ícone do PIX" />
        </div>
        <button className="w-full bg-button text-white font-bold py-2 px-4 rounded-md hover:bg-button-hover focus:outline-none cursor-pointer transition ease-in-out duration-200">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
