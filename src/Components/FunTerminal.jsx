import React, { useState, useEffect, useRef } from "react";
import { ReactTerminal } from "react-terminal";

import music from "../assets/images/music.mp3";

// Social Links
const socialLinks = [
    "LinkedIn: https://www.linkedin.com/in/r4jv33r/",
    "X (Twitter): https://x.com/rajveer_0101",
    "GitHub: https://github.com/root-0101",
    "Medium: https://medium.com/@rajveer_0101",
];

// Music Placeholder
const musicCenter = `
 ===========================
 |    Music Center v1.0    |
 ===========================
`;

const radio = `
                       |    |~/ 
                       |   _|~ 
         .============.|  (_|   |~/ 
       .-;____________;|.      _|~ 
       | [_________I__] |     (_| 
       |  """"" (_) (_) | 
       | .=====..=====. | 
       | |:::::||:::::| | 
       | '=====''=====' | 
       '----------------'
`;

const FunTerminal = () => {
    const [output, setOutput] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
        return "🎵 Music is now playing...";
    };

    const pauseMusic = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
        return "⏸️ Music has been paused.";
    };

    const commands = {
        help: () => (
            <pre>{`Available Commands:
  - help   : Displays available commands
  - joke   : Get a joke
  - music  : Display the music center
  - play   : Play the music
  - pause  : Pause the music
  - blog   : My blog post
  - whoami : About me
  - social : My social handles
  - clear  : Clear the console
  - exit   : Exit the app`}</pre>
        ),

        joke: async () => {
            try {
                const response = await fetch(
                    "https://v2.jokeapi.dev/joke/Programming?type=single&blacklistFlags=sexist,racist,political,religious"
                );
                const data = await response.json();
                return data.joke;
            } catch (error) {
                return "Oops! Failed to fetch a joke.";
            }
        },

        music: () => (
            <pre>{`${musicCenter}\n${radio}\n\nEnter "play" to start or "pause" to stop the music.`}</pre>
        ),

        play: playMusic,
        pause: pauseMusic,

        blog: () => {
            return (
                <pre>
                    {"You can find my blogs Here: "}
                    <a
                        href="https://medium.com/@rajveer_0101"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="terminal-link"
                    >
                        https://medium.com/@rajveer_0101
                    </a>
                </pre>
            );
        },

        whoami: () => (
            <pre>{`
╔═══════════════════════════════════════════════════╗
║                  Hello World !!                   ║
║  I am Rajveer, a web security professional 💻     ║
║            and a ctf player 🚩                    ║
║  I like identifying vulnerabilities and helping   ║
║  organizations reinforce their defenses.          ║
╚═══════════════════════════════════════════════════╝`}</pre>
        ),

        social: () => {
            return (
                <pre>
                    {"My social handles:"}
                    {socialLinks.map((link, index) => (
                        <div key={index}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="terminal-link"
                            >
                                {link}
                            </a>
                        </div>
                    ))}
                </pre>
            );
        },

        clear: () => {
            setOutput("");
            return "";
        },

        exit: () => {
            window.location.href = "./";
            return "Redirecting to Home...";
        },
    };

    const terminalPrompt = (
        <pre>
            ┌──(root㉿s13uth)-[~]
            <br />
            └─$
        </pre>
    );

    // Get current date
    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    const welcomeMessage = (
        <pre>
            <div className="text-white text-center">{currentDate}</div>
            {`\nType 'help' to list commands.`}
        </pre>
    );

    return (
        <div
            style={{
                color: "#fff",
                fontFamily: "'Courier New', Courier, monospace",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* for big screens */}
            <div
                style={{
                    borderRadius: "10px",
                    width: "60vw",
                    height: "75vh",
                    overflowY: "auto",
                }}
                className="hidden lg:block"
            >
                <ReactTerminal
                    welcomeMessage={welcomeMessage}
                    commands={commands}
                    onChange={setOutput}
                    prompt={terminalPrompt}
                    output={output}
                    themes={{
                        "my-custom-theme": {
                            themeBGColor: "#0D1017",
                            themeToolbarColor: "#1E222A",
                            themeColor: "#66ff00",
                            themePromptColor: "red",
                        },
                    }}
                    theme="my-custom-theme"
                    style={{
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        fontSize: "16px",
                        fontFamily: "'Courier New', Courier, monospace",
                    }}
                />
                {/* Hidden audio element for music playback */}
                <audio ref={audioRef} src={music} />
            </div>

            {/* for small screens */}
            <div
                style={{
                    borderRadius: "10px",
                    width: "85vw",
                    height: "75vh",
                    overflowY: "auto",
                }}
                className="lg:hidden "
            >
                <ReactTerminal
                    welcomeMessage={welcomeMessage}
                    commands={commands}
                    onChange={setOutput}
                    prompt={terminalPrompt}
                    output={output}
                    themes={{
                        "my-custom-theme": {
                            themeBGColor: "#0D1017",
                            themeToolbarColor: "#1E222A",
                            themeColor: "#66ff00",
                            themePromptColor: "red",
                        },
                    }}
                    theme="my-custom-theme"
                    style={{
                        backgroundColor: "#1a1a1a",
                        color: "#fff",
                        fontSize: "16px",
                        fontFamily: "'Courier New', Courier, monospace",
                    }}
                />
                {/* Hidden audio element for music playback */}
                <audio ref={audioRef} src={music} />
            </div>
        </div>
    );
};

export default FunTerminal;
