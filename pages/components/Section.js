
const Section = () => {
    return (
        <div>
            <div className="p-20 flex flex-col text-center">
                <h1>Nuled Marketing Visual</h1>
                <p className="p-6">Mussum Ipsum, cacilds vidis litro abertis.
                Suco de cevadiss deixa as pessoas mais interessantis.
                Viva Forevis aptent taciti sociosqu ad litora torquent. Leite de capivaris, leite de mula manquis sem cabeça.
                    Si num tem leite então bota uma pinga aí cumpadi!</p>
                <a href="/sobre">
                    <input className="bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded" type="button" value="Sobre" />
                </a>
                <img className="p-4 flex-1" src="/banner.jpeg" alt="Nuled" width="100%" height="auto" />
                <p className="p-6 flex-1">Buscar uma imagem ou criar uma nulled</p>
            </div>
            <div className="flex justify-between">
                <div className=" pt-8 px-5 lg:ml-60">
                    <figure className="bg-purple-600 rounded-xl p-8 md:p-0">
                        <img className="pt-6 w-120 h-180 md:h-auto md:rounded-none rounded-full mx-auto" src="/undraw_Navigation_re_wxx4.svg" alt="" width="220" height="280" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-lg font-semibold text-white">
                                    Mussum Ipsum, cacilds vidis litro abertis.
                                    Copo furadis é disculpa de bebadis, arcu quam euismod magna.
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-cyan-600">
                                    Nuled Marketing Visual
                        </div>
                            </figcaption>
                        </div>
                    </figure >
                </div>
                <div className="mt-20 px-5">
                    <figure className="bg-purple-600 rounded-xl p-8 md:p-0">
                        <img className="pt-6 w-120 h-180 md:h-auto md:rounded-none rounded-full mx-auto" src="/undraw_monitor_iqpq.svg" alt="" width="220" height="280" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-lg font-semibold text-white">
                                    Mussum Ipsum, cacilds vidis litro abertis.
                                    Copo furadis é disculpa de bebadis, arcu quam euismod magna.
                                    Nullam volutpat risus nec leo commodo, ut interdum diam laoreet.
                                    Sed non consequat odio.
                                 </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-cyan-600">
                                    Nuled Marketing Visual
                        </div>
                            </figcaption>
                        </div>
                    </figure >
                </div>
                <div className="pt-8 px-5 lg:mr-60">
                    <figure className="bg-purple-600 rounded-xl p-8 md:p-0">
                        <img className="pt-6 w-120 h-180 md:h-auto md:rounded-none rounded-full mx-auto" src="/undraw_All_the_data_re_hh4w.svg" alt="" width="220" height="280" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                            <blockquote>
                                <p className="text-lg font-semibold text-white">
                                    Mussum Ipsum, cacilds vidis litro abertis.
                                    Copo furadis é disculpa de bebadis, arcu quam euismod magna.
                               </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-cyan-600">
                                    Nuled Marketing Visual
                        </div>
                            </figcaption>
                        </div>
                    </figure >
                </div>
            </div>
        </div>
    )
}

export default Section