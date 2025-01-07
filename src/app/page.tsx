/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Paperclip, RotateCw } from "lucide-react";

import { cn } from "./utils/utils";
import { mocks } from "@/app/services/mocks";
import { Header } from "@/app/components/modules";
import { Text, Title } from "@/app/components/elements";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [rotation, setRotation] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

  const handleButtonClick = (text: string) => {
    setPrompt((prevPrompt) => {
      const newPrompt = prevPrompt ? `${prevPrompt} ${text}` : text;
      return newPrompt;
    });

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleAttach = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <main className="flex min-h-screen flex-col gap-8 justify-start items-center pb-4">
      <Header />
      <section className="w-full lg:pt-12 lg:mb-24 justify-center flex flex-col m-0 items-center">
        <motion.div
          className="space-y-6 w-full container-custom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full container-custom sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Crie Arte Incrível para</span>
              <span className="block text-primary">
                sua Camisa em Poucos Passos!
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Escolha o tipo da camisa, personalize a estampa e receba a arte
              finalizada em alta qualidade!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/90 md:py-4 md:px-10 md:text-lg"
                  onClick={() => {
                    const element = document.getElementById("customize");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Comece Agora
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="w-full lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold leading-7 text-primary">
                Benefícios
              </h2>
              <h2 className="text-3xl font-bold mb-4">
                Tudo que você precisa para criar sua estampa perfeita
              </h2>
              <Text className="text-gray-600">
                Ferramentas poderosas para criar designs únicos
              </Text>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {mocks.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/[0.2] rounded-lg flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <Title className="text-xl font-semibold mb-2">
                    {feature.title}
                  </Title>
                  <Text className="text-gray-600">{feature.description}</Text>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <section className="w-full">
        <motion.div
          id="customize"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Personalize sua Estampa
              </h2>
              <Text className="text-gray-600">
                Descreva sua ideia ou faça upload do seu design
              </Text>
            </div>
            <motion.div
              className="space-y-6 w-full mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-[1fr_385px]">
                <div
                  className={cn(
                    "bg-white w-full h-auto mt-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
                  )}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                      <button
                        className="h-min border-[1px] rounded-[8px] py-2 px-4 border-[#e4e4e7] hover:bg-[#f4f4f5]"
                        onClick={() =>
                          handleButtonClick(
                            "Uma camisa com design minimalista, com uma forma simples e elegante, em cerâmica branca, sem excessos. O foco é na pureza da forma, com linhas limpas e suaves, ideal para um estilo moderno e discreto."
                          )
                        }
                      >
                        Uma camisa minimalista
                      </button>
                      <button
                        className="h-min border-[1px] rounded-[8px] py-2 px-4 border-[#e4e4e7] hover:bg-[#f4f4f5]"
                        onClick={() =>
                          handleButtonClick(
                            "Uma camisa com design floral colorido, apresentando flores vibrantes e detalhadas em tons de rosa, amarelo, verde e azul. O estilo é uma mistura entre o clássico e o contemporâneo, com as flores dispostas de forma harmônica ao redor da camisa, criando um visual alegre e inspirador."
                          )
                        }
                      >
                        Design floral colorido
                      </button>
                      <button
                        className="h-min border-[1px] rounded-[8px] py-2 px-4 border-[#e4e4e7] hover:bg-[#f4f4f5]"
                        onClick={() =>
                          handleButtonClick(
                            "Uma camisa com uma frase motivacional escrita de forma elegante e moderna. A frase é inspiradora e positiva, como 'Acredite no seu potencial', e está em um estilo de tipografia simples, com cores suaves e minimalistas, contrastando com o fundo branco da camisa."
                          )
                        }
                      >
                        camisa com frase motivacional
                      </button>
                    </div>
                    <div className="border-[1px] border-[#e4e4e7] rounded-[8px] p-4 mb-8 flex-1 flex flex-col">
                      <div className="space-y-4 flex-1 flex flex-col">
                        <textarea
                          ref={textareaRef}
                          value={prompt}
                          onInput={handleInput}
                          onChange={(e) => setPrompt(e.target.value)}
                          placeholder="Descreva como você quer sua camisa..."
                          className="w-full bg-transparent resize-none text-black placeholder:text-zinc-400 outline-none border-none flex-1"
                        />
                        <div className="flex justify-between flex-wrap gap-2 items-center !m-0">
                          <div className="flex gap-2 items-center max-[420px]:container_buttons">
                            <label
                              htmlFor="file-input"
                              className="h-min border-[1px] rounded-[8px] py-2 px-4 border-[#e4e4e7] hover:bg-[#f4f4f5] flex items-center justify-center cursor-pointer max-[420px]:flex-1"
                            >
                              <Paperclip className="h-4 w-4 mr-2" />
                              Attach
                            </label>

                            <input
                              id="file-input"
                              type="file"
                              className="hidden"
                              onChange={handleAttach}
                            />
                            {imagePreview && (
                              <Image
                                width={80}
                                height={42}
                                alt="Pré-visualização"
                                src={imagePreview || ""}
                                className="size-full max-w-[80px] max-h-[42px] object-cover rounded"
                              />
                            )}
                          </div>
                          <button className="h-min border-[1px] rounded-[8px] py-2 px-4 border-[#e4e4e7] hover:bg-[#f4f4f5] flex items-center justify-center max-[420px]:flex-1">
                            Create
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-800 mb-4 text-center">
                      Total de designs gerados:{" "}
                      <span className="text-gray-800 font-semibold">
                        1,234,567
                      </span>
                    </p>
                  </div>
                </div>
                <div className="max-w-[385px] mx-auto lg:mx-0">
                  <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className="w-full h-full flex items-center justify-center transition-transform duration-500"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="T-shirt preview"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <button
                      onClick={handleRotate}
                      className="absolute bottom-4 right-4 rounded-full p-2"
                    >
                      <RotateCw className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
