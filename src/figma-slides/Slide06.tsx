const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const imgIllustratedStoryScene = `${assetPathPrefix}/f4974.png`;
const imgChevronDown = `${assetPathPrefix}/ab980.svg`;
const imgMessageSquare = `${assetPathPrefix}/d731e.svg`;
const imgNavigationKeypad = `${assetPathPrefix}/b71d4.svg`;
const imgArrowLeft = `${assetPathPrefix}/e758d.svg`;
const imgArrowRight = `${assetPathPrefix}/358ee.svg`;

export default function WeKeepYouInformed() {
  return (
    <div className="bg-[#faf9f5] content-stretch flex flex-col items-start relative size-full" data-node-id="8:6727" data-name="We keep you informed">
      <div className="bg-white content-stretch flex h-[88px] items-center justify-between overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="8:6728" data-name="Story navigation">
        <div className="content-stretch flex gap-[18px] items-center overflow-clip relative shrink-0" data-node-id="8:6729" data-name="Brand">
          <p className="[word-break:break-word] font-['Inter:Extra_Bold'] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#00adef] text-[30px] whitespace-nowrap" data-node-id="8:6730">
            FURTU
          </p>
          <div className="bg-[#dfe5dd] h-[27px] relative shrink-0 w-px" data-node-id="8:6731" data-name="Brand divider" />
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#223b35] text-[14px] whitespace-nowrap" data-node-id="8:6732">
            <p className="leading-[1.35] mb-0">Cooperative Bank</p>
            <p className="leading-[1.35]">of Oromia</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0" data-node-id="8:6733" data-name="Story context">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[14px] whitespace-nowrap" data-node-id="8:6734">
            FROM LAND TO GROWTH
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#223b35] text-[14px] whitespace-nowrap" data-node-id="8:6735">
            English
          </p>
          <div className="relative shrink-0 size-[16px]" data-node-id="8:6736" data-name="chevron-down">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgChevronDown} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[680px] items-start overflow-clip px-[64px] py-[32px] relative shrink-0 w-full" data-node-id="8:6738" data-name="Story card">
        <div className="content-stretch flex flex-[1_0_0] gap-[48px] items-center min-h-px relative w-full" data-node-id="8:6739" data-name="Story composition">
          <div className="content-stretch flex flex-col h-full items-start justify-between py-[16px] relative shrink-0 w-[580px]" data-node-id="8:6740" data-name="Narrative">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic overflow-clip relative shrink-0 w-full" data-node-id="8:6741" data-name="Story introduction">
              <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[#00adef] text-[14px] whitespace-nowrap" data-node-id="8:6742">
                05 / A MESSAGE, WHEREVER YOU FARM
              </p>
              <p className="font-['Inter:Bold'] font-bold leading-[1.08] min-w-full relative shrink-0 text-[#223b35] text-[48px] w-[min-content]" data-node-id="8:6743">
                We keep you informed.
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[1.45] min-w-full relative shrink-0 text-[#68766e] text-[20px] w-[min-content]" data-node-id="8:6744">
                A simple phone can keep you connected to your Furtu journey.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="8:6745" data-name="Inclusive communication">
              <div className="bg-[#eaf8fe] content-stretch flex gap-[14px] items-start overflow-clip p-[20px] relative rounded-[12px] shrink-0 w-full" data-node-id="8:6746" data-name="Reassurance panel">
                <div className="relative shrink-0 size-[24px]" data-node-id="8:6747" data-name="message-square">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMessageSquare} />
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[7px] items-start min-w-px not-italic overflow-clip relative" data-node-id="8:6749" data-name="Message">
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[1.3] relative shrink-0 text-[#223b35] text-[17px] w-full" data-node-id="8:6750">
                    Basic phone. Meaningful updates.
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.4] relative shrink-0 text-[#68766e] text-[16px] w-full" data-node-id="8:6751">
                    Application updates reach you by SMS — no smartphone required.
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-full" data-node-id="8:6752" data-name="Language preferences">
                <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#68766e] text-[14px] whitespace-nowrap" data-node-id="8:6753">
                  IN YOUR PREFERRED LANGUAGE
                </p>
                <p className="font-['Inter:Medium'] font-medium min-w-full relative shrink-0 text-[#223b35] text-[20px] w-[min-content]" data-node-id="8:6754">
                  Afaan Oromo | Amharic | Tigrigna
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-node-id="8:6755" data-name="Scene and story objects">
            <div className="bg-[#f3f0e7] content-stretch flex gap-[18px] h-[448px] items-center overflow-clip p-[22px] relative rounded-[24px] shrink-0 w-full" data-node-id="8:6756" data-name="Rural SMS scene">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="8:6757" data-name="Farmer at home">
                <div className="bg-[#f3f0e7] content-stretch flex flex-col h-[386px] items-start justify-end overflow-clip p-[20px] relative rounded-[24px] shrink-0 w-full" data-node-id="8:6758" data-name="Illustrated story scene">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIllustratedStoryScene} />
                </div>
              </div>
              <div className="bg-[#223b35] content-stretch flex flex-col gap-[14px] h-[352px] items-center overflow-clip p-[17px] relative rounded-[24px] shrink-0 w-[202px]" data-node-id="8:6760" data-name="Basic feature phone">
                <div className="bg-[#68766e] h-[4px] relative rounded-[2px] shrink-0 w-[48px]" data-node-id="8:6761" data-name="Earpiece" />
                <div className="[word-break:break-word] bg-[#e2edd9] content-stretch flex flex-col gap-[9px] h-[146px] items-start not-italic overflow-clip p-[12px] relative rounded-[3px] shrink-0 text-[#223b35] w-full" data-node-id="8:6762" data-name="SMS display">
                  <p className="font-['Inter:Bold'] font-bold leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" data-node-id="8:6763">
                    FURTU • SMS
                  </p>
                  <p className="font-['Inter:Regular'] font-normal leading-[1.35] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="8:6764">
                    Your Furtu application is being processed.
                  </p>
                </div>
                <div className="h-[32px] relative shrink-0 w-[128px]" data-node-id="8:6765" data-name="Navigation keypad">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgNavigationKeypad} />
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0" data-node-id="8:6769" data-name="Number keypad">
                  <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="8:6770" data-name="Keypad row">
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6771" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6772">
                        1
                      </p>
                    </div>
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6773" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6774">
                        2
                      </p>
                    </div>
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6775" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6776">
                        3
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="8:6777" data-name="Keypad row">
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6778" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6779">
                        4
                      </p>
                    </div>
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6780" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6781">
                        5
                      </p>
                    </div>
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6782" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6783">
                        6
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="8:6784" data-name="Keypad row">
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6785" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6786">
                        7
                      </p>
                    </div>
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6787" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6788">
                        8
                      </p>
                    </div>
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6789" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6790">
                        9
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="8:6791" data-name="Keypad row">
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6792" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6793">
                        *
                      </p>
                    </div>
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6794" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6795">
                        0
                      </p>
                    </div>
                    <div className="bg-[#43574f] content-stretch flex h-[20px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0 w-[44px]" data-node-id="8:6796" data-name="Number key">
                      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap" data-node-id="8:6797">
                        #
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[1.4] not-italic relative shrink-0 text-[#68766e] text-[18px] w-full" data-node-id="8:6798">
              You can continue your day while your application moves forward.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border-[#dfe5dd] border-solid border-t content-stretch flex flex-col gap-[18px] h-[132px] items-start overflow-clip pb-[22px] pt-[17px] px-[64px] relative shrink-0 w-full" data-node-id="8:6799" data-name="Carousel navigation">
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-node-id="8:6800" data-name="Journey progress">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="8:6801" data-name="Progress stage">
            <div className="bg-[#00adef] h-[4px] relative rounded-[2px] shrink-0 w-full" data-node-id="8:6802" data-name="Progress track" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[13px] whitespace-nowrap" data-node-id="8:6803">
              Need
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="8:6804" data-name="Progress stage">
            <div className="bg-[#00adef] h-[4px] relative rounded-[2px] shrink-0 w-full" data-node-id="8:6805" data-name="Progress track" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[13px] whitespace-nowrap" data-node-id="8:6806">
              Apply
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="8:6807" data-name="Progress stage">
            <div className="bg-[#00adef] h-[4px] relative rounded-[2px] shrink-0 w-full" data-node-id="8:6808" data-name="Progress track" />
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#00adef] text-[13px] whitespace-nowrap" data-node-id="8:6809">
              Assess
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="8:6810" data-name="Progress stage">
            <div className="bg-[#dfe5dd] h-[4px] relative rounded-[2px] shrink-0 w-full" data-node-id="8:6811" data-name="Progress track" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[13px] whitespace-nowrap" data-node-id="8:6812">
              Approve
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="8:6813" data-name="Progress stage">
            <div className="bg-[#dfe5dd] h-[4px] relative rounded-[2px] shrink-0 w-full" data-node-id="8:6814" data-name="Progress track" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[13px] whitespace-nowrap" data-node-id="8:6815">
              Finance
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="8:6816" data-name="Progress stage">
            <div className="bg-[#dfe5dd] h-[4px] relative rounded-[2px] shrink-0 w-full" data-node-id="8:6817" data-name="Progress track" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[13px] whitespace-nowrap" data-node-id="8:6818">
              Input
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="8:6819" data-name="Progress stage">
            <div className="bg-[#dfe5dd] h-[4px] relative rounded-[2px] shrink-0 w-full" data-node-id="8:6820" data-name="Progress track" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[13px] whitespace-nowrap" data-node-id="8:6821">
              Grow
            </p>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px overflow-clip relative" data-node-id="8:6822" data-name="Progress stage">
            <div className="bg-[#dfe5dd] h-[4px] relative rounded-[2px] shrink-0 w-full" data-node-id="8:6823" data-name="Progress track" />
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[13px] whitespace-nowrap" data-node-id="8:6824">
              Monitor
            </p>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="8:6825" data-name="Card controls">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="8:6826" data-name="Previous card">
            <div className="relative shrink-0 size-[19px]" data-node-id="8:6827" data-name="arrow-left">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#68766e] text-[14px] whitespace-nowrap" data-node-id="8:6829">
              Previous
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[12px] items-center leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="8:6830" data-name="Position">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#223b35] text-[14px]" data-node-id="8:6831">
              06 / 18
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#68766e] text-[13px]" data-node-id="8:6832">
              Swipe or use the arrows
            </p>
          </div>
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="8:6833" data-name="Next card">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#223b35] text-[14px] whitespace-nowrap" data-node-id="8:6834">
              Next card
            </p>
            <div className="relative shrink-0 size-[19px]" data-node-id="8:6835" data-name="arrow-right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}