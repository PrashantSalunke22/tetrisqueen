2001-06-17  David A. Capello

	* Terminada la traducci�n: TODO.en y CHANGES.en.

2001-06-16  David A. Capello

	* Modificada la forma de crear el archivo de datos: ahora hay que
	  utilizar makedata.bat y makedata.sh, con esto se eliminan algunos
	  problemas que ten�an los makefiles con las dependencias del data.h.
	* Modificada la documentaci�n: lista la traducci�n de AUTHORS.es y
	  THANKS.es, arreglado un poco el README.
	* Eduard Bloch al parecer ser� el encargado de empaquetar el juego
	  para las distribuciones Debian.

2001-06-15  David A. Capello

	* Eliminado el readkey() al final del juego: en algunas plataformas
	  quedaba la pantalla negra sin nada (y se hac�a confuso)
	  (recomendado por Eduard Bloch).

2001-06-07  David A. Capello

	* Todos los paquetes a formato ZIP (mirar makefile.pak):
	  la ayuda de c�mo descomprimir ficheros .tar.gz fue eliminada.

2001-06-03  David A. Capello

	* Modificado en `main.c' el usage() y algunas cosas al reconocer
	  los argumentos.
	* Eliminada una variable est�tica `game_over' en `credits.c':
	  no se utilizaba para absolutamente NADA (raro, no?).
	* Optimizado `credits.c': la forma de manejar la lista de l�neas
	  que deben ir apareciendo en la pantalla.
	* "Limpi�" un poco el c�digo: eliminados algunos TABs.
	* Eliminados de todos los ficheros de c�digo fuente la versi�n
	  del juego: esto har�a sino que en cada nueva versi�n todos los
	  ficheros se deban modificar.
	* Los paquetes de src, dos y win est�n en formato ZIP: ahora que
	  consegu� la utilidad InfoZIP para MSDOS (era hora :-)
	* Modificados algunas variables en makefile.pak y los nombres
	  de las reglas: ahora son `src', `dos', etc, sin el `pack'.

2001-06-02  David A. Capello

	* Modificado: leame.txt y readme.txt a README.es,en, y license.txt
	  a COPYING.
	* Agregados: los ficheros CHANGES.es y AUTHORS.es.
	* Un error reportado por Norberto Alfredo Bensa: el fichero
	  obj/tmpfile.txt no se agregaba en los paquetes, y tambi�n gracias
	  a �l, ahora en el makefiles se utilizan barras normales (/) para
	  indicar la ruta de acceso de la utilidad DAT de Allegro.

2001-05-31  David A. Capello

	* Agregados los ficheros makefile.qnx y fixqnx.sh por Angelo Mottola:
	  ahora el juego compila tambi�n en QNX.

