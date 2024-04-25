#version 330 core

const float pi = 3.141592;

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform float time;

void main()
{
	float x;
	if (vertex.y > 0.5)
		x = (vertex.y-0.5)*sin(time);
	else x = 0;
	mat3 rotX = mat3((vec3(1,0,0)),vec3(0,cos(x),sin(x)),vec3(0,-sin(x),cos(x)));	
	vec3 offset = vec3(0,1,0);

    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(color,1.0) * N.z;
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(rotX*(vertex-offset)+offset, 1.0);
}


