import './App.css';
import Team from "./components/Team";

function App() {
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="inline-flex" aria-label="Global">
          <div className="flex">
            <a href="https://upc.edu/en" target="_blank" rel="noreferrer" className="-m-1.5 p-1.5">
              <span className="sr-only">UPC</span>
              <img
                className="h-11"
                src="https://upload.wikimedia.org/wikipedia/ca/thumb/b/b5/Logo_upc.svg/1200px-Logo_upc.svg.png"
                alt="UPC Logo"
              />
            </a>
          </div>
          <div className="flex">
            <a href="https://vedliot.eu" target="_blank" rel="noreferrer"className="-m-1.5 p-1.5">
              <span className="sr-only">UPC</span>
              <img
                className="h-11"
                src="https://vedliot.eu/wp-content/uploads/2021/05/logo_vedliot_rgb_1-2480x768-1.png"
                alt="VEDLIoT Logo"
              />
            </a>
          </div>
        </nav>

      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {/* Announcing our next round of funding.{' '} */}
                Open Call Projects{" "}
                <a
                  href="https://vedliot.eu/projects/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Flair
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A Federated Learning (FL) extension for very efficient deep
                learning in IoT
              </p>
            </div>
          </div>

          <Team />
          <section className="bg-transparent py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-1000">
                Idea and Relation to VEDLIoT
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Federated Learning (FL) paradigm allows a collaborative AI
                approach, while preserving the data privacy by decoupling the
                model training from the need to direct access to the raw
                training data. FLAIR targets to incorporate an FL framework into
                the existing VEDLIoT solution, which is expected to increase the
                uptake of the VEDLIoT solutions for numerous IoT use cases,
                where privacy is paramount. The validation of this extension
                will be done through experiments on a real 5G network, where 5G
                IoT devices built on VEDLIoT hardware with different accelerator
                options will define a heterogeneous IoT scenario. The challenges
                of a collaborative AI approach within such a heterogeneous
                environment will be quantified, and potential solutions will be
                devised. For the evaluations, a new use case built on speech
                command recognition, namely voice controlled IoT devices use
                case will be implemented using the VEDLIoT solutions with FLAIR
                extension.
              </p>
              <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                FLAIR Contributions to VEDLIoT Ecosystem Extension
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                FLAIR will contribute to the VEDLIoT ecosystem extension with
                mainly 3 aspects:
              </p>
              <ul className="mt-4 text-lg text-gray-700 list-disc list-inside">
                <li>
                  Task initialization: The server decides the training task,
                  i.e., the target application, and the corresponding data
                  requirements. The server also specifies the hyperparameters of
                  the global model and the training process, e.g., learning
                  rate. Then, the server broadcasts the initialized global model
                  parameters and tasks to selected participants.
                </li>
                <li>
                  Local model training and update: Based on the global model of
                  the current round, each participant respectively uses its
                  local data and device to update the local model parameters.
                  The goal of the participants is to find optimal parameters
                  that minimize the loss function. The updated local model
                  parameters are subsequently sent to the server.
                </li>
                <li>
                  Global model aggregation and update: The server aggregates the
                  local model updates from participants and then sends the
                  updated global model parameters back to the data owners.
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-transparent py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Objectives
              </h2>
              <ul className="mt-6 list-disc list-inside text-lg text-gray-700">
                <li>
                  Integrating a new ML framework within the VEDLIoT solution,
                  and developing a use case that is built on it.
                </li>
                <li>
                  Implementing a distributed AI solution for IoT devices,
                  addressing its software, hardware and communication aspects.
                </li>
                <li>
                  Evaluating the benefits of the use of hardware accelerators at
                  both the IoT devices and the edge server.
                </li>
                <li>
                  Scenarios with device heterogeneity (devices with different
                  hardware capabilities such as ones with GPU accelerators) will
                  be evaluated to assess the challenges such heterogeneity
                  brings to the distributed AI approach targeted.
                </li>
                <li>
                  FLAIR solution is built on the use of an edge server, which
                  helps and coordinates the IoT devices to collaborate in the
                  development of a common ML model.
                </li>
                <li>
                  Incorporating the FL functionality into the VEDLIoT solution.
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-transparent py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Approach
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                The FLAIR's software solution will use an FL open-source
                implementation called{" "}
                <a
                  href="https://flower.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-indigo-600"
                >
                  Flower
                </a>
                . Flower is a novel end-to-end open-source FL framework,
                supported by a growing community of researchers, engineers,
                students, professionals, academics, and other enthusiasts. It
                enables a more seamless transition from experimental simulation
                to system research on real edge devices, specifically, devices
                such as Nvidia Jetson are easy to set up. Flower offers a
                stable, language and ML framework-agnostic implementation of the
                core components of a FL system, and provides higher-level
                abstractions to enable researchers to experiment and implement
                new ideas on top of a reliable stack. It supports TensorFlow, so
                it will help to incorporate the FLAIR extension to the VEDLIoT
                solution smoothly. Moreover, Flower allows for rapid transition
                of existing ML training pipelines into a FL setup to evaluate
                their convergence properties and training time in a federated
                setting. Most importantly, Flower provides support for extending
                FL implementations to mobile and wireless clients, with
                heterogeneous compute, memory, and network resources.
              </p>

              <p className="mt-4 text-lg text-gray-700">
                For the mobile network integration of the FLAIR solution, the
                project will use a 5G network setup with an edge computing
                server, which technically consists of four nodes: a mobile
                terminal (aka. User Equipment-UE), a 5G BS, 5G Core Network
                (CN), and a MEC server. According to the 5G standard, CN sits
                between the radio network and external networks, controlling
                many networking operations, such as AAA. The MEC server hosts
                edge computing applications, and it has direct communication
                with the BSs to reduce the application delays. The FLAIR's 5G
                network implementation will use open-source software for all the
                nodes, except the UE which will use a common-off-the-shelf 5G
                module (i.e., a 5G modem). The open-source software to be used
                is{" "}
                <a
                  href="https://openairinterface.org"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-indigo-600"
                >
                  Open Air Interface
                </a>{" "}
                or BS and the CN, and the{" "}
                <a
                  href="https://openairinterface.org/mosaic5g/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-indigo-600"
                >
                  LL-MEC
                </a>{" "}
                software by MOSAIC5G project. The BS uses an FPGA-based Software
                Defined Radio (SDR), which allows the use of software for the
                modulation/demodulation and the processing of radio signals.
                Such a setup has been used in many of our previous studies.
              </p>

              <p className="mt-4 text-lg text-gray-700">
                On top of the FLAIR software solution for FL, the project will
                implement the Voice controlled IoT devices use case. Here the
                objective is to classify the speech data collected from a user
                as one of the possible voice commands. Since the user's speech
                data are mostly considered as private information, an FL
                solution is the only possible privacy-preserving solution.
                Different IoT devices can collaborate to create a global model
                without sharing their local data. There are several datasets
                available for voice commands, such as the one from the{" "}
                <a
                  href="https://www.tensorflow.org/tutorials/audio/simple_audio"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-indigo-600"
                >
                  TensorFlow Speech Recognition Challenge
                </a>
                . Hence, no new data collection will be necessary within the
                FLAIR project. The FL clients will be assigned the different
                speaker's data, which will represent their local data that is
                not shared with the FL server.
              </p>
            </div>
          </section>

          <section className="bg-transparent py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Expected Impact
              </h2>
              <ul className="mt-6 list-disc list-inside text-lg text-gray-700">
                <li className="mb-4">
                  FL Extension to VEDLIoT solution, both for IoT devices and the
                  edge server.
                </li>
                <li className="mb-4">
                  Wireless IoT communication (5G) hardware extension design and
                  implementation for the VEDLIoT IoT devices.
                </li>
                <li className="mb-4">
                  Open source 5G Base Station and CN solution implementation for
                  the communication between the VEDLIoT IoT devices and the edge
                  server.
                </li>
                <li className="mb-4">
                  An open-source edge server software implementation based on
                  the 5G standard.
                </li>
                <li className="mb-4">
                  Methodology for bootstrapping such a 5G-based communication
                  system for VEDLIoT-based systems.
                </li>
                <li className="mb-4">
                  A new use case implementation, specifically Voice controlled
                  IoT Devices use case, employing VEDLIoT solutions such as its
                  hardware and accelerators.
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-transparent py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Further Information
                </h2>
              <div className="mt-10 flex justify-center">
                <iframe
                  title="VEDLIoT Video"
                  className="w-full lg:w-4/4 h-80"
                  src="https://www.youtube.com/embed/9GAKako8YFY"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>

          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
