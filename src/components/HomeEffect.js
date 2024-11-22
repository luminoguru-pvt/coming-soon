import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"

const HomeEffect = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        await loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    autoPlay: true,
                    background: {
                        color: { value: "#05081c0" },
                        image: "",
                        position: "",
                        repeat: "",
                        size: "",
                        opacity: 1
                    },
                    backgroundMask: {
                        composite: "destination-out",
                        cover: { color: { value: "#fff" }, opacity: 1 },
                        enable: false
                    },
                    defaultThemes: {},
                    delay: 0,
                    fullScreen: { enable: true, zIndex: 10 },
                    detectRetina: true,
                    duration: 0,
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onClick: { enable: true, mode: "repulse" },
                            onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
                            onHover: {
                                enable: true,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 60,
                                duration: 1,
                                opacity: 8,
                                size: 8,
                                speed: 6
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: ["#999", "#999", "#999", "#999"]
                        },
                        links: {
                            color: "random",
                            distance: 100,
                            enable: true,
                            opacity: 0.8,
                            width: 1
                        },
                        move: {
                            bounce: false,
                            direction: "top",
                            enable: true,
                            out_mode: "out",
                            random: false,
                            speed: 3,
                            straight: false
                        },

                        number: { density: { enable: true, value_area: 800 }, value: 80 },
                        opacity: {
                            animation: {
                                enable: true,
                                speed: 2,
                                sync: false
                            },
                            value: { min: 0.5, max: 0.9 }
                        },
                        shape: {
                            close: true,
                            fill: true,
                            options: {
                                character: {
                                    value: ['TNFRSF4',
                                        'ATAD3B',
                                        'MTND1P23',
                                        'MTCO3P12',
                                        'PRDM16',
                                        'MTND2P28',
                                        'ACAP3',
                                        'PUSL1',
                                        'PEX10',
                                        'MTCO1P12',
                                        'CPTP',
                                        'RPL23AP21',
                                        'SKI',
                                        'MEGF6',
                                        'TAS1R3',
                                        'ERRFI1',
                                        'PEX14',
                                        'MTATP8P1',
                                        'MTCO2P12',
                                        'PLCH2',
                                        'SPSB1',
                                        'RPL23AP24',
                                        'LZIC',
                                        'TP73-AS1',
                                        'SLC2A5',
                                        'NDUFB4P8',
                                        'ENO1',
                                        'PLEKHM2',
                                        'B3GALT6',
                                        'DHRS3',
                                        'RPL22P3',
                                        'NMNAT1',
                                        'MTATP6P1',
                                        'CCDC27',
                                        'CHD5',
                                        'VAMP3',
                                        'DISP3',
                                        'CLSTN1',
                                        'MMEL1',
                                        'SCNN1D',
                                        'TMEM51',
                                        'C1orf127',
                                        'TTLL10',
                                        'RPL9P11',
                                        'TPRG1L',
                                        'FBXO42',
                                        'C1QTNF12',
                                        'ALDH4A1',
                                        'RERE',
                                        'CLCN6',
                                        'CELA2A',
                                        'CELA2B',
                                        'RER1',
                                        'PANK4',
                                        'WRAP73',
                                        'VPS13D',
                                        'HTR6',
                                        'LINC01647',
                                        'ARHGEF16',
                                        'RBP7',
                                        'GPR157',
                                        'ZBTB40',
                                        'ENO1-AS1',
                                        'FBXO44',
                                        'NPHP4',
                                        'TMEM201',
                                        'LINC01714',
                                        'MTOR',
                                        'TP73',
                                        'HES5',
                                        'PARK7',
                                        'CLIC4',
                                        'NPM1P39',
                                        'GPR3',
                                        'SZRD1',
                                        'PDIK1L',
                                        'CAMTA1',
                                        'NECAP2',
                                        'MICOS10-DT',
                                        'ZNF593OS',
                                        'FBXO6',
                                        'LAPTM5',
                                        'SLC30A2',
                                        'PHACTR4',
                                        'CNKSR1',
                                        'FAM110D',
                                        'ICMT',
                                        'WASF2',
                                        'MED18',
                                        'SLC9A1',
                                        'LDLRAP1',
                                        'RNF207-AS1',
                                        'ATP5IF1',
                                        'SDC3',
                                        'PAFAH2',
                                        'WDTC1',
                                        'DNAJC8',
                                        'RPL5P4',
                                        'SESN2',
                                        'SERINC2',
                                        'PTAFR',
                                        'RPS6KA1',
                                        'NKAIN1',
                                        'SNRNP40',
                                        'SLC25A33',
                                        'GJB3',
                                        'LINC01756',
                                        'DNAJC16',
                                        'SYTL1',
                                        'EYA3',
                                        'FABP3',
                                        'EPHA2',
                                        'ARHGEF19',
                                        'DRAXIN',
                                        'GPR153',
                                        'MAP3K6',
                                        'KAZN',
                                        'TNFRSF1B',
                                        'KIAA0319L',
                                        'UBE4B',
                                        'TMEM51-AS1',
                                        'PTPRU',
                                        'ZMYM6',
                                        'GJB5',
                                        'AGO4',
                                        'CDCA8',
                                        'CPLANE2',
                                        'ZBTB8B',
                                        'RPL22',
                                        'RNF207',
                                        'PAX7',
                                        'EXTL1',
                                        'CASZ1',
                                        'AGMAT',
                                        'FAAP20',
                                        'DNALI1',
                                        'IFFO2',
                                        'RRAGC',
                                        'YRDC',
                                        'FBXO2',
                                        'RCC2',
                                        'HSPA5P1',
                                        'PSMB2',
                                        'CASP9',
                                        'DDI2',
                                        'UQCRH',
                                        'AGO1',
                                        'THRAP3',
                                        'PADI6',
                                        'MIR34AHG',
                                        'PADI4',
                                        'C1orf122',
                                        'EPHA10',
                                        'FHL3',
                                        'RHBDL2',
                                        'INPP5B',
                                        'CFAP144',
                                        'ZMYM4',
                                        'UTP11',
                                        'C1orf216',
                                        'ACTL8',
                                        'RLF',
                                        'CTNNBIP1',
                                        'CLSPN',
                                        'GNL2',
                                        'GJA4',
                                        'MORN1',
                                        'PRKCZ-AS1',
                                        'TTC22',
                                        'RPL6P1',
                                        'TIE1',
                                        'MYCBP',
                                        'MICOS10',
                                        'DLGAP3',
                                        'RIMS3',
                                        'ECHDC2',
                                        'RAB3B',
                                        'SMIM12',
                                        'TNFRSF9',
                                        'TMEM61',
                                        'ERI3',
                                        'CZIB',
                                        'FAM151A',
                                        'OSBPL9',
                                        'C1orf210',
                                        'PARS2',
                                        'ZYG11A',
                                        'ZYG11B',
                                        'NFIA',
                                        'ST3GAL3-AS1',
                                        'L1TD1',
                                        'TXNDC12',
                                        'TXNDC12-AS1',
                                        'SF3A3',
                                        'HSD52',
                                        'PCSK9',
                                        'TTC4',
                                        'KLF17',
                                        'PLPP3',
                                        'RSPO1',
                                        'SNIP1',
                                        'RPS13P2',
                                        'CPT2',
                                        'FOXJ3',
                                        'TUT4',
                                        'GTF2F2P2',
                                        'TACSTD2',
                                        'FOXD3',
                                        'MAGOH-DT',
                                        'LINC01738',
                                        'CYP4A43P',
                                        'LINC00466',
                                        'NFIA-AS1',
                                        'MAGOH',
                                        'DEPDC1-AS1',
                                        'CDKN2C',
                                        'CAPZB',
                                        'LRP8-DT',
                                        'ZSWIM5',
                                        'OMA1',
                                        'SLC35D1',
                                        'LRP8',
                                        'TCEANC2',
                                        'KTI12',
                                        'LRRC42',
                                        'GDI2P2',
                                        'LINC02567',
                                        'KANK4',
                                        'DNAJB4',
                                        'USP1'],
                                    font: "Verdana",
                                    style: "",
                                    weight: "400",
                                    fill: true
                                }
                            },
                            type: "char"
                        },
                        size: {
                            value: 4
                        }
                    },

                    center: {
                        x: 0,
                        y: 0,
                        mode: "percent",
                        radius: 0
                    },
                }}
            />

        </div>
    );
};

export default HomeEffect;