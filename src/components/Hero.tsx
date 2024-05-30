"use client"

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalProps, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior] = React.useState<ModalProps["scrollBehavior"]>("inside");

  return (
    <div className="relative bg-gray-50">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <Image src={'/bg/background-pattern.png'}
          alt='bg pattern'
          width={1000}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            <div>
              <div className="text-center lg:text-left  mb-10">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">Simplify Complexity with <span className="text-primary">Layman AI</span></h1>
                <p className="mt-2 text-xl text-gray-600 sm:mt-8 font-inter">Transform intricate text into clear, easy-to-understand language effortlessly.</p>

              </div>

              <div className="sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj justif-center hover:bg-gray-600"
                  role="button"
                >
                  Try Demo
                </Link>
                <Button
                  className="h-16 bg-transparent text-primary text-lg hover:bg-slate-300 font-bold"
                  size="lg"
                  onPress={onOpen}
                >
                  <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>
                  Learn more
                </Button>
                <Modal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  scrollBehavior={scrollBehavior}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          About Layman AI
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            <span className="text-primary">Layman AI</span> is a web application designed to make complex
                            and intricate text easy to understand. Whether you are a student grappling
                            with dense academic papers, a professional navigating technical documents,
                            or simply someone who wants to decode complicated information,
                            Layman AI is here to help.
                          </p>
                          <p>
                            By leveraging advanced artificial intelligence Large Language Model (LLM) from
                            HuggingFace, Layman AI
                            transforms difficult language into clear and simple text, making information
                            accessible to everyone.
                          </p>
                          <p>
                            <span className="text-warning">Fun Fact:</span> The name of the application was inspired by the english
                            term <b>Layman</b> , which means a simple language that can be understood by the average person.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                            Close
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>

              </div>
            </div>

            <div>
              <Image
                className="w-full"
                src="/img/layman_ai_laptop_2.png"
                alt="Hero image"
                width={5500}
                height={5500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;